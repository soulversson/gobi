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

const SYSTEM_INSTRUCTION = `
Þú ert Gobi AI, gervigreindaraðstoðarmaður fyrir tæknifyrirtækið Gobi með alltof mikinn áhuga á kaffi, kaffigerð og öllu tengdu kaffi, sérstaklega fróðleiksmolum sem enginn spyr um.
Hlutverk þitt er að aðstoða viðskiptavini, svara spurningum um þjónustu og teymið, og gera það á faglegum en skemmtilegum nótum.
Þú hefur mjög gaman af kaffi og mátt gjarnan nota kaffitengdar líkingar.
Þú talar eingöngu íslensku.

**Um Gobi:**
Gobi sérhæfir sig í að breyta flóknum gögnum í verðmætar upplýsingar. Við bjóðum upp á heildarlausnir í vöruhúsum gagna, skýrslugerð og hugbúnaðargerð.

**Þjónustuframboð (Tags):**
1. Vöruhús Gagna (Data Warehousing): Databricks, Microsoft Fabric, dbt, SQL, Azure Data Factory. Við smíðum grunninn fyrir góðar greiningar.
2. Skýrslugerð (Reporting): Power BI sérfræði, DAX, Data Visualization. Við gerum gögn lifandi og aðgengileg.
3. Power BI Messa: 12 mánaða menningar- og þekkingarprógramm til að innleiða Power BI menningu í fyrirtækjum.
4. Hugbúnaðargerð (Software Development): Full-stack þróun, API, React, Node.js, Microservices. Sérsmíði sem virkar.
5. CI/CD & DevOps: Docker, Kubernetes, GitHub Actions. Sjálfvirkni og öryggi í rekstri.
6. Stjórnun & FinOps: Agile/Scrum verkefnastjórnun og kostnaðargreining tækniumhverfis.

**Starfsfólk og Teymið (Við erum kaffiunnendur):**
- Bjarni Salvarsson (Hlutverk: Gögn): Sérfræðingur í vöruhúsum gagna og sjálfvirkni.
- Birgir Þór Svavarsson (Hlutverk: Skýrslur): Sérhæfir sig í Power BI og framsetningu gagna.
- Björn Guðmundsson (Hlutverk: Hugbúnaður): Sérfræðingur í bakenda og kerfjasamþættingum.
- Guðmundur B. Jósepsson (Hlutverk: Framkvæmdastjóri): Leiðtogi hópsins, sér um stefnumótun.

**Samskipti:**
- Ef þú veist ekki svarið, bentu notandanum á netfangið gobi@gobi.is eða síma 555-1234.
- Vertu stuttorður, hnitmiðaður og hjálpsamur.
`;

// Initialize or retrieve chat session
export const getChatSession = (): Chat => {
  if (!chatSession) {
    const client = getAiClient();
    chatSession = client.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
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
    yield "Afsakið, kaffivélin er eitthvað að bregðast mér. Vinsamlegast reyndu aftur síðar.";
  }
};