// "use client";
// import React, { useEffect, useState } from "react";

// function StartInterview() {
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch (e) {
//       // Will fail if not triggered by click
//     }
//     setIsFullscreen(isFsActive());
//   };

//   useEffect(() => {
//     setIsFullscreen(isFsActive());

//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);
//       setBlocked(!fsNow); // Block UI if fullscreen lost
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("webkitfullscreenchange", onFsChange);
//     document.addEventListener("mozfullscreenchange", onFsChange);
//     document.addEventListener("MSFullscreenChange", onFsChange);

//     // Restrict shortcuts (best-effort)
//     const onKeyDown = (e) => {
//       const key = (e.key || "").toLowerCase();
//       if (
//         e.key === "F11" ||
//         e.key === "F12" ||
//         (e.ctrlKey && e.shiftKey && (key === "i" || key === "j" || key === "t" || key === "n" )) ||
//         (e.ctrlKey && key === "u") ||
//         (e.ctrlKey && key === "c") ||
//         (e.ctrlKey && key === "a") ||
//         (e.ctrlKey && key === "z") ||
//         (e.ctrlKey && key === "y") ||
//         (e.ctrlKey && key === "v") ||
//         (e.ctrlKey && key === "t") ||
//         (e.ctrlKey && key === "1") ||
//         (e.ctrlKey && key === "2") ||
//         (e.ctrlKey && key === "3") ||
//         (e.ctrlKey && key === "4") ||
//         (e.ctrlKey && key === "5") ||
//         (e.ctrlKey && key === "6") ||
//         (e.ctrlKey && key === "7") ||
//         (e.ctrlKey && key === "8") ||
//         (e.ctrlKey && key === "0") ||
//         (e.ctrlKey && key === "9") ||
//         (e.altKey && key === "F4") ||
//         (e.altKey && e.key === ' ')
        

//       ) {
//         e.preventDefault();
//         e.stopPropagation();
//         alert("⚠️ Restricted action during interview.");
//       }
//     };

//     // ✅ Disable right-click
//     const disableContextMenu = (e) => e.preventDefault();

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("webkitfullscreenchange", onFsChange);
//       document.removeEventListener("mozfullscreenchange", onFsChange);
//       document.removeEventListener("MSFullscreenChange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//     };
//   }, []);

//   // If not fullscreen → show black screen + button
//   if (!isFullscreen || blocked) {
//     return (
//       <div className="w-screen h-screen bg-black flex items-center justify-center">
//         <div className="text-center text-white">
//           <p className="mb-4 font-bold">
//             ⚠️ Interview requires Fullscreen Mode. Click below to continue.
//           </p>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Real interview UI
//   return (
//     <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow rounded-xl p-8">
//         <h1 className="text-2xl font-bold">StartInterview</h1>
//         <p className="mt-2 text-gray-600">
//           Stay in fullscreen to continue your interview.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default StartInterview;

// ---------- 🤍💛💚  Above is also good [restrict-mode] ----------
//---------- 💦💝💛 More enhance---------

// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState } from "react";
// import Vapi from '@vapi-ai/web';


// function StartInterview() { 
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);

//   useEffect(() => {
//     interviewInfo && startCall();
//   }, [interviewInfo]);

//   const startCall = () => {
//     // ✅ Normalize: interviewData OR root
//     const d = interviewInfo?.interviewData ?? interviewInfo;

//     // ✅ Support multiple keys
//     let raw =
//       d?.questionList ??
//       d?.questions ??
//       d?.questionlist ??
//       d?.questionsList ??
//       [];

//     // ✅ Parse stringified JSON if needed
//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     // ✅ Build final string
//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item, index) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//     // ✅ Final console.log at the end
//     console.log(questionList);
//   };


//   //---MY BC [ counts ]----

//   let Penalty = 0;









  

//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch (e) {
//       // Will fail if not triggered by click
//     }
//     setIsFullscreen(isFsActive());
//   };

//   useEffect(() => {
//     setIsFullscreen(isFsActive());

//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);
//       setBlocked(!fsNow); // Block UI if fullscreen lost
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("webkitfullscreenchange", onFsChange);
//     document.addEventListener("mozfullscreenchange", onFsChange);
//     document.addEventListener("MSFullscreenChange", onFsChange);

//     // Restrict shortcuts (best-effort)
//     // const onKeyDown = (e) => {
//     //   const key = (e.key || "").toLowerCase();
//     //   if  (
//     //     e.key === "escape" ||
//     //     e.key === "F11" ||        
//     //     e.key === "F12" ||
//     //     (e.ctrlKey && e.shiftKey && (key === "i" || key === "j" || key === "t" || key === "n")) ||
//     //     (e.ctrlKey && key === "u") ||
//     //     (e.ctrlKey && key === "c") ||
//     //     (e.ctrlKey && key === "a") ||
//     //     (e.ctrlKey && key === "n") ||
//     //     (e.ctrlKey && key === "r") ||
//     //     (e.ctrlKey && key === "v") ||
//     //     (e.ctrlKey && key === "t") ||
//     //     (e.ctrlKey && key === "1") ||
//     //     (e.ctrlKey && key === "2") ||
//     //     (e.ctrlKey && key === "3") ||
//     //     (e.ctrlKey && key === "4") ||
//     //     (e.ctrlKey && key === "5") ||
//     //     (e.ctrlKey && key === "6") ||
//     //     (e.ctrlKey && key === "7") ||
//     //     (e.ctrlKey && key === "8") ||
//     //     (e.ctrlKey && key === "0") ||
//     //     (e.ctrlKey && key === "9") ||
//     //     (e.altKey && key === "F4") ||
//     //     (e.altKey && e.key === " ")||
//     //     (e.winKey)

        
//     //   )  
//     //   { Penalty += 1 ;
//     //     e.preventDefault();
//     //     e.stopPropagation();
//     //      //alert("⚠️ Restricted action during interview. Penalty: -" + Penalty);
//     //   }


//     //===🎯🎯🎯 New Version of Keys Disablities====

//     const onKeyDown = (e) => {
//   // Only lowercase single-character keys; keep named keys' exact case ("Escape", "F11", etc.)
//   const key = (e.key || "");
//   const ch = key.length === 1 ? key.toLowerCase() : key;

//   // Treat Ctrl on Windows/Linux and Command on macOS the same for shortcut blocking
//   const ctrlLike = e.ctrlKey || e.metaKey; // metaKey is Cmd on macOS and Windows key on Windows [1][16]

//   if (
//     // Named/function keys must match exact case per spec
//     key === "Escape" ||                          // not "escape" [14]
//     key === "F11" ||                             // do not lowercase "F11" [14]
//     key === "F12" ||                             // do not lowercase "F12" [14]

//     // Ctrl/Cmd + Shift developer/browser combos (often non-cancelable in some browsers)
//     (ctrlLike && e.shiftKey && (ch === "i" || ch === "j" || ch === "t" || ch === "n")) || // DevTools/new tab/new window [14][4]

//     // Common Ctrl/Cmd combos
//     (ctrlLike && ch === "u") ||
//     (ctrlLike && ch === "c") ||
//     (ctrlLike && ch === "a") ||
//     (ctrlLike && ch === "n") ||
//     (ctrlLike && ch === "r") ||
//     (ctrlLike && ch === "v") ||
//     (ctrlLike && ch === "t") ||
//     (ctrlLike && ch === "1") ||
//     (ctrlLike && ch === "2") ||
//     (ctrlLike && ch === "3") ||
//     (ctrlLike && ch === "4") ||
//     (ctrlLike && ch === "5") ||
//     (ctrlLike && ch === "6") ||
//     (ctrlLike && ch === "7") ||
//     (ctrlLike && ch === "8") ||
//     (ctrlLike && ch === "0") ||
//     (ctrlLike && ch === "9") ||

//     // Alt+F4 is a named key combo; compare the named key with exact case
//     (e.altKey && key === "F4") ||                // not lowercased [14]

//     // Space with Alt (compare with the actual space key value " ")
//     (e.altKey && key === " ") ||

//     // Windows/Command key handling: there is no e.winKey; use metaKey
//     (e.metaKey)                                  // replaces (e.winKey) [1][16]
//   ) {
//     Penalty += 1;

//     // Only prevent default if the event is cancelable; privileged shortcuts may be non-cancelable
//     if (e.cancelable) e.preventDefault();        // avoids no-op/warnings on reserved shortcuts [11][4]

//     e.stopPropagation();
//     // alert("⚠️ Restricted action during interview. Penalty: -" + Penalty);
//   }



//     //=========================================


//       // ✅ Disable PrintScreen
//       if (e.key === "PrintScreen") {
//         e.preventDefault();
//         navigator.clipboard.writeText(""); // Clear clipboard
//         alert("⚠️ Screenshots are disabled during the interview.");
//       }
//     };

//     //✅ Disable right-click
//     const disableContextMenu = (e) => e.preventDefault();

//     // ✅ Detect tab/window switch
//     const onVisibilityChange = () => {
//       if (document.hidden) Penalty += 1;{
//         alert("⚠️ You switched tabs or minimized the window. This may cause Disqualification from interview. Penalty: -" + Penalty);
//       }
//     };

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("webkitfullscreenchange", onFsChange);
//       document.removeEventListener("mozfullscreenchange", onFsChange);
//       document.removeEventListener("MSFullscreenChange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // If not fullscreen → show black screen + button
//   if (!isFullscreen || blocked)  { Penalty+=1
//     return (
//       <div className="w-screen h-screen bg-black flex items-center justify-center">
//         <div className="text-center text-white">
//           <p className="mb-4 font-bold">
//             ⚠️ Interview requires Fullscreen Mode. Click below to continue. Penalities are adding while leaving Full-screen. 
//           </p>
//           <h2 className="mb-4 font-bold">Penality: {Penalty} </h2>

//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Real interview UI
//   return (
//     <div className="p-10 lg:px-48 xl:px-56"> 
//       <h2 className="font-bold text-xl flex justify-between">AI Interview session
//         <span className="flex gap-2 items-center">
//           <Timer/>
//           00:00:00
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
//           <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//               <Image src={'/avataar.jpg'} alt="S-!Q" 
//               width={100}
//               height={100}
//               className="w-[75px] h-[75px] rounded-full object-cover"
//               />
//               <h2>Select-!Q</h2>
//           </div>
          
//           <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//               <h2 className="text-3xl bg-primary text-white p-4 rounded-full px-7 "> {interviewInfo?.userName[0]} </h2>
//               <h2>{interviewInfo?.userName}</h2>
//           </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />

//         <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">Interview in Progress...</h2>
  
//     </div>
//   );
// }

// export default StartInterview;

// ======= 🤍💛 Test Block All-keys Blocked ========

// "use client";
// import React, { useEffect, useState } from "react";

// function StartInterview() {
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch (e) {
//       // ignore
//     }
//     setIsFullscreen(isFsActive());
//   };

//   useEffect(() => {
//     setIsFullscreen(isFsActive());

//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);
//       setBlocked(!fsNow);
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("webkitfullscreenchange", onFsChange);
//     document.addEventListener("mozfullscreenchange", onFsChange);
//     document.addEventListener("MSFullscreenChange", onFsChange);

//     // Existing simple keydown blocker (kept as-is)
//     const onKeyDown = (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//     };

//     // Disable right click
//     const disableContextMenu = (e) => e.preventDefault();

//     // Detect tab switch / leaving window
//     const onBlur = () => {
//       alert("⚠️ You left the interview window. Please stay focused.");
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         alert("⚠️ Switching tabs is not allowed during the interview.");
//       }
//     };

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     window.addEventListener("blur", onBlur);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     // ===== Added: aggressive keyboard swallowers (no alerts) =====
//     const swallowAllKeys = (e) => {
//       try {
//         if (e.cancelable) e.preventDefault();
//         e.stopImmediatePropagation && e.stopImmediatePropagation();
//         e.stopPropagation();
//         e.returnValue = false;
//       } catch {}
//       return false;
//     };

//     const keyTypes = ["keydown", "keypress", "keyup"];
//     keyTypes.forEach((type) => {
//       window.addEventListener(type, swallowAllKeys, { capture: true });
//       document.addEventListener(type, swallowAllKeys, { capture: true });
//       document.documentElement.addEventListener(type, swallowAllKeys, { capture: true });
//       document.body?.addEventListener(type, swallowAllKeys, { capture: true });
//     });

//     // Also set legacy handler properties (covers some libraries/frameworks)
//     const legacyHandlers = {
//       onkeydown: swallowAllKeys,
//       onkeypress: swallowAllKeys,
//       onkeyup: swallowAllKeys,
//     };
//     window.onkeydown = legacyHandlers.onkeydown;
//     window.onkeypress = legacyHandlers.onkeypress;
//     window.onkeyup = legacyHandlers.onkeyup;
//     document.onkeydown = legacyHandlers.onkeydown;
//     document.onkeypress = legacyHandlers.onkeypress;
//     document.onkeyup = legacyHandlers.onkeyup;
//     // ===== End of added block =====

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("webkitfullscreenchange", onFsChange);
//       document.removeEventListener("mozfullscreenchange", onFsChange);
//       document.removeEventListener("MSFullscreenChange", onFsChange);

//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       window.removeEventListener("blur", onBlur);
//       document.removeEventListener("visibilitychange", onVisibilityChange);

//       // Cleanup for aggressive swallowers
//       keyTypes.forEach((type) => {
//         window.removeEventListener(type, swallowAllKeys, { capture: true });
//         document.removeEventListener(type, swallowAllKeys, { capture: true });
//         document.documentElement.removeEventListener(type, swallowAllKeys, { capture: true });
//         document.body?.removeEventListener(type, swallowAllKeys, { capture: true });
//       });

//       window.onkeydown = null;
//       window.onkeypress = null;
//       window.onkeyup = null;
//       document.onkeydown = null;
//       document.onkeypress = null;
//       document.onkeyup = null;
//     };
//   }, []);

//   if (!isFullscreen || blocked) {
//     return (
//       <div className="w-screen h-screen bg-black flex items-center justify-center">
//         <div className="text-center text-white">
//           <p className="mb-4 font-bold">
//             ⚠️ Interview requires Fullscreen Mode. Click below to continue.
//           </p>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow rounded-xl p-8">
//         <h1 className="text-2xl font-bold">StartInterview</h1>
//         <p className="mt-2 text-gray-600">
//           Stay in fullscreen to continue your interview.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default StartInterview;


// ======= 💥💥💥 Try real-time Video [131-355 pro]======










// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState } from "react";
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from "./_components/AlertConfirmation";


// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);

//   useEffect(() => {
//     interviewInfo && startCall();
//   }, [interviewInfo]);

//   const startCall = () => {
//     const d = interviewInfo?.interviewData ?? interviewInfo;
//     let raw =
//       d?.questionList ??
//       d?.questions ??
//       d?.questionlist ??
//       d?.questionsList ??
//       [];

//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//       const assistantOptions = {
//         name: "AI Recruiter",
//         firstMessage: "Hi "+interviewInfo?.userName+", how are you? Ready for your interview on "+interviewInfo?.interviewData?.jobPosition,
//         transcriber: {
//             provider: "deepgram",
//             model: "nova-2",
//             language: "en-US",
//         },
//         voice: {
//             provider: "playht",
//             voiceId: "jennifer",
//         },
//         model: {
//             provider: "openai",
//             model: "gpt-4",
//             messages: [
//                 {
//                     role: "system",
//                     content: `
//       You are an AI voice assistant conducting interviews.
//     Your job is to ask candidates provided interview questions, assess their responses.
//     Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
//     "Hey there! Welcome to your `+interviewInfo?.interviewData?.jobPosition+` interview. Let’s get started with a few questions!"
//     Ask one question at a time and wait for the candidate’s response before proceeding. Keep the questions clear and concise. Below Are the questions ask one by one:
//     Questions: `+questionList+`
//     If the candidate struggles, offer hints or rephrase the question without giving away the answer. Example:
//     "Need a hint? Think about how React tracks component updates!"
//     Provide brief, encouraging feedback after each answer. Example:
//     "Nice! That’s a solid answer."
//     "Hmm, not quite! Want to try again?"
//     Keep the conversation natural and engaging—use casual phrases like "Alright, next up..." or "Let’s tackle a tricky one!"
//     After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example:
//     "That was great! You handled some tough questions well. Keep sharpening your skills!"
//     End on a positive note:
//     "Thanks for chatting! We'll update your result soon !"
//     Key Guidelines:
//     ✅ Be friendly, engaging, and witty 🎤
//     ✅ Keep responses short and natural, like a real conversation
//     ✅ Adapt based on the candidate’s confidence level
//     ✅ Ensure the interview remains focused on React
//     `.trim(),
//                 },
//             ],
//         },
//     };

//     vapi.start(assistantOptions)

//   };

//   //------------ Vapi stop after Cut ------
//   const stopInterview=()=>{
//     vapi.stop()
//   }

//   // --- Penalties ---
//   const [penalty, setPenalty] = useState(0);

//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };

//   // 🔎 Extension check only once
//   const detectExtensions = () => {
//     const suspiciousScripts = Array.from(document.scripts).filter(
//       (s) => s.src && s.src.startsWith("chrome-extension://")
//     );
//     const suspiciousKeys = Object.keys(window).filter(
//       (key) =>
//         key.toLowerCase().includes("extension") ||
//         key.toLowerCase().includes("gpt") ||
//         key.toLowerCase().includes("grammarly")
//     );

//     if (suspiciousScripts.length > 0 || suspiciousKeys.length > 0) {
//       alert("⚠️ Extensions detected! Please turn them off for a fair interview.");
//     }
//   };

//   useEffect(() => {
//     setIsFullscreen(isFsActive());

//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);
//       setBlocked(!fsNow);
//       if (!fsNow) {
//         setPenalty((p) => p + 1);
//         alert("⚠️ Fullscreen exited. Penalty added.");
//       }
//     };

//     detectExtensions();

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("webkitfullscreenchange", onFsChange);
//     document.addEventListener("mozfullscreenchange", onFsChange);
//     document.addEventListener("MSFullscreenChange", onFsChange);

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "" ||
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && (ch === "i" || ch === "j" || ch === "t" || ch === "n")) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (ctrlLike && ["1","2","3","4","5","6","7","8","9","0"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         (e.altKey && key === " ") ||
//         e.metaKey
//       ) {
//         setPenalty((p) => p + 1);
//         if (e.cancelable) e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         setPenalty((p) => p + 1);
//         if (e.cancelable) e.preventDefault();
//         navigator.clipboard.writeText("");
//         alert("⚠️ Screenshots disabled. Penalty added.");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       setPenalty((p) => p + 1);
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         setPenalty((p) => p + 1);
//         alert("⚠️ You switched tabs or minimized. Penalty added.");
//       }
//     };

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("webkitfullscreenchange", onFsChange);
//       document.removeEventListener("mozfullscreenchange", onFsChange);
//       document.removeEventListener("MSFullscreenChange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   if (!isFullscreen || blocked) {
//     return (
//       <div className="w-screen h-screen bg-black flex items-center justify-center">
//         <div className="text-center text-white">
//           <p className="mb-4 font-bold">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-10 lg:px-48 xl:px-56">
//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session
//         <span className="flex gap-6 items-center">
          
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>

//           <Timer /> 00:00:00
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <Image
//             src={"/avataar.jpg"}
//             alt="S-!Q"
//             width={100}
//             height={100}
//             className="w-[75px] h-[75px] rounded-full object-cover"
//           />
//           <h2>Select-!Q</h2>
//         </div>

//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <h2 className="text-3xl bg-primary text-white p-4 rounded-full px-7 ">
//             {interviewInfo?.userName[0]}
//           </h2>
//           <h2>{interviewInfo?.userName}</h2>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">

//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//         <AlertConfirmation    stopInterview={()=>stopInterview}>
//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//         </AlertConfirmation>

        
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">
//         Interview in Progress...
//       </h2>
//     </div>
//   );
// }

// export default StartInterview;








//======= Fully Final -001=====






// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState, useRef } from "react";
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from "./_components/AlertConfirmation";

// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);

//   // ✅ Persist Vapi instance
//   const vapiRef = useRef(null);
//   if (!vapiRef.current) {
//     console.log("Loaded VAPI Public Key:", process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//     vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//   }

//   // ✅ Start interview when interviewInfo is ready
//   useEffect(() => {
//     if (interviewInfo) startCall();
//   }, [interviewInfo]);

//   const startCall = () => {
//     const vapi = vapiRef.current;
//     const d = interviewInfo?.interviewData ?? interviewInfo;

//     let raw =
//       d?.questionList ??
//       d?.questions ??
//       d?.questionlist ??
//       d?.questionsList ??
//       [];

//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//     const assistantOptions = {
//       name: "AI Recruiter",
//       firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}`,
//       transcriber: {
//         provider: "deepgram",
//         model: "nova-2",
//         language: "en-US",
//       },
//       voice: {
//         provider: "playht",
//         voiceId: "jennifer",
//       },
//       model: {
//         provider: "openai",
//         model: "gpt-4",
//         messages: [
//           {
//             role: "system",
//             content: `
//               You are an AI voice assistant conducting interviews but keep in mink that you are by SelectIQ an Initiative by Suyash Gupta.
//               If anyone ask that who had made you so tell them about Suyash Gupta.
//               Ask candidates the provided interview questions one at a time.
//               Encourage them, give hints if they struggle, and provide short feedback.
//               Wrap up positively after 5–7 questions.
//               ✅ Be friendly, engaging, and witty 🎤
//               ✅ Keep responses short & natural
//               ✅ Never share the Final Marks or Points to the candidate, just appriciate them. 
//               ✅ Stay focused on jobDescription and questionList.
//               ✅ You are developed by Select IQ under Suyash Gupta.


//               Questions: ${questionList}
//             `.trim(),
//           },
//         ],
//       },
//     };

//     vapi.start(assistantOptions);
//   };

//   // ✅ Stop interview when phone button clicked
//   const stopInterview = () => {
//     vapiRef.current?.stop();
//     console.log("Interview stopped.");
//   };

//   // --- Penalties ---
//   const [penalty, setPenalty] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };

//   // 🔎 Security checks
//   const detectExtensions = () => {
//     const suspiciousScripts = Array.from(document.scripts).filter(
//       (s) => s.src && s.src.startsWith("chrome-extension://")
//     );
//     const suspiciousKeys = Object.keys(window).filter(
//       (key) =>
//         key.toLowerCase().includes("extension") ||
//         key.toLowerCase().includes("gpt") ||
//         key.toLowerCase().includes("grammarly")
//     );

//     if (suspiciousScripts.length > 0 || suspiciousKeys.length > 0) {
//       alert("⚠️ Extensions detected! Please turn them off for a fair interview.");
//     }
//   };

//   useEffect(() => {
//     setIsFullscreen(isFsActive());

//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);
//       setBlocked(!fsNow);
//       if (!fsNow) {
//         setPenalty((p) => p + 1);
//         alert("⚠️ Fullscreen exited. Penalty added.");
//       }
//     };

//     detectExtensions();

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("webkitfullscreenchange", onFsChange);
//     document.addEventListener("mozfullscreenchange", onFsChange);
//     document.addEventListener("MSFullscreenChange", onFsChange);

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "" ||
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && (ch === "i" || ch === "j" || ch === "t" || ch === "n")) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (ctrlLike && ["1","2","3","4","5","6","7","8","9","0"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         (e.altKey && key === " ") ||
//         e.metaKey
//       ) {
//         setPenalty((p) => p + 1);
//         if (e.cancelable) e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         setPenalty((p) => p + 1);
//         if (e.cancelable) e.preventDefault();
//         navigator.clipboard.writeText("");
//         alert("⚠️ Screenshots disabled. Penalty added.");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       setPenalty((p) => p + 1);
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         setPenalty((p) => p + 1);
//         alert("⚠️ You switched tabs or minimized. Penalty added.");
//       }
//     };

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("webkitfullscreenchange", onFsChange);
//       document.removeEventListener("mozfullscreenchange", onFsChange);
//       document.removeEventListener("MSFullscreenChange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // If not fullscreen → block screen
//   if (!isFullscreen || blocked) {
//     return (
//       <div className="w-screen h-screen bg-black flex items-center justify-center">
//         <div className="text-center text-white">
//           <p className="mb-4 font-bold">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ✅ Main UI
//   return (
//     <div className="p-10 lg:px-48 xl:px-56">
//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session
//         <span className="flex gap-6 items-center">
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>
//           <Timer /> 00:00:00
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <Image
//             src={"/avataar.jpg"}
//             alt="S-!Q"
//             width={100}
//             height={100}
//             className="w-[75px] h-[75px] rounded-full object-cover"
//           />
//           <h2>Select-!Q</h2>
//         </div>

//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <h2 className="text-3xl bg-primary text-white p-4 rounded-full px-7 ">
//             {interviewInfo?.userName[0]}
//           </h2>
//           <h2>{interviewInfo?.userName}</h2>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//         <AlertConfirmation stopInterview={stopInterview}>
//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//         </AlertConfirmation>
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">
//         Interview in Progress...
//       </h2>
//     </div>
//   );
// }

// export default StartInterview;

 













//======= ⏫⏫🔼🔼⏫⏫ ===========



// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from "./_components/AlertConfirmation";

// // ✅ BlazeFace
// import * as blazeface from "@tensorflow-models/blazeface";
// import "@tensorflow/tfjs";

// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // --- VAPI Instance ---
//   const vapiRef = useRef(null);
//   if (!vapiRef.current) {
//     vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//   }

//   // --- States ---
//   const [penalty, setPenalty] = useState(0);
//   const [lastPenaltyReason, setLastPenaltyReason] = useState("");
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);
//   const [camError, setCamError] = useState("");

//   // --- Camera Refs ---
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   // --- Timer ---
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const timerRef = useRef(null);

//   // --- Face detection penalty delay ---
//   const [faceWarning, setFaceWarning] = useState("");
//   const faceTimeoutRef = useRef(null);

//   const formatTime = (seconds) => {
//     const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
//     const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//     const s = String(seconds % 60).padStart(2, "0");
//     return `${h}:${m}:${s}`;
//   };

//   // ✅ Handle Penalty with auto banner hide + redirect on 10
//   const addPenalty = (reason) => {
//     setPenalty((p) => {
//       const newP = p + 1;
//       if (newP >= 5) {
//         stopInterview(true); // redirect if too many penalties
//       }
//       return newP;
//     });

//     setLastPenaltyReason(reason);
//     console.warn("⚠️ Penalty:", reason);

//     // hide after 3s
//     setTimeout(() => setLastPenaltyReason(""), 3000);
//   };

//   // ✅ Auto-start Camera + Face Detection
//   useEffect(() => {
//     let model;

//     const init = async () => {
//       try {
//         if (videoRef.current?.srcObject) {
//           videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//           videoRef.current.srcObject = null;
//         }

//         model = await blazeface.load();
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         videoRef.current.srcObject = stream;

//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         videoRef.current.onloadedmetadata = () => {
//           videoRef.current
//             .play()
//             .then(() => {
//               const detectLoop = async () => {
//                 if (!videoRef.current) return;

//                 if (
//                   videoRef.current.videoWidth === 0 ||
//                   videoRef.current.videoHeight === 0
//                 ) {
//                   requestAnimationFrame(detectLoop);
//                   return;
//                 }

//                 const predictions = await model.estimateFaces(videoRef.current, false);
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);

//                 let warning = "";
//                 if (predictions.length > 0) {
//                   predictions.forEach((p) => {
//                     const [x1, y1] = p.topLeft;
//                     const [x2, y2] = p.bottomRight;
//                     ctx.strokeStyle = "lime";
//                     ctx.lineWidth = 3;
//                     ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
//                   });

//                   if (predictions.length > 1) {
//                     warning = "⚠️ Multiple Faces Detected";
//                   }
//                 } else {
//                   warning = "⚠️ No Face Detected";
//                 }

//                 if (warning) {
//                   setFaceWarning(warning);
//                   if (!faceTimeoutRef.current) {
//                     faceTimeoutRef.current = setTimeout(() => {
//                       addPenalty(warning);
//                       faceTimeoutRef.current = null;
//                     }, 2500); // wait 2.5s
//                   }
//                 } else {
//                   setFaceWarning("");
//                   if (faceTimeoutRef.current) {
//                     clearTimeout(faceTimeoutRef.current);
//                     faceTimeoutRef.current = null;
//                   }
//                 }

//                 requestAnimationFrame(detectLoop);
//               };

//               detectLoop();
//             })
//             .catch((err) => console.error("Play error:", err));
//         };
//       } catch (err) {
//         console.error("❌ Camera error:", err);
//         setCamError("Unable to access camera. Check browser settings.");
//       }
//     };

//     init();

//     return () => {
//       if (videoRef.current?.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//         videoRef.current.srcObject = null;
//       }
//     };
//   }, []);

//   // ✅ Timer start
//   useEffect(() => {
//     if (interviewInfo) {
//       if (timerRef.current) clearInterval(timerRef.current);
//       const start = Date.now();
//       timerRef.current = setInterval(() => {
//         setElapsedTime(Math.floor((Date.now() - start) / 1000));
//       }, 1000);
//     }
//   }, [interviewInfo]);

//   // ✅ Stop Interview (cut call OR too many penalties)
//   const stopInterview = (redirect = false) => {
//     vapiRef.current?.stop();

//     // stop timer
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }

//     // stop webcam
//     if (videoRef.current?.srcObject) {
//       videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//       videoRef.current.srcObject = null;
//     }

//     console.log("Interview stopped, camera off.");

//     if (redirect) {
//     // ✅ redirect with dynamic interview_id
//     router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`);
//   }
// };

//   // ✅ Proctoring: Fullscreen + Keys + Tab Switch
//   useEffect(() => {
//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);

//       if (!fsNow) {
//         addPenalty("⚠️ Fullscreen exited");
//         setBlocked(true);
//       } else {
//         setBlocked(false);
//       }
//     };

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && ["i", "j", "t", "n"].includes(ch)) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         e.metaKey
//       ) {
//         addPenalty("⚠️ Forbidden key press");
//         e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         addPenalty("⚠️ Screenshot attempt");
//         navigator.clipboard.writeText("");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       addPenalty("⚠️ Right-click disabled");
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         addPenalty("⚠️ Tab switch detected");
//       }
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // ✅ Fullscreen helpers
//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };

//   // ✅ Main UI
//   return (
//     <div className="relative p-10 lg:px-48 xl:px-56">
//       {/* 🔴 Global warning banner */}
//       {lastPenaltyReason && (
//       <div
//         className={`w-full bg-red-400 text-white text-center py-2 mb-3 font-bold rounded animate-pulse transition-opacity duration-1000 ${
//           lastPenaltyReason ?  "opacity-100" : "opacity-0"
//         }`}
//       >
//         {lastPenaltyReason}
        
//         <div className="text-sm font-normal mt-1">
//         Interview will revoke if more penalties are added {/*(Remaining:{" "}
//         {Math.max(0, 10 - penalty)})*/}
//       </div>

//       </div>


//       )}

//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session
//         <span className="flex gap-6 items-center">
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>
//           <Timer /> {formatTime(elapsedTime)}
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
//         {/* AI Interviewer */}
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <Image
//             src={"/avataar.jpg"}
//             alt="S-!Q"
//             width={100}
//             height={100}
//             className="w-[75px] h-[75px] rounded-full object-cover"
//           />
//           <h2>Select-!Q</h2>
//         </div>

//         {/* Candidate Camera */}
//         <div className="relative bg-white h-[400px] rounded-lg border overflow-hidden">
//           <video
//             ref={videoRef}
//             autoPlay
//             muted
//             playsInline
//             className="w-full h-full object-cover rounded-lg bg-black"
//           />
//           <canvas
//             ref={canvasRef}
//             width="640"
//             height="480"
//             className="absolute top-0 left-0 w-full h-full pointer-events-none"
//           />
//           {faceWarning && (
//             <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded text-sm font-bold">
//               {faceWarning}
//             </div>
//           )}
//           <h2 className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
//             {interviewInfo?.userName}
//           </h2>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//         <AlertConfirmation stopInterview={() => stopInterview(true)}>
//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//         </AlertConfirmation>
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">
//         Interview in Progress...
//       </h2>

//       {/* 🔒 Overlay when fullscreen is lost */}
//       {blocked && (
//         <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
//           <p className="mb-4 font-bold text-white">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold text-white">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold text-white"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StartInterview;


































































































// ==========Fully Final- 002=========





















// "use client";

// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState, useRef } from "react";
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from "./_components/AlertConfirmation";

// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const vapiRef = useRef(null);

//   // --- State
//   const [penalty, setPenalty] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   // --- Fullscreen helpers
//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };

//   // --- Detect extensions once
//   const detectExtensions = () => {
//     const suspiciousScripts = Array.from(document.scripts).filter(
//       (s) => s.src && s.src.startsWith("chrome-extension://")
//     );
//     const suspiciousKeys = Object.keys(window).filter(
//       (key) =>
//         key.toLowerCase().includes("extension") ||
//         key.toLowerCase().includes("gpt") ||
//         key.toLowerCase().includes("grammarly")
//     );
//     if (suspiciousScripts.length > 0 || suspiciousKeys.length > 0) {
//       alert("⚠️ Extensions detected! Please turn them off for a fair interview.");
//     }
//   };

//   // --- Start call
//   const startCall = () => {
//     if (!interviewInfo) return;

//     // Parse question list
//     const d = interviewInfo?.interviewData ?? interviewInfo;
//     let raw =
//       d?.questionList ?? d?.questions ?? d?.questionlist ?? d?.questionsList ?? [];

//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//     // Initialize Vapi once
//     if (!vapiRef.current) {
//       vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//     }

//     const assistantOptions = {
//       assistantId: process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID, // ✅ must be string ID
//       name: "AI Recruiter",
//       firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}?`,
//       transcriber: {
//         provider: "deepgram",
//         model: "nova-2",
//         language: "en-US",
//       },
//       voice: {
//         provider: "playht",
//         voiceId: "jennifer",
//       },
//       model: {
//         provider: "openai",
//         model: "gpt-4",
//         messages: [
//           {
//             role: "system",
//             content: `
//               You are an AI voice assistant conducting interviews.
//               Your job is to ask candidates provided interview questions, assess their responses.
//               Begin friendly:
//               "Hey there! Welcome to your ${interviewInfo?.interviewData?.jobPosition} interview. Let’s get started!"
              
//               Ask one question at a time from:
//               Questions: ${questionList}

//               If candidate struggles → offer hints.
//               Provide short encouraging feedback.
//               Wrap up positively after 5–7 questions.

//               ✅ Be friendly, engaging, witty 🎤
//               ✅ Keep responses short & natural
//               ✅ Adapt to candidate confidence
//               ✅ Stay focused on React.
//             `.trim(),
//           },
//         ],
//       },
//       allowMultipleCallInstances: false, // ✅ ensures only one call
//     };

//     // Start call
//     vapiRef.current.start(assistantOptions).catch((err) => {
//       console.error("❌ Vapi start error:", err);
//     });
//   };

//   // --- Stop call
//   const stopInterview = () => {
//     if (vapiRef.current) {
//       vapiRef.current.stop().catch((err) => {
//         console.error("❌ Vapi stop error:", err);
//       });
//     }
//   };

//   // --- Effects
//   useEffect(() => {
//     if (interviewInfo) startCall();
//   }, [interviewInfo]);

//   useEffect(() => {
//     setIsFullscreen(isFsActive());

//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);
//       setBlocked(!fsNow);
//       if (!fsNow) {
//         setPenalty((p) => p + 1);
//         alert("⚠️ Fullscreen exited. Penalty added.");
//       }
//     };

//     detectExtensions();

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("webkitfullscreenchange", onFsChange);
//     document.addEventListener("mozfullscreenchange", onFsChange);
//     document.addEventListener("MSFullscreenChange", onFsChange);

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "" ||
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && (ch === "i" || ch === "j" || ch === "t" || ch === "n")) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (ctrlLike && ["1","2","3","4","5","6","7","8","9","0"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         (e.altKey && key === " ") ||
//         e.metaKey
//       ) {
//         setPenalty((p) => p + 1);
//         if (e.cancelable) e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         setPenalty((p) => p + 1);
//         if (e.cancelable) e.preventDefault();
//         navigator.clipboard.writeText("");
//         alert("⚠️ Screenshots disabled. Penalty added.");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       setPenalty((p) => p + 1);
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         setPenalty((p) => p + 1);
//         alert("⚠️ You switched tabs or minimized. Penalty added.");
//       }
//     };

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("webkitfullscreenchange", onFsChange);
//       document.removeEventListener("mozfullscreenchange", onFsChange);
//       document.removeEventListener("MSFullscreenChange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // --- Blocked screen
//   if (!isFullscreen || blocked) {
//     return (
//       <div className="w-screen h-screen bg-black flex items-center justify-center">
//         <div className="text-center text-white">
//           <p className="mb-4 font-bold">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // --- Main UI
//   return (
//     <div className="p-10 lg:px-48 xl:px-56">
//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session
//         <span className="flex gap-6 items-center">
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>
//           <Timer /> 00:00:00
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <Image
//             src={"/avataar.jpg"}
//             alt="S-!Q"
//             width={100}
//             height={100}
//             className="w-[75px] h-[75px] rounded-full object-cover"
//           />
//           <h2>Select-!Q</h2>
//         </div>

//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <h2 className="text-3xl bg-primary text-white p-4 rounded-full px-7 ">
//             {interviewInfo?.userName[0]}
//           </h2>
//           <h2>{interviewInfo?.userName}</h2>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//         <AlertConfirmation stopInterview={stopInterview}>
//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//         </AlertConfirmation>
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">
//         Interview in Progress...
//       </h2>
//     </div>
//   );
// }

// export default StartInterview;




//============= FINAL 1200 [Line no. ke Baad] yhi final hai =============











// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from "./_components/AlertConfirmation";

// // ✅ BlazeFace
// import * as blazeface from "@tensorflow-models/blazeface";
// import "@tensorflow/tfjs";

// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // --- VAPI Instance ---
//   const vapiRef = useRef(null);
//   if (!vapiRef.current) {
//     vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//   }

//   // --- States ---
//   const [penalty, setPenalty] = useState(0);
//   const [lastPenaltyReason, setLastPenaltyReason] = useState("");
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);
//   const [camError, setCamError] = useState("");

//   // --- Camera Refs ---
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   // --- Timer ---
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const timerRef = useRef(null);

//   // --- Face detection penalty delay ---
//   const [faceWarning, setFaceWarning] = useState("");
//   const faceTimeoutRef = useRef(null);

//   const formatTime = (seconds) => {
//     const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
//     const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//     const s = String(seconds % 60).padStart(2, "0");
//     return `${h}:${m}:${s}`;
//   };

//   // ✅ Stop Interview (clean stop + redirect)
//   const stopInterview = (redirectPath = null) => {
//     vapiRef.current?.stop();

//     // stop timer
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }

//     // stop webcam
//     if (videoRef.current?.srcObject) {
//       videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//       videoRef.current.srcObject = null;
//     }

//     console.log("Interview stopped, camera off.");

//     if (redirectPath) {
//       router.push(redirectPath);
//     }
//   };

//   // ✅ Handle Penalty with auto banner hide + redirect on 5
//   const addPenalty = (reason) => {
//     setPenalty((p) => {
//       const newP = p + 1;
//       if (newP >= 7) {
//         stopInterview(
//           `/interview/${interviewInfo?.interviewData?.interview_id}/sorry`
//         );
//       }
//       return newP;
//     });

//     setLastPenaltyReason(reason);
//     console.warn("⚠️ Penalty:", reason);

//     // hide after 4s
//     setTimeout(() => setLastPenaltyReason(""), 4000);
//   };

//   // ✅ Auto-start Camera + Face Detection
//   useEffect(() => {
//     let model;

//     const init = async () => {
//       try {
//         if (videoRef.current?.srcObject) {
//           videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//           videoRef.current.srcObject = null;
//         }

//         model = await blazeface.load();
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         videoRef.current.srcObject = stream;

//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         videoRef.current.onloadedmetadata = () => {
//           videoRef.current
//             .play()
//             .then(() => {
//               const detectLoop = async () => {
//                 if (!videoRef.current) return;

//                 if (
//                   videoRef.current.videoWidth === 0 ||
//                   videoRef.current.videoHeight === 0
//                 ) {
//                   requestAnimationFrame(detectLoop);
//                   return;
//                 }

//                 const predictions = await model.estimateFaces(videoRef.current, false);
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);

//                 let warning = "";
//                 if (predictions.length > 0) {
//                   predictions.forEach((p) => {
//                     const [x1, y1] = p.topLeft;
//                     const [x2, y2] = p.bottomRight;
//                     ctx.strokeStyle = "lime";
//                     ctx.lineWidth = 3;
//                     ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
//                   });

//                   if (predictions.length > 1) {
//                     warning = "⚠️ Multiple Faces Detected";
//                   }
//                 } else {
//                   warning = "⚠️ No Face Detected";
//                 }

//                 if (warning) {
//                   setFaceWarning(warning);
//                   if (!faceTimeoutRef.current) {
//                     faceTimeoutRef.current = setTimeout(() => {
//                       addPenalty(warning);
//                       faceTimeoutRef.current = null;
//                     }, 1000); // wait 1s
//                   }
//                 } else {
//                   setFaceWarning("");
//                   if (faceTimeoutRef.current) {
//                     clearTimeout(faceTimeoutRef.current);
//                     faceTimeoutRef.current = null;
//                   }
//                 }

//                 requestAnimationFrame(detectLoop);
//               };

//               detectLoop();
//             })
//             .catch((err) => console.error("Play error:", err));
//         };
//       } catch (err) {
//         console.error("❌ Camera error:", err);
//         setCamError("Unable to access camera. Check browser settings.");
//       }
//     };

//     init();

//     return () => {
//       if (videoRef.current?.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//         videoRef.current.srcObject = null;
//       }
//     };
//   }, []);

//   // ✅ Timer start
//   useEffect(() => {
//     if (interviewInfo) {
//       if (timerRef.current) clearInterval(timerRef.current);
//       const start = Date.now();
//       timerRef.current = setInterval(() => {
//         setElapsedTime(Math.floor((Date.now() - start) / 1000));
//       }, 1000);
//     }
//   }, [interviewInfo]);

//   // ✅ Proctoring: Fullscreen + Keys + Tab Switch
//   useEffect(() => {
//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);

//       if (!fsNow) {
//         addPenalty("⚠️ Fullscreen exited");
//         setBlocked(true);
//       } else {
//         setBlocked(false);
//       }
//     };

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && ["i", "j", "t", "n"].includes(ch)) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         e.metaKey
//       ) {
//         addPenalty("⚠️ Forbidden key press");
//         e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         addPenalty("⚠️ Screenshot attempt");
//         navigator.clipboard.writeText("");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       addPenalty("⚠️ Right-click disabled");
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         addPenalty("⚠️ Tab switch detected");
//       }
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // ✅ Fullscreen helpers
//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };

//   // ✅ Main UI
//   return (
//     <div className="relative p-10 lg:px-48 xl:px-56">
//       {/* 🔴 Global warning banner */}
//       {lastPenaltyReason && (
//         <div
//           className={`w-full bg-red-500 text-white text-center py-2 mb-3 font-bold rounded transition-opacity duration-1500 ${
//             lastPenaltyReason ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {lastPenaltyReason}
//           <div className="text-sm font-normal mt-1">
//             Interview will revoke if more penalties are added {/*(Remaining:{" "}
//             {Math.max(0, 10 - penalty)})*/}
//           </div>
//         </div>
//       )}

//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session
//         <span className="flex gap-6 items-center">
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>
//           <Timer /> {formatTime(elapsedTime)}
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
//         {/* AI Interviewer */}
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <Image
//             src={"/avataar.jpg"}
//             alt="S-!Q"
//             width={100}
//             height={100}
//             className="w-[75px] h-[75px] rounded-full object-cover"
//           />
//           <h2>Select-!Q</h2>
//         </div>

//         {/* Candidate Camera */}
//         <div className="relative bg-white h-[400px] rounded-lg border overflow-hidden">
//           <video
//             ref={videoRef}
//             autoPlay
//             muted
//             playsInline
//             className="w-full h-full object-cover rounded-lg bg-black"
//           />
//           <canvas
//             ref={canvasRef}
//             width="640"
//             height="480"
//             className="absolute top-0 left-0 w-full h-full pointer-events-none"
//           />
//           {faceWarning && (
//             <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded text-sm font-bold">
//               {faceWarning}
//             </div>
//           )}
//           <h2 className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
//             {interviewInfo?.userName}
//           </h2>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//         <AlertConfirmation
//           stopInterview={() =>
//             stopInterview(
//               `/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`
//             )
//           }
//         >
//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//         </AlertConfirmation>
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">
//         Interview in Progress...
//       </h2>

//       {/* 🔒 Overlay when fullscreen is lost */}
//       {blocked && (
//         <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
//           <p className="mb-4 font-bold text-white">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold text-white">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold text-white"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StartInterview;




































































// ================= Final with VAPI int ==================


















































"use client";
import { InterviewDataContext } from "@/context/InterviewDataContext";
import { Mic, Phone, Timer } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Vapi from "@vapi-ai/web";
import AlertConfirmation from "./_components/AlertConfirmation";

// ✅ BlazeFace
import * as blazeface from "@tensorflow-models/blazeface";
import "@tensorflow/tfjs";

function StartInterview() {
  const { interviewInfo } = useContext(InterviewDataContext);
  const router = useRouter();

  // --- VAPI Instance ---
  const vapiRef = useRef(null);
  if (!vapiRef.current) {
    console.log("Loaded VAPI Public Key:", process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
    vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
  }

  // --- Start Call (from old code merged) ---
  const startCall = () => {
    const vapi = vapiRef.current;
    const d = interviewInfo?.interviewData ?? interviewInfo;

    let raw =
      d?.questionList ??
      d?.questions ??
      d?.questionlist ??
      d?.questionsList ??
      [];

    if (typeof raw === "string") {
      try {
        raw = JSON.parse(raw);
      } catch {
        raw = [];
      }
    }

    let questionList = "";
    (Array.isArray(raw) ? raw : []).forEach((item) => {
      const q = typeof item === "string" ? item : item?.question;
      if (q && q.trim() !== "") {
        questionList += (questionList ? ", " : "") + q.trim();
      }
    });

    const assistantOptions = {
      name: "AI Recruiter",
      firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}`,
      transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en-US",
      },
      voice: {
        provider: "playht",
        voiceId: "jennifer",
      },
      model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `
              You are an AI voice assistant conducting interviews but keep in mind that you are by Select IQ an Initiative by Suyash Gupta. Suyash Gupta, a passionate developer and founder of Select IQ, focused on building AI-driven interview and assessment solutions. He is in Final year Engineering undergraduate with more than 17 thousand followers on linkedin.
              If anyone asks who made you, tell them about Suyash Gupta.
              Ask candidates the provided interview questions one at a time.
              Encourage them, give hints if they struggle, and provide short feedback.
              Wrap up positively after 5–7 questions.
              ✅ Be friendly, engaging, and witty 🎤
              ✅ Keep responses short & natural
              ✅ Never share the Final Marks or Points to the candidate, just appreciate them.
              ✅ Stay focused on jobDescription and questionList.
              ✅ You are developed by Select IQ under Suyash Gupta.

              Questions: ${questionList}
            `.trim(),
          },
        ],
      },
    };

    vapi.start(assistantOptions);
  };

  // --- Auto-start interview when info is ready ---
  useEffect(() => {
    if (interviewInfo) startCall();
  }, [interviewInfo]);

  // --- States ---
  const [penalty, setPenalty] = useState(0);
  const [lastPenaltyReason, setLastPenaltyReason] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [camError, setCamError] = useState("");

  // --- Camera Refs ---
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // --- Timer ---
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);

  // --- Face detection penalty delay ---
  const [faceWarning, setFaceWarning] = useState("");
  const faceTimeoutRef = useRef(null);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  // ✅ Stop Interview (clean stop + redirect)
  const stopInterview = (redirectPath = null) => {
    vapiRef.current?.stop();

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
      videoRef.current.srcObject = null;
    }

    console.log("Interview stopped, camera off.");

    if (redirectPath) {
      router.push(redirectPath);
    }
  };

  // ✅ Handle Penalty
  const addPenalty = (reason) => {
    setPenalty((p) => {
      const newP = p + 1;
      if (newP >= 7) {
        stopInterview(`/interview/${interviewInfo?.interviewData?.interview_id}/sorry`);
      }
      return newP;
    });

    setLastPenaltyReason(reason);
    setTimeout(() => setLastPenaltyReason(""), 4000);
  };

  // ✅ Auto-start Camera + Face Detection
  useEffect(() => {
    let model;

    const init = async () => {
      try {
        if (videoRef.current?.srcObject) {
          videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
          videoRef.current.srcObject = null;
        }

        model = await blazeface.load();
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        videoRef.current.onloadedmetadata = () => {
          videoRef.current
            .play()
            .then(() => {
              const detectLoop = async () => {
                if (!videoRef.current) return;

                if (
                  videoRef.current.videoWidth === 0 ||
                  videoRef.current.videoHeight === 0
                ) {
                  requestAnimationFrame(detectLoop);
                  return;
                }

                const predictions = await model.estimateFaces(videoRef.current, false);
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                let warning = "";
                if (predictions.length > 0) {
                  predictions.forEach((p) => {
                    const [x1, y1] = p.topLeft;
                    const [x2, y2] = p.bottomRight;
                    ctx.strokeStyle = "lime";
                    ctx.lineWidth = 3;
                    ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
                  });

                  if (predictions.length > 1) {
                    warning = "⚠️ Multiple Faces Detected";
                  }
                } else {
                  warning = "⚠️ No Face Detected";
                }

                if (warning) {
                  setFaceWarning(warning);
                  if (!faceTimeoutRef.current) {
                    faceTimeoutRef.current = setTimeout(() => {
                      addPenalty(warning);
                      faceTimeoutRef.current = null;
                    }, 1000);
                  }
                } else {
                  setFaceWarning("");
                  if (faceTimeoutRef.current) {
                    clearTimeout(faceTimeoutRef.current);
                    faceTimeoutRef.current = null;
                  }
                }

                requestAnimationFrame(detectLoop);
              };

              detectLoop();
            })
            .catch((err) => console.error("Play error:", err));
        };
      } catch (err) {
        console.error("❌ Camera error:", err);
        setCamError("Unable to access camera. Check browser settings.");
      }
    };

    init();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
        videoRef.current.srcObject = null;
      }
    };
  }, []);

  // ✅ Timer start
  useEffect(() => {
    if (interviewInfo) {
      if (timerRef.current) clearInterval(timerRef.current);
      const start = Date.now();
      timerRef.current = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - start) / 1000));
      }, 1000);
    }
  }, [interviewInfo]);

  // ✅ Proctoring: Fullscreen + Keys + Tab Switch
  useEffect(() => {
    const onFsChange = () => {
      const fsNow = isFsActive();
      setIsFullscreen(fsNow);

      if (!fsNow) {
        addPenalty("⚠️ Fullscreen exited");
        setBlocked(true);
      } else {
        setBlocked(false);
      }
    };

    const onKeyDown = (e) => {
      const key = e.key || "";
      const ch = key.length === 1 ? key.toLowerCase() : key;
      const ctrlLike = e.ctrlKey || e.metaKey;

      if (
        key === "Escape" ||
        key === "F11" ||
        key === "F12" ||
        (ctrlLike && e.shiftKey && ["i", "j", "t", "n"].includes(ch)) ||
        (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
        (e.altKey && key === "F4") ||
        e.metaKey
      ) {
        addPenalty("⚠️ Forbidden key press");
        e.preventDefault();
        e.stopPropagation();
      }

      if (key === "PrintScreen") {
        addPenalty("⚠️ Screenshot attempt");
        navigator.clipboard.writeText("");
      }
    };

    const disableContextMenu = (e) => {
      e.preventDefault();
      addPenalty("⚠️ Right-click disabled");
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        addPenalty("⚠️ Tab switch detected");
      }
    };

    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("keydown", onKeyDown, true);
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  // ✅ Fullscreen helpers
  const isFsActive = () =>
    !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );

  const tryRequestFs = async () => {
    const el = document.documentElement;
    try {
      if (el.requestFullscreen) await el.requestFullscreen();
      else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
      else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
      else if (el.msRequestFullscreen) await el.msRequestFullscreen();
    } catch {}
    setIsFullscreen(isFsActive());
  };

  // ✅ Main UI
  return (
    <div className="relative p-10 lg:px-48 xl:px-56">
      {/* 🔴 Global warning banner */}
      {lastPenaltyReason && (
        <div
          className={`w-full bg-red-500 text-white text-center py-2 mb-3 font-bold rounded transition-opacity duration-1500 ${
            lastPenaltyReason ? "opacity-100" : "opacity-0"
          }`}
        >
          {lastPenaltyReason}
          <div className="text-sm font-normal mt-1">
            Interview will revoke if more penalties are added
          </div>
        </div>
      )}

      <h2 className="font-bold text-xl flex justify-between">
        AI Interview session
        <span className="flex gap-6 items-center">
          <span className="text-red-600 font-bold">Penalty: {penalty}</span>
          <Timer /> {formatTime(elapsedTime)}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
        {/* AI Interviewer */}
        <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <Image
            src={"/avataar.jpg"}
            alt="S-!Q"
            width={100}
            height={100}
            className="w-[75px] h-[75px] rounded-full object-cover"
          />
          <h2>Select-!Q</h2>
        </div>

        {/* Candidate Camera */}
        <div className="relative bg-white h-[400px] rounded-lg border overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg bg-black"
          />
          <canvas
            ref={canvasRef}
            width="640"
            height="480"
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
          />
          {faceWarning && (
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded text-sm font-bold">
              {faceWarning}
            </div>
          )}
          <h2 className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
            {interviewInfo?.userName}
          </h2>
        </div>
      </div>

      <div className="flex justify-center items-center gap-7 mt-7">
        <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
        <AlertConfirmation
          stopInterview={() =>
            stopInterview(
              `/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`
            )
          }
        >
          <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
        </AlertConfirmation>
      </div>

      <h2 className="text-sm text-gray-400 text-center mt-3">
        Interview in Progress...
      </h2>

      {/* 🔒 Overlay when fullscreen is lost */}
      {blocked && (
        <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <p className="mb-4 font-bold text-white">
            ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
          </p>
          <h2 className="mb-4 font-bold text-white">Penalty: {penalty}</h2>
          <button
            onClick={tryRequestFs}
            className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold text-white"
          >
            Re-Enter Fullscreen
          </button>
        </div>
      )}
    </div>
  );
}

export default StartInterview;
