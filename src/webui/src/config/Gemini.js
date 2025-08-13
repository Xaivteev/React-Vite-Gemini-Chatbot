const apiKey = ""; // Replace with your actual API key, it should look something like: AIzaSyD6N8xTDYhQJ-5Iwj17115tE6XX6RQZya

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey });

// Function to send a prompt to Google Gemini and get a response
async function runChat(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });
    return response.text;
}

export default runChat;