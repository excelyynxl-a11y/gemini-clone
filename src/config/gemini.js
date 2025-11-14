// npm install @google/genai


import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({apiKey: "AIzaSyAfqww5fniiupcQwR2j86zCIPuLi9qhLt0"});

async function runChat(prompt) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });

  console.log(response.text); // output is often markdown

  return response.text;
}

export default runChat;