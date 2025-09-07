// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { Clock, Info, Video } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useParams } from "next/navigation";
// import { supabase } from "@/services/supabaseClient";
// import { toast } from "sonner";

// function Interview() {
//   const { interview_id } = useParams();
//   console.log(interview_id);
//   const [interviewData, setInterviewData] = useState();
//   const [userName,setUserName]=useState();
//   const [loading,setLoading]=useState(false);

//   useEffect(() => {
//     interview_id && GetInterviewDetails();
//   }, [interview_id]);

//   const GetInterviewDetails = async () => {
//     setLoading(true);
//     try{
//     let { data: Interviews, error } = await supabase
//       .from("Interviews")
//       .select("jobPosition,jobDescription,duration,type")
//       .eq("interview_id", interview_id);
//     setInterviewData(Interviews[0]);
//     setLoading(false);
//     if (Interviews?.length == 0){
//         toast('Incorrect Interview Link')

//         return;
//     }

//     }

    
//     catch(e)
//     {
//         setLoading(false);
//         toast('Incorrect interview Link')
//     }

//     setLoading(false);

//   };

//   return (
//     <div className="flex justify-center mt-10 px-5">
//       <div className="w-full max-w-2xl border rounded-lg bg-white p-7 md:p-10 shadow-sm">
//         {/* Logo */}
//         <div className="flex flex-col items-center">
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             width={100}
//             height={100}
//             className="w-[150px]"
//           />
//           <h2 className="mt-2 font-semibold">
//             AI-Powered Interview Platform
//           </h2>
//         </div>

//         {/* Candidate Illustration */}
//         <div className="flex justify-center">
//           <Image
//             src={"/candidate.png"}
//             alt="candidate"
//             width={400}
//             height={400}
//             className="w-[250px] my-6"
//           />
//         </div>

//         {/* Interview Title */}
//         <h2 className="text-center font-bold text-xl">
//           {interviewData?.jobPosition}
//         </h2>
//         <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-3">
//           <Clock /> {interviewData?.duration}
//         </h2>

//         {/* Name Input */}
//         <div className="w-full mt-6">
//           <h2 className="mb-1">Enter your Full Name</h2>
//           <Input placeholder='e.g. Suyash Gupta' onChange={(event)=>setUserName(event.target.value)} />
//         </div>

//         {/* Info Section */}
//         <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
//           <Info className="text-primary mt-1" />
//           <div>
//             <h2 className="font-bold">Before you Begin :</h2>
//             <ul className="list-disc list-inside text-sm mt-2 space-y-1">
//               <li className="text-primary">
//                 Test your camera and microphone
//               </li>
//               <li className="text-primary">
//                 Ensure you have a stable internet connection
//               </li>
//               <li className="text-primary">
//                 Keep your window Full-screen
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Button */}
//         <Button className={"mt-6 w-full font-bold"}
//         disabled={loading || !userName}
//         >
//           <Video /> Join Interview
//         </Button>
//       </div>
//     </div>
//   );

// ------------ 💥💦 Final [Down code]----------

    // return (
    // <div className="h-screen flex justify-center items-center bg-gray-100 px-4 overflow-hidden">
    //     <div className="w-full max-w-3xl border rounded-xl bg-white p-6 shadow-lg flex flex-col justify-between h-[90vh]">
        
    //     {/* Top Section */}
    //     <div className="flex flex-col items-center">
    //         {/* Logo */}
    //         <Image
    //         src={"/logo.png"}
    //         alt="logo"
    //         width={100}
    //         height={100}
    //         className="w-[130px]"
    //         />
    //         <h2 className="mt-2 font-semibold text-center">
    //         AI-Powered Interview Platform
    //         </h2>

    //         {/* Candidate Illustration */}
    //         <Image
    //         src={"/candidate.png"}
    //         alt="candidate"
    //         width={350}
    //         height={350}
    //         className="w-[220px] my-4"
    //         />

    //         {/* Interview Title */}
    //         <h2 className="font-bold text-lg text-center">
    //         {interviewData?.jobPosition}
    //         </h2>
    //         <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-2 text-sm">
    //         <Clock size={16} /> {interviewData?.duration}
    //         </h2>
    //     </div>

    //     {/* Middle Section */}
    //     <div className="mt-3">
    //         <h2 className="mb-1 text-sm">Enter your Full Name</h2>
    //         <Input placeholder="e.g. Suyash Gupta" />
    //     </div>

    //     {/* Info Section */}
    //     <div className="p-4 bg-indigo-100 flex gap-3 rounded-lg mt-4 w-full text-sm">
    //         <Info className="text-primary mt-0.5" size={16} />
    //         <div>
    //         <h2 className="font-bold">Before you Begin :</h2>
    //         <ul className="list-disc list-inside mt-1 space-y-1 text-primary text-xs">
    //             <li>Test your camera and microphone</li>
    //             <li>Ensure you have a stable internet connection</li>
    //             <li>Keep your window Full-screen</li>
    //         </ul>
    //         </div>
    //     </div>

    //     {/* Bottom Button */}
    //     <Button className="mt-4 w-full font-bold">
    //         <Video size={18} /> Join Interview
    //     </Button>
    //     </div>
    // </div>
    // );


//----------- Gpt Single page mode [above]------------

    // return (
    // <div className="min-h-screen flex justify-center items-center  px-4">
    //     <div className="w-full max-w-3xl border rounded-xl bg-white p-8 shadow-lg">
    //     {/* Logo */}
    //     <div className="flex flex-col items-center">
    //         <Image
    //         src={"/logo.png"}
    //         alt="logo"
    //         width={100}
    //         height={100}
    //         className="w-[150px]"
    //         />
    //         <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>
    //     </div>

    //     {/* Candidate Illustration */}
    //     <div className="flex justify-center">
    //         <Image
    //         src={"/candidate.png"}
    //         alt="candidate"
    //         width={400}
    //         height={400}
    //         className="w-[280px] my-6"
    //         />
    //     </div>

    //     {/* Interview Title */}
    //     <h2 className="text-center font-bold text-xl">
    //         {interviewData?.jobPosition}
    //     </h2>
    //     <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-3">
    //         <Clock /> {interviewData?.duration}
    //     </h2>

    //     {/* Name Input */}
    //     <div className="w-full mt-6">
    //         <h2 className="mb-1">Enter your Full Name</h2>
    //         <Input placeholder="e.g. Suyash Gupta" />
    //     </div>

    //     {/* Info Section */}
    //     <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
    //         <Info className="text-primary mt-1" />
    //         <div>
    //         <h2 className="font-bold">Before you Begin :</h2>
    //         <ul className="list-disc list-inside text-sm mt-2 space-y-1">
    //             <li className="text-primary">
    //             Test your camera and microphone
    //             </li>
    //             <li className="text-primary">
    //             Ensure you have a stable internet connection
    //             </li>
    //             <li className="text-primary">
    //             Keep your window Full-screen
    //             </li>
    //         </ul>
    //         </div>
    //     </div>

    //     {/* Button */}
    //     <Button className="mt-6 w-full font-bold">
    //         <Video /> Join Interview
    //     </Button>
    //     </div>
    // </div>
    // );

// }

// export default Interview;

// --------final code-----------

//-----------Testing Mode----------

// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import { Clock, Info, Video } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useParams } from "next/navigation";
// import { supabase } from "@/services/supabaseClient";
// import { toast } from "sonner";

// function Interview() {
//   const { interview_id } = useParams();
//   const [interviewData, setInterviewData] = useState();
//   const [userName, setUserName] = useState();
//   const [loading, setLoading] = useState(false);

//   // Camera & mic states
//   const [permissionError, setPermissionError] = useState("");
//   const [testing, setTesting] = useState(false);
//   const videoRef = useRef(null);
//   const [micLevel, setMicLevel] = useState(0);

//   useEffect(() => {
//     interview_id && GetInterviewDetails();
//   }, [interview_id]);

//   const GetInterviewDetails = async () => {
//     setLoading(true);
//     try {
//       let { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select("jobPosition,jobDescription,duration,type")
//         .eq("interview_id", interview_id);

//       if (Interviews?.length === 0) {
//         toast("Incorrect Interview Link");
//         setLoading(false);
//         return;
//       }

//       setInterviewData(Interviews[0]);
//       setLoading(false);
//     } catch (e) {
//       setLoading(false);
//       toast("Incorrect interview Link");
//     }
//   };

//   // Start test when button clicked
//   const startTest = async () => {
//     setTesting(true);
//     setPermissionError("");
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });

//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }

//       // Setup audio analyser for mic level
//       const audioContext = new AudioContext();
//       const source = audioContext.createMediaStreamSource(stream);
//       const analyser = audioContext.createAnalyser();
//       const dataArray = new Uint8Array(analyser.frequencyBinCount);

//       source.connect(analyser);

//       const checkMicLevel = () => {
//         analyser.getByteFrequencyData(dataArray);
//         let values = 0;
//         for (let i = 0; i < dataArray.length; i++) {
//           values += dataArray[i];
//         }
//         let average = values / dataArray.length;
//         setMicLevel(average);
//         requestAnimationFrame(checkMicLevel);
//       };

//       checkMicLevel();
//     } catch (err) {
//       setPermissionError("Please allow camera & microphone access to continue.");
//       setTesting(false);
//     }
//   };

//   return (
//     <div className="flex justify-center mt-10 px-5">
//       <div className="w-full max-w-2xl border rounded-lg bg-white p-7 md:p-10 shadow-sm">
//         {/* Logo */}
//         <div className="flex flex-col items-center">
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             width={100}
//             height={100}
//             className="w-[150px]"
//           />
//           <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>
//         </div>

//         {/* Candidate Illustration */}
//         <div className="flex justify-center">
//           <Image
//             src={"/candidate.png"}
//             alt="candidate"
//             width={400}
//             height={400}
//             className="w-[250px] my-6"
//           />
//         </div>

//         {/* Interview Title */}
//         <h2 className="text-center font-bold text-xl">
//           {interviewData?.jobPosition}
//         </h2>
//         <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-3">
//           <Clock /> {interviewData?.duration}
//         </h2>

//         {/* Name Input */}
//         <div className="w-full mt-6">
//           <h2 className="mb-1">Enter your Full Name</h2>
//           <Input
//             placeholder="e.g. Suyash Gupta"
//             onChange={(event) => setUserName(event.target.value)}
//           />
//         </div>

//         {/* Test Audio & Video Button */}
//         <div className="mt-6">
//           <Button
//             onClick={startTest}
//             className="w-full font-bold"
//             variant="outline"
//             disabled={testing}
//           >
//             🎤📷 Test Audio & Video
//           </Button>
//         </div>

//         {/* Camera & Mic Test (only visible after button click) */}
//         {testing && (
//           <div className="mt-6">
//             <h2 className="mb-2 font-bold">Camera & Microphone Test</h2>
//             {permissionError ? (
//               <p className="text-red-500">{permissionError}</p>
//             ) : (
//               <div>
//                 <video
//                   ref={videoRef}
//                   autoPlay
//                   playsInline
//                   muted
//                   className="w-full h-48 rounded-lg border"
//                 />
//                 <div className="mt-3">
//                   <p className="text-sm text-gray-600">Mic Input Level:</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
//                     <div
//                       className="bg-green-500 h-2 rounded-full transition-all duration-100"
//                       style={{ width: `${Math.min(micLevel, 100)}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Info Section */}
//         <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
//           <Info className="text-primary mt-1" />
//           <div>
//             <h2 className="font-bold">Before you Begin :</h2>
//             <ul className="list-disc list-inside text-sm mt-2 space-y-1">
//               <li className="text-primary">Test your camera and microphone</li>
//               <li className="text-primary">
//                 Ensure you have a stable internet connection
//               </li>
//               <li className="text-primary">Keep your window Full-screen</li>
//             </ul>
//           </div>
//         </div>

//         {/* Join Button */}
//         <Button
//           className={"mt-6 w-full font-bold"}
//           disabled={loading || !userName}
//         >
//           <Video /> Join Interview
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Interview;

//============🤍🤍🤍=================

// "use client";
// import React, { useEffect, useState, useRef, useContext } from "react";
// import Image from "next/image";
// import { Clock, Info, Loader2Icon, Settings, Settings2, Settings2Icon, SettingsIcon, Video } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useParams, useRouter } from "next/navigation";
// import { supabase } from "@/services/supabaseClient";
// import { toast } from "sonner";
// import { InterviewDataContext } from "@/context/InterviewDataContext";

// function Interview() {

//   const { interview_id } = useParams();
//   const [interviewData, setInterviewData] = useState();
//   const [userName, setUserName] = useState();
//   const [loading, setLoading] = useState(false);
//   const {interviewInfo,setInterviewInfo}=useContext(InterviewDataContext);
//   const router=useRouter();
//   // const [loading,setLoading]=useState(false);

//   // For testing camera & mic
//   const [testing, setTesting] = useState(false);
//   const [permissionError, setPermissionError] = useState("");
//   const [micLevel, setMicLevel] = useState(0);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     interview_id && GetInterviewDetails();
//   }, [interview_id]);

//   const GetInterviewDetails = async () => {
//     setLoading(true);
//     try {
//       let { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select("jobPosition,jobDescription,duration,type")
//         .eq("interview_id", interview_id);
//       setInterviewData(Interviews[0]);
//       setLoading(false);
//       if (Interviews?.length == 0) {
//         toast("Incorrect Interview Link");
//         return;
//       }
//     } catch (e) {
//       setLoading(false);
//       toast("Incorrect interview Link");
//     }
//     setLoading(false);
//   };

//   // Start camera & mic test
//   const startTest = async () => {
//     setTesting(true);
//     setPermissionError("");
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }

//       // Mic analyser
//       const audioContext = new AudioContext();
//       const analyser = audioContext.createAnalyser();
//       const source = audioContext.createMediaStreamSource(stream);
//       source.connect(analyser);
//       const dataArray = new Uint8Array(analyser.frequencyBinCount);

//       const updateMicLevel = () => {
//         analyser.getByteFrequencyData(dataArray);
//         let values = 0;
//         for (let i = 0; i < dataArray.length; i++) {
//           values += dataArray[i];
//         }
//         const average = values / dataArray.length;
//         setMicLevel(average);
//         requestAnimationFrame(updateMicLevel);
//       };

//       updateMicLevel();
//     } catch (err) {
//       setPermissionError("Unable to access camera/microphone.");
//     }
//   };

//   const onJoinInterview= async()=>{
//     setLoading(true);
//     let { data: Interviews, error } = await supabase
//         .from('Interviews')
//         .select('*')
//         .eq('interview_id',interview_id); 

//       console.log(Interviews[0]);
//       setInterviewInfo({
//         userName:userName,
//         interviewData:Interview[0]

//       });
//       router.push('/interview/'+ interview_id +'/start')
//       setLoading(false);
//   }

//   return (
//     <div className="flex justify-center mt-10 px-5">
//       <div className="w-full max-w-2xl border rounded-lg bg-white p-7 md:p-10 shadow-sm">
//         {/* Logo */}
//         <div className="flex flex-col items-center">
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             width={100}
//             height={100}
//             className="w-[150px]"
//           />
//           <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>
//         </div>

//         {/* Candidate Illustration */}
//         <div className="flex justify-center">
//           <Image
//             src={"/candidate.png"}
//             alt="candidate"
//             width={400}
//             height={400}
//             className="w-[250px] my-6"
//           />
//         </div>

//         {/* Interview Title */}
//         <h2 className="text-center font-bold text-xl">
//           {interviewData?.jobPosition}
//         </h2>
//         <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-3">
//           <Clock /> {interviewData?.duration}
//         </h2>

//         {/* Name Input */}
//         <div className="w-full mt-6">
//           <h2 className="mb-1">Enter your Full Name</h2>
//           <Input
//             placeholder="e.g. Suyash Gupta"
//             onChange={(event) => setUserName(event.target.value)}
//           />
//         </div>

//         {/* Info Section */}
//         <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
//           <Info className="text-primary mt-1" />
//           <div>
//             <h2 className="font-bold">Before you Begin :</h2>
//             <ul className="list-disc list-inside text-sm mt-2 space-y-1">
//               <li className="text-primary">Test your camera and microphone</li>
//               <li className="text-primary">
//                 Ensure you have a stable internet connection
//               </li>
//               <li className="text-primary">Keep your window Full-screen</li>
//             </ul>
//           </div>
//         </div>

//         {/* Join Button */}
//         <Button
//           className={"mt-6 w-full font-bold"}
//           disabled={loading || !userName}
//           onClick={()=>onJoinInterview()}
//         >
//           <Video /> {loading&&<Loader2Icon className="animate-spin" /> } Join Interview
//         </Button>

//         {/* Test Audio & Video Button */}
//         <div className="mt-3">
//           <Button
//             onClick={startTest}
//             className="w-full font-bold"
//             variant="outline"
//             disabled={testing}
//           >
//             <Settings2 /> Test Audio & Video
//           </Button>
//         </div>

//         {/* Camera & Mic Test (only visible after button click) */}
//         {testing && (
//           <div className="mt-6">
//             <h2 className="mb-2 font-bold">Camera & Microphone Test</h2>
//             {permissionError ? (
//               <p className="text-red-500">{permissionError}</p>
//             ) : (
//               <div>
//                 <video
//                   ref={videoRef}
//                   autoPlay
//                   playsInline
//                   muted
//                   className="w-full h-48 rounded-lg border"
//                 />
//                 <div className="mt-3">
//                   <p className="text-sm text-gray-600">Mic Input Level:</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
//                     <div
//                       className="bg-green-500 h-2 rounded-full transition-all duration-100"
//                       style={{ width: `${Math.min(micLevel, 100)}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Interview;

// ---------- 💛🧡🧡🧡❤ Full Screen Feature------

// "use client";
// import React, { useEffect, useState, useRef, useContext } from "react";
// import Image from "next/image";
// import {
//   Clock,
//   Info,
//   Loader2Icon,
//   Settings2,
//   Video,
// } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useParams, useRouter } from "next/navigation";
// import { supabase } from "@/services/supabaseClient";
// import { toast } from "sonner";
// import { InterviewDataContext } from "@/context/InterviewDataContext";

// function Interview() {
//   const { interview_id } = useParams();
//   const [interviewData, setInterviewData] = useState();
//   const [userName, setUserName] = useState();
//   const [loading, setLoading] = useState(false);
//   const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // For testing camera & mic
//   const [testing, setTesting] = useState(false);
//   const [permissionError, setPermissionError] = useState("");
//   const [micLevel, setMicLevel] = useState(0);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     interview_id && GetInterviewDetails();
//   }, [interview_id]);

//   const GetInterviewDetails = async () => {
//     setLoading(true);
//     try {
//       let { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select("jobPosition,jobDescription,duration,type")
//         .eq("interview_id", interview_id);
//       setInterviewData(Interviews[0]);
//       setLoading(false);
//       if (Interviews?.length == 0) {
//         toast("Incorrect Interview Link");
//         return;
//       }
//     } catch (e) {
//       setLoading(false);
//       toast("Incorrect interview Link");
//     }
//     setLoading(false);
//   };

//   // Start camera & mic test
//   const startTest = async () => {
//     setTesting(true);
//     setPermissionError("");
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }

//       // Mic analyser
//       const audioContext = new AudioContext();
//       const analyser = audioContext.createAnalyser();
//       const source = audioContext.createMediaStreamSource(stream);
//       source.connect(analyser);
//       const dataArray = new Uint8Array(analyser.frequencyBinCount);

//       const updateMicLevel = () => {
//         analyser.getByteFrequencyData(dataArray);
//         let values = 0;
//         for (let i = 0; i < dataArray.length; i++) {
//           values += dataArray[i];
//         }
//         const average = values / dataArray.length;
//         setMicLevel(average);
//         requestAnimationFrame(updateMicLevel);
//       };

//       updateMicLevel();
//     } catch (err) {
//       setPermissionError("Unable to access camera/microphone.");
//     }
//   };

//   // Join Interview + Request Fullscreen
//   const onJoinInterview = async () => {
//     setLoading(true);
//     let { data: Interviews, error } = await supabase
//       .from("Interviews")
//       .select("*")
//       .eq("interview_id", interview_id);

//     if (Interviews && Interviews.length > 0) {
//       setInterviewInfo({
//         userName: userName,
//         interviewData: Interviews[0],
//       });

//       // 🔥 Request fullscreen before redirect
//       try {
//         if (document.documentElement.requestFullscreen) {
//           await document.documentElement.requestFullscreen();
//         } else if (document.documentElement.webkitRequestFullscreen) {
//           await document.documentElement.webkitRequestFullscreen(); // Safari
//         } else if (document.documentElement.msRequestFullscreen) {
//           await document.documentElement.msRequestFullscreen(); // IE/Edge
//         }
//       } catch (err) {
//         console.warn("Fullscreen request failed:", err);
//       }

//       router.push("/interview/" + interview_id + "/start");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex justify-center mt-10 px-5">
//       <div className="w-full max-w-2xl border rounded-lg bg-white p-7 md:p-10 shadow-sm">
//         {/* Logo */}
//         <div className="flex flex-col items-center">
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             width={100}
//             height={100}
//             className="w-[150px]"
//           />
//           <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>
//         </div>

//         {/* Candidate Illustration */}
//         <div className="flex justify-center">
//           <Image
//             src={"/candidate.png"}
//             alt="candidate"
//             width={400}
//             height={400}
//             className="w-[250px] my-6"
//           />
//         </div>

//         {/* Interview Title */}
//         <h2 className="text-center font-bold text-xl">
//           {interviewData?.jobPosition}
//         </h2>
//         <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-3">
//           <Clock /> {interviewData?.duration}
//         </h2>

//         {/* Name Input */}
//         <div className="w-full mt-6">
//           <h2 className="mb-1">Enter your Full Name</h2>
//           <Input
//             placeholder="e.g. Suyash Gupta"
//             onChange={(event) => setUserName(event.target.value)}
//           />
//         </div>

//         {/* Info Section */}
//         <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
//           <Info className="text-primary mt-1" />
//           <div>
//             <h2 className="font-bold">Before you Begin :</h2>
//             <ul className="list-disc list-inside text-sm mt-2 space-y-1">
//               <li className="text-primary">Test your camera and microphone</li>
//               <li className="text-primary">
//                 Ensure you have a stable internet connection
//               </li>
//               <li className="text-primary">Keep your window Full-screen</li>
//             </ul>
//           </div>
//         </div>

//         {/* Join Button */}
//         <Button
//           className={"mt-6 w-full font-bold"}
//           disabled={loading || !userName}
//           onClick={onJoinInterview}
//         >
//           <Video /> {loading && <Loader2Icon className="animate-spin" />} Join
//           Interview
//         </Button>

//         {/* Test Audio & Video Button */}
//         <div className="mt-3">
//           <Button
//             onClick={startTest}
//             className="w-full font-bold"
//             variant="outline"
//             disabled={testing}
//           >
//             <Settings2 /> Test Audio & Video
//           </Button>
//         </div>

//         {/* Camera & Mic Test (only visible after button click) */}
//         {testing && (
//           <div className="mt-6">
//             <h2 className="mb-2 font-bold">Camera & Microphone Test</h2>
//             {permissionError ? (
//               <p className="text-red-500">{permissionError}</p>
//             ) : (
//               <div>
//                 <video
//                   ref={videoRef}
//                   autoPlay
//                   playsInline
//                   muted
//                   className="w-full h-48 rounded-lg border"
//                 />
//                 <div className="mt-3">
//                   <p className="text-sm text-gray-600">Mic Input Level:</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
//                     <div
//                       className="bg-green-500 h-2 rounded-full transition-all duration-100"
//                       style={{ width: `${Math.min(micLevel, 100)}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Interview;

// -----------💥💟💥 Force full-screen --------------


"use client";
import React, { useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import { Clock, Info, Loader2Icon, Settings2, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/services/supabaseClient";
import { toast } from "sonner";
import { InterviewDataContext } from "@/context/InterviewDataContext";

function Interview() {
  const { interview_id } = useParams();
  const [interviewData, setInterviewData] = useState();
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const { setInterviewInfo } = useContext(InterviewDataContext);
  const router = useRouter();

  // For testing camera & mic
  const [testing, setTesting] = useState(false);
  const [permissionError, setPermissionError] = useState("");
  const [micLevel, setMicLevel] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    interview_id && GetInterviewDetails();
  }, [interview_id]);

  const GetInterviewDetails = async () => {
    setLoading(true);
    try {
      let { data: Interviews } = await supabase
        .from("Interviews")
        .select("jobPosition,jobDescription,duration,type")
        .eq("interview_id", interview_id);

      setInterviewData(Interviews?.[0]);

      if (!Interviews || Interviews.length === 0) {
        toast("Incorrect Interview Link");
      }
    } catch (e) {
      toast("Incorrect interview Link");
    } finally {
      setLoading(false);
    }
  };

  // Camera & mic test
  const startTest = async () => {
    setTesting(true);
    setPermissionError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      // Mic analyser
      const audioContext =
        new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);
      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const updateMicLevel = () => {
        analyser.getByteFrequencyData(dataArray);
        let values = 0;
        for (let i = 0; i < dataArray.length; i++) values += dataArray[i];
        const average = values / dataArray.length;
        setMicLevel(average);
        requestAnimationFrame(updateMicLevel);
      };
      updateMicLevel();
    } catch (err) {
      setPermissionError("Unable to access camera/microphone.");
    }
  };

  // Join Interview
  const onJoinInterview = async () => {
    if (!userName) {
      toast("Please enter your name first");
      return;
    }

    setLoading(true);

    // Request fullscreen first (inside user click)
    try {
      const el = document.documentElement;
      if (el.requestFullscreen) await el.requestFullscreen();
      else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
      else if (el.msRequestFullscreen) await el.msRequestFullscreen();
    } catch (err) {
      console.warn("Fullscreen request blocked:", err);
    }

    // Fetch interview
    try {
      const { data: Interviews, error } = await supabase
        .from("Interviews")
        .select("*")
        .eq("interview_id", interview_id);

      if (error || !Interviews || Interviews.length === 0) {
        toast("Invalid Interview");
        setLoading(false);
        return;
      }

      // Save context info
      setInterviewInfo({
        userName,
        interviewData: Interviews[0],
      });

      // Redirect
      router.push(`/interview/${interview_id}/start`);
    } catch (err) {
      console.error("Error joining interview:", err);
      toast("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-10 px-5">
      <div className="w-full max-w-2xl border rounded-lg bg-white p-7 md:p-10 shadow-sm">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="w-[150px]"
          />
          <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>
        </div>

        {/* Candidate Illustration */}
        <div className="flex justify-center">
          <Image
            src={"/candidate.png"}
            alt="candidate"
            width={400}
            height={400}
            className="w-[250px] my-6"
          />
        </div>

        {/* Interview Title */}
        <h2 className="text-center font-bold text-xl">
          {interviewData?.jobPosition}
        </h2>
        <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-3">
          <Clock /> {interviewData?.duration}
        </h2>

        {/* Name Input */}
        <div className="w-full mt-6">
          <h2 className="mb-1">Enter your Full Name</h2>
          <Input
            placeholder="e.g. Suyash Gupta"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>

        {/* Info Section */}
        <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
          <Info className="text-primary mt-1" />
          <div>
            <h2 className="font-bold">Before you Begin :</h2>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li className="text-primary">Test your camera and microphone</li>
              <li className="text-primary">
                Ensure you have a stable internet connection
              </li>
              <li className="text-primary">Keep your window Full-screen</li>
            </ul>
          </div>
        </div>

        {/* Join Button */}
        <Button
          className="mt-6 w-full font-bold flex items-center justify-center gap-2"
          disabled={loading || !userName}
          onClick={onJoinInterview}
        >
          {loading ? (
            <>
              <Loader2Icon className="animate-spin h-5 w-5" />
              Joining Interview...
            </>
          ) : (
            <>
              <Video className="h-5 w-5" />
              Join Interview
            </>
          )}
        </Button>

        {/* Test Audio & Video Button */}
        <div className="mt-3">
          <Button
            onClick={startTest}
            className="w-full font-bold"
            variant="outline"
            disabled={testing}
          >
            <Settings2 /> Test Audio & Video
          </Button>
        </div>

        {/* Camera & Mic Test */}
        {testing && (
          <div className="mt-6">
            <h2 className="mb-2 font-bold">Camera & Microphone Test</h2>
            {permissionError ? (
              <p className="text-red-500">{permissionError}</p>
            ) : (
              <div>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-48 rounded-lg border"
                />
                <div className="mt-3">
                  <p className="text-sm text-gray-600">Mic Input Level:</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-100"
                      style={{ width: `${Math.min(micLevel, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Interview;

