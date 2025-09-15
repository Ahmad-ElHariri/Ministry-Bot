# Ministry Bot – n8n Workflow

Ministry Bot is an AI-powered assistant built with n8n and vector search (Pinecone) that answers questions about Lebanese ministries based on legal and organizational documents. This repository contains the n8n workflow JSON to manage ingestion, retrieval, and LLM query handling.

## Prerequisites
- n8n installed (local)
- Pinecone account (or other vector DB if used)
- OpenAI API key
- Any other credentials (Google Drive, custom DB, etc.)

## Setup Instructions
1. Clone this repository:
   ```bash
   git clone https://github.com/Ahmad-ElHariri/Ministry-Bot.git
   ```
2. Open **n8n** → *Workflows* → *Import from file/clipboard*.
3. Copy the JSON from this repo and paste it into n8n.
