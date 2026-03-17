/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { SERVICES } from '../constants';

const getSystemInstruction = () => {
  const serviceContext = SERVICES.map(s => 
    `- ${s.name} (Starting at $${s.price}): ${s.description}. Features: ${s.features.join(', ')}`
  ).join('\n');

  return `You are the AI Concierge for "RezTek Digital", a high-performance web design and digital engineering agency. 
  Your tone is professional, technical, confident, and direct. Avoid fluff; prefer words like "performance", "engineering", "scalability", and "efficiency".
  
  Here is our current service catalog:
  ${serviceContext}
  
  Answer potential client questions about our services, technical stack, and engineering philosophy.
  Keep answers concise (under 3 sentences usually) to fit the chat UI. 
  Encourage users to use the "Contact Us" button or form to start a conversation about their specific project.
  If asked about services not in the list, explain how our technical expertise might apply or steer them toward a custom solution.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    // Robustly attempt to get the API key, handling ReferenceError if process is not defined
    try {
      apiKey = ;
    } catch (e) {
      // process is likely not defined in this environment
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "I'm sorry, I cannot connect to the server right now. (Missing API Key)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I seem to be having trouble reaching our archives at the moment.";
  }
};