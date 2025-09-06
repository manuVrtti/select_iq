"use client"
import React from "react";
import InterviewHeader from "../_components/InterviewHeader";
import Image from "next/image";
import { Clock, Info, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

function Interview() {

  const {interview_id}=useParams();
  console.log(interview_id)

  return (
    <div className="px-10 md:px-28 lg:px-48 xl:px-80 mt-7 ">
      <div className="flex flex-col items-center justify-center border rounded-lg bg-white p-7 lg:px-33 xl:px-52 mb-20">
        {/* Logo */}
        <Image
          src={"/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="w-[170px]"
        />
        <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>

        {/* Candidate Illustration */}
        <Image
          src={"/candidate.png"}
          alt="candidate"
          width={500}
          height={500}
          className="w-[300px] my-6"
        />

        {/* Interview Title */}
        <h2 className="font-bold text-xl">Full Stack Developer Interview</h2>
        <h2 className="flex gap-2 items-center text-gray-500 mt-3">
          <Clock /> 30 Minutes
        </h2>

        {/* Name Input */}
        <div className="w-full mt-2">
          <h2>Enter your Full Name</h2>
          <Input placeholder="e.g. Suyash Gupta" />
        </div>

        {/* Info Section */}
        <div className="p-5 bg-indigo-100 flex gap-5 rounded-lg mt-5 w-full">
          <Info className="text-primary" />
          <div>
            <h2 className="font-bold">Before you Begin :</h2>
            <ul className="list-disc list-inside text-xs mt-2">
              <li className="text-sm text-primary">
                Test your camera and microphone
              </li>
              <li className="text-sm text-primary">
                Ensure you have a stable internet connection
              </li>
              <li className="text-sm text-primary">
                Keep your window Full-screen
              </li>
            </ul>
          </div>
        </div>

        <Button className={'mt-5 w-full font-bold'}><Video /> Join Interview </Button>

      </div>
    </div>
  );
}

export default Interview;
