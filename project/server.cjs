// server.cjs
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

// ---- Config ----
const N8N_WEBHOOK_URL =
  process.env.WORKFLOW_URL ||
  'https://joesph-pinnatifid-brock.ngrok-free.dev/webhook/chat';

// ---- Middleware ----
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// ---- Session helpers (simple in-memory; replace with DB/Redis in prod) ----
const generateSessionId = () => 'u' + Math.random().toString(36).substr(2, 9);
const sessions = new Map();

// ---- API: chat endpoint ----
app.post('/api/ask', async (req, res) => {
  try {
    const { message, sessionId: clientSessionId } = req.body || {};

    if (!message || !String(message).trim()) {
      return res.status(400).json({
        error: 'Message is required',
        response: 'يرجى إدخال رسالة صحيحة.'
      });
    }

    // Use provided sessionId or create a new one
    let sessionId = clientSessionId;
    if (!sessionId) {
      sessionId = generateSessionId();
      sessions.set(sessionId, { createdAt: new Date() });
    }

    // Payload to n8n
    const payload = {
      sessionId,
      message: String(message).trim()
    };

    console.log('➡️ Sending to n8n:', payload);

    // ---- Call n8n webhook (AXIOS) ----
    const { data } = await axios.post(N8N_WEBHOOK_URL, payload, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 30_000
    });

    console.log('⬅️ Received from n8n:', data);

    // Normalize response from n8n (supports both formats)
    let botResponse = 'عذراً، لم أتمكن من الحصول على إجابة مناسبة.';
    if (Array.isArray(data) && data.length > 0 && data[0]?.output) {
      botResponse = String(data[0].output);
    } else if (data && typeof data === 'object' && data.answer) {
      botResponse = String(data.answer);
    } else if (typeof data === 'string') {
      botResponse = data;
    }

    botResponse = botResponse.trim();

    return res.json({
      response: botResponse,
      sessionId,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    const details = error?.response?.data || error?.message || String(error);
    console.error('❌ Error calling n8n webhook:', details);
    return res.status(500).json({
      error: 'Internal server error',
      response: 'عذراً، حدث خطأ في الاتصال بالخدمة. يرجى المحاولة مرة أخرى لاحقاً.',
      details
    });
  }
});

// ---- Health check ----
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    n8nEndpoint: N8N_WEBHOOK_URL
  });
});

// ---- Serve frontend (SPA) ----
app.get('*', (req, res) => {
  // resolve dist/index.html relative to this file
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// ---- Cleanup old sessions hourly ----
setInterval(() => {
  const cutoff = Date.now() - 60 * 60 * 1000; // 1 hour
  for (const [sid, s] of sessions.entries()) {
    if (s.createdAt?.getTime() < cutoff) sessions.delete(sid);
  }
}, 60 * 60 * 1000);

// ---- Start server ----
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🔗 n8n webhook URL: ${N8N_WEBHOOK_URL}`);
});
