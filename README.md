# Ministry Bot – n8n Workflow

**Ministry Bot** is an AI-powered assistant built with **n8n** and **Pinecone vector search**.  
It answers questions in Arabic about **Lebanese ministries** based on official legal and organizational documents.  

This repository contains the n8n workflows used for:  
- **Ingestion** → processing and storing documents in Pinecone.  
- **Chatting** → retrieving context and answering user questions with an LLM.  

---

## 🚀 Prerequisites
- [n8n](https://n8n.io) installed (local or server)  

---

## ⚙️ Setup Instructions
1. Clone this repository:
   ```bash
   git clone https://github.com/Ahmad-ElHariri/Ministry-Bot.git
   ```
2. Open **n8n** → *Workflows* → *Import from file/clipboard*.  
3. Copy the JSON from this repo and paste it into n8n.  

---

# 📦 Pinecone Index & Ingestion Workflow

The Pinecone index is running in my personal account.  
It stores all **vectors** representing the Lebanese ministries’ documents.  

*Here’s the index:* 👇  
![Pinecone Index](https://raw.githubusercontent.com/Ahmad-ElHariri/Ministry-Bot/main/Pinecone%20index.png)

### Index Parameters
- **Vector type:** Dense  
- **Dimension:** 1536 (matches OpenAI `text-embedding-3-small`)  
- **Metric:** Cosine (best choice for semantic similarity)  

---

## 📝 Ingestion Workflow (One-Time Process)
The ingestion workflow is used to **upload documents into Pinecone**.  
⚠️ This process should be run **only once**, when new PDFs are added.  

**Steps performed:**  
1. List PDFs from Google Drive  
2. Split → handle files one by one  
3. Download each PDF  
4. Load text & split into chunks  
5. Generate embeddings using OpenAI  
6. Upload vectors into Pinecone  

*Here’s a snapshot after ingestion (record count: 2,129):* 👇  
![Pinecone Chunks](https://raw.githubusercontent.com/Ahmad-ElHariri/Ministry-Bot/main/Pinecone%20Chunks.png)

---

# 💬 Chatting Workflow

This workflow powers the **interactive Q&A**.  

- **Chat Node** → user enters a question.  
- **Internal Data Agent** → AI agent that manages retrieval and memory.  
- **Embeddings Model** → converts the user query into vectors.  
- **Pinecone Internal Data** → fetches the most relevant chunks.  
- **Chat Model (4.1-mini)** → generates the final Arabic answer.  

👉 In simple terms:  
User asks → Query is embedded → Pinecone fetches context → Agent answers in Arabic.  

---
