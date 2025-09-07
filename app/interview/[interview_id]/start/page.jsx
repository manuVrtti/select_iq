"use client";
import React, { useEffect, useState } from "react";

function StartInterview() {
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
        (e.ctrlKey && e.shiftKey && (key === "i" || key === "j")) ||
        (e.ctrlKey && key === "u")
      ) {
        e.preventDefault();
        e.stopPropagation();
        alert("⚠️ Restricted action during interview.");
      }
    };

    document.addEventListener("keydown", onKeyDown, true);

    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange);
      document.removeEventListener("mozfullscreenchange", onFsChange);
      document.removeEventListener("MSFullscreenChange", onFsChange);
      document.removeEventListener("keydown", onKeyDown, true);
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
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow rounded-xl p-8">
        <h1 className="text-2xl font-bold">StartInterview</h1>
        <p className="mt-2 text-gray-600">
          Stay in fullscreen to continue your interview.
        </p>
      </div>
    </div>
  );
}

export default StartInterview;
