const apiKey = ""; // Replace with your actual API key, it should look something like: AIzaSyD6N8xTDYhQJ-5Iwj17115tE6XX6RQZya

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey });

async function runChat(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });
    console.log(response.text);
    return response.text;
}

export default runChat;