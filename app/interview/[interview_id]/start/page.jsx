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

"use client";
import { InterviewDataContext } from "@/context/InterviewDataContext";
import { Mic, Phone, Timer } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Vapi from '@vapi-ai/web';


function StartInterview() { 
  const { interviewInfo } = useContext(InterviewDataContext);
  const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);

  useEffect(() => {
    interviewInfo && startCall();
  }, [interviewInfo]);

  const startCall = () => {
    // ✅ Normalize: interviewData OR root
    const d = interviewInfo?.interviewData ?? interviewInfo;

    // ✅ Support multiple keys
    let raw =
      d?.questionList ??
      d?.questions ??
      d?.questionlist ??
      d?.questionsList ??
      [];

    // ✅ Parse stringified JSON if needed
    if (typeof raw === "string") {
      try {
        raw = JSON.parse(raw);
      } catch {
        raw = [];
      }
    }

    // ✅ Build final string
    let questionList = "";
    (Array.isArray(raw) ? raw : []).forEach((item, index) => {
      const q = typeof item === "string" ? item : item?.question;
      if (q && q.trim() !== "") {
        questionList += (questionList ? ", " : "") + q.trim();
      }
    });

    // ✅ Final console.log at the end
    console.log(questionList);
  };












  

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [blocked, setBlocked] = useState(false);

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
    } catch (e) {
      // Will fail if not triggered by click
    }
    setIsFullscreen(isFsActive());
  };

  useEffect(() => {
    setIsFullscreen(isFsActive());

    const onFsChange = () => {
      const fsNow = isFsActive();
      setIsFullscreen(fsNow);
      setBlocked(!fsNow); // Block UI if fullscreen lost
    };

    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);
    document.addEventListener("mozfullscreenchange", onFsChange);
    document.addEventListener("MSFullscreenChange", onFsChange);

    // Restrict shortcuts (best-effort)
    const onKeyDown = (e) => {
      const key = (e.key || "").toLowerCase();
      if (
        e.key === "F11" ||
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (key === "i" || key === "j" || key === "t" || key === "n")) ||
        (e.ctrlKey && key === "u") ||
        (e.ctrlKey && key === "c") ||
        (e.ctrlKey && key === "a") ||
        (e.ctrlKey && key === "n") ||
        (e.ctrlKey && key === "r") ||
        (e.ctrlKey && key === "v") ||
        (e.ctrlKey && key === "t") ||
        (e.ctrlKey && key === "1") ||
        (e.ctrlKey && key === "2") ||
        (e.ctrlKey && key === "3") ||
        (e.ctrlKey && key === "4") ||
        (e.ctrlKey && key === "5") ||
        (e.ctrlKey && key === "6") ||
        (e.ctrlKey && key === "7") ||
        (e.ctrlKey && key === "8") ||
        (e.ctrlKey && key === "0") ||
        (e.ctrlKey && key === "9") ||
        (e.altKey && key === "F4") ||
        (e.altKey && e.key === " ")||
        (e.winKey)
      ) {
        e.preventDefault();
        e.stopPropagation();
        // alert("⚠️ Restricted action during interview.");
      }

      // ✅ Disable PrintScreen
      if (e.key === "PrintScreen") {
        e.preventDefault();
        navigator.clipboard.writeText(""); // Clear clipboard
        alert("⚠️ Screenshots are disabled during the interview.");
      }
    };

    //✅ Disable right-click
    const disableContextMenu = (e) => e.preventDefault();

    // ✅ Detect tab/window switch
    const onVisibilityChange = () => {
      if (document.hidden) {
        alert("⚠️ You switched tabs or minimized the window. This may cause Disqualification from interview.");
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange);
      document.removeEventListener("mozfullscreenchange", onFsChange);
      document.removeEventListener("MSFullscreenChange", onFsChange);
      document.removeEventListener("keydown", onKeyDown, true);
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  // If not fullscreen → show black screen + button
  if (!isFullscreen || blocked) {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <p className="mb-4 font-bold">
            ⚠️ Interview requires Fullscreen Mode. Click below to continue.
          </p>
          <button
            onClick={tryRequestFs}
            className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
          >
            Re-Enter Fullscreen
          </button>
        </div>
      </div>
    );
  }

  // Real interview UI
  return (
    <div className="p-10 lg:px-48 xl:px-56"> 
      <h2 className="font-bold text-xl flex justify-between">AI Interview session
        <span className="flex gap-2 items-center">
          <Timer/>
          00:00:00
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
          <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
              <Image src={'/avataar.jpg'} alt="S-!Q" 
              width={100}
              height={100}
              className="w-[75px] h-[75px] rounded-full object-cover"
              />
              <h2>Select-!Q</h2>
          </div>
          
          <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
              <h2 className="text-3xl bg-primary text-white p-4 rounded-full px-7 "> {interviewInfo?.userName[0]} </h2>
              <h2>{interviewInfo?.userName}</h2>
          </div>
      </div>

      <div className="flex justify-center items-center gap-7 mt-7">
        <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />

        <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
      </div>

      <h2 className="text-sm text-gray-400 text-center mt-3">Interview in Progress...</h2>
  
    </div>
  );
}

export default StartInterview;

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

