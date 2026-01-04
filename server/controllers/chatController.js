// backend/controllers/chatController.js
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { PromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");
const { resumeData } = require("../data/resumeContext");
require("dotenv").config();

const chatWithGemini = async (req, res) => {
  try {
    const { message } = req.body;

    // --- DEBUGGING CHECKS ---
    // 1. Check if API Key exists
    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ ERROR: GEMINI_API_KEY is missing from .env file");
      return res.status(500).json({ error: "Server Configuration Error: API Key Missing" });
    }

    // 2. Check if message exists
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log("📩 Received Message:", message);

    // --- AI CONFIGURATION ---
    // Using 'gemini-1.5-flash' because it is faster and more stable than 'gemini-pro'
    const model = new ChatGoogleGenerativeAI({
      model: "gemini-1.5-flash", 
      apiKey: process.env.GEMINI_API_KEY,
      temperature: 0.7,
    });

    // --- PROMPT ---
    const prompt = PromptTemplate.fromTemplate(`
      You are an AI assistant for a portfolio website belonging to Sahil Prajapati.
      Your goal is to answer questions strictly based on Sahil's resume and project details provided below.

      Context about Sahil:
      {context}

      User Question: {question}
      Answer:
    `);

    // --- EXECUTION ---
    const chain = prompt.pipe(model).pipe(new StringOutputParser());
    
    const response = await chain.invoke({
      context: resumeData,
      question: message,
    });

    console.log("✅ AI Responded Successfully");
    res.json({ reply: response });

  } catch (error) {
    // --- ERROR LOGGING ---
    // This prints the REAL error to your VS Code Terminal
    console.error("❌ Gemini Chat Error Details:", error); 
    
    res.status(500).json({ 
      error: "AI Service Failed", 
      details: error.message || "Unknown Error" 
    });
  }
};

module.exports = { chatWithGemini };