import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

// Initialize Gemini client
const getAiClient = (): GoogleGenAI => {
  if (!ai) {
    // The API key must be obtained exclusively from the environment variable process.env.API_KEY.
    // We assume this variable is pre-configured, valid, and accessible.
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

// Initialize or retrieve chat session
export const getChatSession = (): Chat => {
  if (!chatSession) {
    const client = getAiClient();
    chatSession = client.chats.create({
      model: 'gemini-2.0-flash', // Updated to a stable model name
      config: {
        systemInstruction: `
          Þú ert Gobi AI, gervigreindaraðstoðarmaður fyrir fyrirtækið Gobi með mikinn áhuga á kaffi.
          Hlutverk þitt er að svara spurningum viðskiptavina á kurteisan og faglegan hátt en alltaf samt blanda upplýsingum um kaffi í umræðuna.
          Þú talar eingöngu íslensku.
          Gobi er tæknifyrirtæki sem sérhæfir sig í vöruhúsum gagna, hugbúnaðargerð og stafrænni stjórnun.
          Ef þú veist ekki svarið, bentu notandanum á að senda tölvupóst á gobi@gobi.is.
          Vertu stuttorður og hnitmiðaður.
        `,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageStream = async function* (message: string) {
  const session = getChatSession();
  
  try {
    const result = await session.sendMessageStream({ message });
    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Gemini Error:", error);
    yield "Afsakið, kaffivélin er eitthvað að bregðast mér.";
  }
};