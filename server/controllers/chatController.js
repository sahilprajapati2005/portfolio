// backend/controllers/chatController.js
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { PromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");
const { resumeData } = require("../data/resumeContext");
require("dotenv").config();

// 1. Initialize Gemini Model
const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro",
  apiKey: process.env.GEMINI_API_KEY,
  temperature: 0.7, // 0 to 1 (0.7 is a good balance of creativity and accuracy)
});

// 2. Define the Chat Logic
const chatWithGemini = async (req, res) => {
  try {
    const { message } = req.body;

    // Basic Validation
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // 3. Create the Prompt Template
    // This tells the AI how to behave
    const prompt = PromptTemplate.fromTemplate(`
      You are an AI assistant for a portfolio website belonging to Sahil Prajapati.
      Your goal is to answer questions strictly based on Sahil's resume and project details provided below.

      INSTRUCTIONS:
      1. If the user asks about Sahil's skills, projects, education, or contact info, answer clearly using the context.
      2. If the user asks a general question (e.g., "How to cook pasta?"), politely refuse and say you only know about Sahil.
      3. Keep answers professional but conversational.

      CONTEXT (Sahil's Data):
      {context}

      USER QUESTION:
      {question}

      YOUR ANSWER:
    `);

    // 4. Create the Chain (Prompt -> Model -> Output Text)
    const chain = prompt.pipe(model).pipe(new StringOutputParser());

    // 5. Run the Chain
    const response = await chain.invoke({
      context: resumeData,
      question: message,
    });

    // 6. Send Response to Frontend
    res.json({ reply: response });

  } catch (error) {
    console.error("Gemini Chat Error:", error);
    res.status(500).json({ error: "Something went wrong with the AI." });
  }
};

module.exports = { chatWithGemini };