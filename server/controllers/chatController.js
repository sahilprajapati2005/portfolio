// backend/controllers/chatController.js
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { PromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");
const { resumeData } = require("../data/resumeContext");
require("dotenv").config();

const chatWithGemini = async (req, res) => {
  try {
    const { message } = req.body;

    // 1. Validation
    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ ERROR: GEMINI_API_KEY is missing.");
      return res.status(500).json({ error: "API Key Missing" });
    }

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log("📩 User asked:", message);

    // 2. Initialize Model (UPDATED to Gemini 2.5)
    const model = new ChatGoogleGenerativeAI({
      model: "gemini-2.5-flash", // <--- UPDATED: Old models are retired!
      apiKey: process.env.GEMINI_API_KEY,
      temperature: 0.7,
    });

    // 3. Prompt
    const prompt = PromptTemplate.fromTemplate(`
      You are an AI assistant for Sahil Prajapati. 
      Answer strictly based on this context:
      {context}

      Question: {question}
    `);

    // 4. Execution
    const chain = prompt.pipe(model).pipe(new StringOutputParser());
    
    const response = await chain.invoke({
      context: resumeData,
      question: message,
    });

    console.log("✅ AI Answered:", response);
    res.json({ reply: response });

  } catch (error) {
    console.error("❌ GEMINI ERROR:", error);
    
    // Fallback: If 2.5 fails, suggest updating libraries
    res.status(500).json({ 
      error: "AI Service Failed", 
      details: error.message 
    });
  }
};

module.exports = { chatWithGemini };