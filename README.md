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

# Pinecone Index & Ingestion Workflow

The Pinecone index is running inside my personal account, and all vectors for *Ministry Bot* are stored there.
*Check the Image showing the index* 👇

![Pinecone Index](https://raw.githubusercontent.com/Ahmad-ElHariri/Ministry-Bot/main/Pinecone%20index.png)


## Pinecone Index Parameters
- **Vector type:** Dense  
- **Dimension:** 1536 (matches OpenAI embedding models `text-embedding-3-small`)  
- **Metric:** Cosine (best choice for semantic similarity with OpenAI embeddings)  

## Ingestion Workflow (One-Time Only)
The ingestion workflow prepares and stores our source documents in Pinecone. It should be run **once**, only when new documents are added.

**Steps:**
1. List PDFs from Google Drive  
2. Split Out → process one file at a time  
3. Download PDF  
4. Data Loader + Text Splitter → extract text and chunk it  
5. OpenAI Embeddings → convert text chunks into vectors  
6. Pinecone Vector Store → upload vectors  


**Records after the ingestion is done: 👇**
![Pinecone Chunks](https://raw.githubusercontent.com/Ahmad-ElHariri/Ministry-Bot/main/Pinecone%20Chunks.png)


