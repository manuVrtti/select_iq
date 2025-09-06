"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, Info, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { supabase } from "@/services/supabaseClient";

function Interview() {
  const { interview_id } = useParams();
  console.log(interview_id);
  const [interviewData, setInterviewData] = useState();

  useEffect(() => {
    interview_id && GetInterviewDetails();
  }, [interview_id]);

  const GetInterviewDetails = async () => {
    let { data: Interviews, error } = await supabase
      .from("Interviews")
      .select("jobPosition,jobDescription,duration,type")
      .eq("interview_id", interview_id);
    setInterviewData(Interviews[0]);
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
          <h2 className="mt-2 font-semibold">
            AI-Powered Interview Platform
          </h2>
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
          <Input placeholder="e.g. Suyash Gupta" />
        </div>

        {/* Info Section */}
        <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
          <Info className="text-primary mt-1" />
          <div>
            <h2 className="font-bold">Before you Begin :</h2>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li className="text-primary">
                Test your camera and microphone
              </li>
              <li className="text-primary">
                Ensure you have a stable internet connection
              </li>
              <li className="text-primary">
                Keep your window Full-screen
              </li>
            </ul>
          </div>
        </div>

        {/* Button */}
        <Button className="mt-6 w-full font-bold">
          <Video /> Join Interview
        </Button>
      </div>
    </div>
  );

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

}

export default Interview;

// --------final code-----------

