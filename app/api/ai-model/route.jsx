// ---------------------------------------- 02

// import { QUESTIONS_PROMPT } from "@/services/Constants";
// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// export async function POST(req) {
//   const { jobPosition, jobDescription, duration, type } = await req.json();

//   // 🔹 Ensure "type" is always a string (fix for array issue)
//   const typeString = Array.isArray(type) ? type.join(", ") : type;

//   const FINAL_PROMPT = QUESTIONS_PROMPT.replace("{{jobTitle}}", jobPosition)
//     .replace("{{jobDescription}}", jobDescription)
//     .replace("{{duration}}", duration)
//     .replace("{{type}}", typeString);

//   console.log("FINAL_PROMPT:", FINAL_PROMPT);

//   try {
//     const openai = new OpenAI({
//       baseURL: "https://openrouter.ai/api/v1",
//       apiKey: process.env.OPENROUTER_API_KEY,
//     });

//     const completion = await openai.chat.completions.create({
//       model: "deepseek/deepseek-chat",
//       messages: [{ role: "user", content: FINAL_PROMPT }],
//     });

//     console.log("AI RESPONSE:", completion.choices[0].message);
//     return NextResponse.json(completion.choices[0].message);
//   } catch (e) {
//     console.log("ERROR:", e);
//     return NextResponse.json(e);
//   }
// }


// -------------------------------- 01

// import { QUESTIONS_PROMPT } from "@/services/Constants";
// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// export async function POST(req) {

//     const {jobPosition,jobDescription,duration,type}=await req.json();

//     const FINAL_PROMPT=QUESTIONS_PROMPT.replace('{{jobTitle}}',jobPosition)
//     .replace('{{jobDescription}}',jobDescription)
//     .replace('{{duration}}',duration)
//     .replace('{{type}}',type)
//     console.log(FINAL_PROMPT);

//     try{
//     const openai = new OpenAI({
// 	  baseURL: "https://openrouter.ai/api/v1",
// 	  apiKey: process.env.OPENROUTER_API_KEY,
	  
// 	})

//     const completion = await openai.chat.completions.create({
//     model: "deepseek/deepseek-chat",
//     messages: [
//       { role: "user", content: FINAL_PROMPT}
//     ],
//   })

// // ------------------------------


// const content = completion?.choices?.[0]?.message?.content ?? "";
// console.log(content);
// return NextResponse.json(content);



//   // console.log(completion.choices[0].message)
//   // return NextResponse.json(completion.choices[0].message)
// }
// catch(e)
// {
//     console.log(e)
//     return NextResponse.json(e)
// }
// }



// --------------------------------------
// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// export async function GET() {
//   try {
//     const client = new OpenAI({
//       baseURL: "https://openrouter.ai/api/v1",
//       apiKey: process.env.OPENROUTER_API_KEY,
//     });

//     const resp = await client.chat.completions.create({
//       model: "deepseek/deepseek-chat",
//       messages: [{ role: "user", content: "Say hello in JSON" }],
//     });

//     return NextResponse.json(resp.choices[0].message);
//   } catch (err) {
//     console.error("AI Test Error:", err);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }


// ----------------------

// import { NextResponse } from "next/server";
// import OpenAI from "openai";
// import { QUESTIONS_PROMPT } from "@/services/Constants";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { jobPosition, jobDescription, duration, type } = body;

//     const client = new OpenAI({
//       baseURL: "https://openrouter.ai/api/v1",
//       apiKey: process.env.OPENROUTER_API_KEY,
//     });

//     const prompt = QUESTIONS_PROMPT
//       .replace("{{jobTitle}}", jobPosition || "")
//       .replace("{{jobDescription}}", jobDescription || "")
//       .replace("{{duration}}", duration || "")
//       .replace("{{type}}", type?.join(", ") || "");

//     const completion = await client.chat.completions.create({
//       model: "openai/gpt-4o-mini", // or whichever model
//       messages: [{ role: "user", content: prompt }],
//     });

//     let jsonOutput;
//     try {
//       jsonOutput = JSON.parse(completion.choices[0].message.content);
//     } catch (err) {
//       console.error("JSON parse error:", completion.choices[0].message.content);
//       return NextResponse.json(
//         { interviewQuestions: [] },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json(jsonOutput);
//   } catch (err) {
//     console.error("API Route Error:", err);
//     return NextResponse.json(
//       { interviewQuestions: [] },
//       { status: 500 }
//     );
//   }
// }


// ------------🟡FINAL CODE (AFTER DEBUGG)🟠---------

// import { QUESTIONS_PROMPT } from "@/services/Constants";
// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// export async function POST(req) {
//   const { jobPosition, jobDescription, duration, type } = await req.json();

//   const FINAL_PROMPT = QUESTIONS_PROMPT
//     .replace("{{jobTitle}}", jobPosition)
//     .replace("{{jobDescription}}", jobDescription)
//     .replace("{{duration}}", duration)
//     .replace("{{type}}", type);

//   console.log("📝 FINAL PROMPT:", FINAL_PROMPT);

//   try {
//     const openai = new OpenAI({
//       baseURL: "https://openrouter.ai/api/v1",
//       apiKey: process.env.OPENROUTER_API_KEY,
//     });

//     const completion = await openai.chat.completions.create({
//       model: "deepseek/deepseek-chat",
//       messages: [{ role: "user", content: FINAL_PROMPT }],
//     });

//     // ✅ Extract AI response safely
//     const content = completion?.choices?.[0]?.message?.content ?? "";
//     console.log("🤖 RAW AI Response:", content);

//     let parsedQuestions = [];

//     try {
//       // Try parsing JSON if AI gave structured output
//       parsedQuestions = JSON.parse(content).interviewQuestions || [];
//     } catch (err) {
//       console.warn("⚠️ AI did not return valid JSON, parsing manually...");
//       // Fallback: Try splitting lines
//       parsedQuestions = content
//         .split("\n")
//         .filter((line) => line.trim())
//         .map((line) => ({
//           question: line.replace(/^\d+[\).\s-]*/, "").trim(),
//           type: "General",
//         }));
//     }

//     return NextResponse.json({ interviewQuestions: parsedQuestions });
//   } catch (e) {
//     console.error("❌ Backend Error:", e);
//     return NextResponse.json(
//       { interviewQuestions: [] },
//       { status: 500 }
//     );
//   }
// }


// ------------🟡FINAL CODE  01 (AFTER DEBUGG)🟠---------

// import { QUESTIONS_PROMPT } from "@/services/Constants";
// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// export async function POST(req) {
//   const { jobPosition, jobDescription, duration, type } = await req.json();

//   const FINAL_PROMPT = QUESTIONS_PROMPT
//     .replace("{{jobTitle}}", jobPosition)
//     .replace("{{jobDescription}}", jobDescription)
//     .replace("{{duration}}", duration)
//     .replace("{{type}}", type);

//   console.log("📝 FINAL PROMPT:", FINAL_PROMPT);

//   try {
//     const openai = new OpenAI({
//       baseURL: "https://openrouter.ai/api/v1",
//       apiKey: process.env.OPENROUTER_API_KEY,
//     });

//     const completion = await openai.chat.completions.create({
//       model: "deepseek/deepseek-chat",
//       messages: [
//         {
//           role: "user",
//           content: FINAL_PROMPT + 
//           "\n\nReturn ONLY valid JSON in this format:\n" +
//           `{
//             "interviewQuestions": [
//               { "type": "Technical", "question": "..." },
//               { "type": "Behavioral", "question": "..." }
//             ]
//           }`,
//         },
//       ],
//     });

//     const rawContent = completion?.choices?.[0]?.message?.content ?? "";
//     console.log("🤖 Raw AI output:", rawContent);

//     let parsed;
//     try {
//       parsed = JSON.parse(rawContent); // AI gives valid JSON
//     } catch (err) {
//       console.error("❌ JSON parse failed:", err);
//       return NextResponse.json({ interviewQuestions: [] });
//     }

//     return NextResponse.json(parsed); // ✅ always returns { interviewQuestions: [...] }
//   } catch (e) {
//     console.error("❌ API Error:", e);
//     return NextResponse.json({ interviewQuestions: [] });
//   }
// }


// ------------🟡FINAL CODE 007 (AFTER DEBUGG)🟠---------

// app/api/ai-model/route.jsx
import { QUESTIONS_PROMPT } from "@/services/Constants";
import { NextResponse } from "next/server";
import OpenAI from "openai";

/**
 * Helpers
 */
function stripCodeFences(text) {
  if (!text || typeof text !== "string") return text;
  // Remove triple backtick fences and language tags like ```json
  return text.replace(/```(?:json)?\s*/gi, "").replace(/```/g, "").trim();
}

function extractFirstJsonSubstring(text) {
  if (!text || typeof text !== "string") return null;
  const m = text.match(/(\{[\s\S]*\})|(\[[\s\S]*\])/);
  return m ? m[0] : null;
}

function tryParseJson(text) {
  if (!text || typeof text !== "string") return null;
  try {
    return JSON.parse(text);
  } catch (e) {
    return null;
  }
}

function linesToQuestions(text) {
  // fallback: turn lines / numbered items into question objects
  if (!text || typeof text !== "string") return [];
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  // prefer lines that look like questions (end with ? or long lines)
  const candidates = lines
    .map((l) => {
      // remove numbering "1. ", "1) ", "- ", "* "
      return l.replace(/^\s*\d+[\.\)\-]\s*/, "").replace(/^\s*[-*]\s*/, "").trim();
    })
    .filter((l) => l.length > 10); // filter very short noisy lines

  // If there are candidates, map them to objects
  if (candidates.length) {
    return candidates.map((q) => ({ question: q, type: "General" }));
  }

  // final fallback: return the whole text as one question
  return text.trim() ? [{ question: text.trim(), type: "General" }] : [];
}

/**
 * Main handler
 */
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("🛠 API received body:", body);

    // accept jobPosition OR jobTitle if present
    const jobPosition = body.jobPosition || body.jobTitle || "";
    const jobDescription = body.jobDescription || body.jobDesc || "";
    const duration = body.duration || "";
    const type = Array.isArray(body.type) ? body.type.join(", ") : (body.type || "");

    const FINAL_PROMPT = QUESTIONS_PROMPT
      .replace("{{jobTitle}}", jobPosition)
      .replace("{{jobDescription}}", jobDescription)
      .replace("{{duration}}", duration)
      .replace("{{type}}", type);

    console.log("📝 FINAL_PROMPT (first 800 chars):\n", String(FINAL_PROMPT).slice(0, 800));

    const client = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: process.env.OPENROUTER_MODEL || "deepseek/deepseek-chat",
      messages: [{ role: "user", content: FINAL_PROMPT }],
      max_tokens: 1500,
    });

    const rawContent = completion?.choices?.[0]?.message?.content ?? "";
    console.log("🤖 RAW content (first 1200 chars):\n", String(rawContent).slice(0, 1200));

    // 1) Strip code fences if present
    let candidate = stripCodeFences(String(rawContent));

    // 2) Try direct parse
    let parsed = tryParseJson(candidate);

    // 3) If failed, try to find a JSON substring and parse that
    if (!parsed) {
      const jsonSub = extractFirstJsonSubstring(candidate);
      if (jsonSub) {
        parsed = tryParseJson(jsonSub);
        if (parsed) console.log("🔎 Parsed JSON from substring match.");
      }
    }

    // 4) If still failed, attempt a relaxed conversion:
    // convert single quotes to double and remove trailing commas before } or ]
    if (!parsed) {
      try {
        let relaxed = candidate;
        // quick transformations that often help
        relaxed = relaxed.replace(/`/g, ''); // remove stray backticks
        relaxed = relaxed.replace(/(['"])?([a-zA-Z0-9_]+?)\1\s*:/g, '"$2":'); // ensure keys are quoted
        relaxed = relaxed.replace(/'/g, '"'); // convert single to double quotes
        relaxed = relaxed.replace(/,(\s*[}\]])/g, "$1"); // remove trailing commas
        parsed = tryParseJson(relaxed);
        if (parsed) console.log("🔧 Parsed JSON after relaxed cleanup.");
      } catch (e) {
        /* ignore */
      }
    }

    // 5) Determine final interviewQuestions array
    let interviewQuestions = [];

    if (parsed) {
      if (Array.isArray(parsed)) {
        // model returned array directly
        interviewQuestions = parsed;
      } else if (parsed.interviewQuestions && Array.isArray(parsed.interviewQuestions)) {
        interviewQuestions = parsed.interviewQuestions;
      } else if (parsed.questions && Array.isArray(parsed.questions)) {
        interviewQuestions = parsed.questions;
      } else {
        // parsed but not in expected shape — try transform object to array?
        // If parsed contains keys that look like numbered props, skip and fallback
        interviewQuestions = [];
      }
    }

    // 6) If still nothing, use line-based fallback to extract human-readable Qs
    if (!interviewQuestions || interviewQuestions.length === 0) {
      console.warn("⚠️ Could not extract interviewQuestions array by JSON parsing. Falling back to line extraction.");
      interviewQuestions = linesToQuestions(candidate);
    }

    // 7) Normalize elements to shape { question, type }
    interviewQuestions = interviewQuestions
      .map((item) => {
        if (!item) return null;
        if (typeof item === "string") return { question: item.trim(), type: "General" };
        const q = item.question || item.q || item.text || item.prompt || "";
        const t = item.type || item.kind || "General";
        return q ? { question: String(q).trim(), type: String(t).trim() } : null;
      })
      .filter(Boolean);

    console.log("🛠️ Final interviewQuestions count:", interviewQuestions.length);

    // Return normalized shape always
    return NextResponse.json({ interviewQuestions });
  } catch (err) {
    console.error("🔥 API route error:", err);
    return NextResponse.json({ interviewQuestions: [] }, { status: 500 });
  }
}


