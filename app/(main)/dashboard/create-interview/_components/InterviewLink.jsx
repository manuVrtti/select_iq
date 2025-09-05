import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { ArrowLeft, Calendar, Clock, Copy, CopyIcon, List, Mail, Plus } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { toast } from 'sonner';



// function InterviewLink( interview_id, formData) {
//     const url=process.env.NEXT_PUBLIC_HOST_URL+'/'+interview_id;

//     const GetInterviewUrl=()=>{
        
//         return url;
//     }

//     const onCopyLink= async ()=>{
//         await navigator.clipboard.writeText(url);
//         toast('Link Copied  📃')
//     }
    

//   return (
//     <div className='flex flex-col items-center justify-center mt-10 bg-slate-100 p-5 rounded-2xl'> 
//         <Image src={'/Check.gif'} alt='check'
//             width={200}
//             height={200}
//             className='w-[60px] h-[60px]'
//         />
//         <h2 className='font-bold text-lg mt-4 '>Your AI Interview is Ready...! 🎯 </h2>
//         <p className='mt-3'>  Share this link with your candidate to start the Interview Process </p>

//         <div className='w-full p-7 mt-6 rounded-lg bg-white  '>
//             <div className='flex justify-between items-center'>
//                <h2 className='font-bold  '> Interview Link </h2>
//                <h2 className='p-1 px-2 text-primary bg-indigo-50 rounded-4xl'> Valid for 30 Days</h2>

//             </div>

//             <div className='mt-3 flex gap-3 items-center'>
//                 <Input defaultValue={GetInterviewUrl()} disabled={true} />

//                 <Button onClick={()=>onCopyLink() }> <Copy /> Copy Link</Button>
//             </div>
//             <hr className='my-7'/>

//             <div className='flex gap-5'>
//                 <h2 className='text-sm text-primary flex gap-2 items-center '><Clock className='h-4 w-4'/>  {formData?.duration} </h2>

//                 <h2 className='text-sm text-primary flex gap-2 items-center '><List className='h-4 w-4'/> 10 {formData?.duration} </h2>

//                 {/* <h2 className='text-sm text-primary flex gap-2 items-center '><Calendar className='h-4 w-4'/> 30 Mins {formData?.duration} </h2> */}


//             </div>
//         </div>

//         <div className='mt-7 bg-white p-5 rounded-lg w-full '>
//             <h2 className='font-bold'> Share Via </h2>
//             <div className='flex gap-7 mt-2 justify-around'>
//                 <Button variant={'outline'} className={''}> <Mail /> E-Mail</Button>

//                 <Button variant={'outline'} className={''}> <Mail /> Telegram </Button>

//                 <Button variant={'outline'} className={''}> <Mail /> WhatsApp</Button>
//             </div>

//         </div>

//         <div className='flex w-full gap-5 justify-between mt-6'>
//             <Link href={'/dashboard'}>
//             <Button variant={'outline'}> <ArrowLeft/> Back to Dashboard </Button>
//             </Link>
//             <Link href={'/create-interview'}>
//             <Button > <Plus/> Create New Interview </Button>
//             </Link>
//         </div>
//     </div>
//   )
// }

// export default InterviewLink

// ----------------Final CODE---------------

function InterviewLink({ interview_id, formData }) {
  const url = process.env.NEXT_PUBLIC_HOST_URL + "/" + interview_id;

  const GetInterviewUrl = () => {
    return url;
  };

  const onCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    toast("Link Copied 📃");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 bg-slate-100 p-5 rounded-2xl">
      <Image
        src={"/Check.gif"}
        alt="check"
        width={200}
        height={200}
        className="w-[60px] h-[60px]"
      />
      <h2 className="font-bold text-lg mt-4">
        Your AI Interview is Ready...! 🎯
      </h2>
      <p className="mt-3">
        Share this link with your candidate to start the Interview Process
      </p>

      <div className="w-full p-7 mt-6 rounded-lg bg-white">
        <div className="flex justify-between items-center">
          <h2 className="font-bold"> Interview Link </h2>
          <h2 className="p-1 px-2 text-primary bg-indigo-50 rounded-4xl">
            Valid for 30 Days
          </h2>
        </div>

        <div className="mt-3 flex gap-3 items-center">
          <Input defaultValue={GetInterviewUrl()} disabled={true} />

          <Button onClick={() => onCopyLink()}>
            {" "}
            <Copy /> Copy Link
          </Button>
        </div>
        <hr className="my-7" />

        <div className="flex gap-5">
          <h2 className="text-sm text-primary flex gap-2 items-center ">
            <Clock className="h-4 w-4" /> {formData?.duration}{" "}
          </h2>

          <h2 className="text-sm text-primary flex gap-2 items-center ">
            <List className="h-4 w-4" /> 10 {formData?.duration}{" "}
          </h2>
        </div>
      </div>

      <div className="mt-7 bg-white p-5 rounded-lg w-full ">
        <h2 className="font-bold"> Share Via </h2>
        <div className="flex gap-7 mt-2 justify-around">
          <Button variant={"outline"} className={""}>
            {" "}
            <Mail /> E-Mail
          </Button>

          <Button variant={"outline"} className={""}>
            {" "}
            <Mail /> Telegram{" "}
          </Button>

          <Button variant={"outline"} className={""}>
            {" "}
            <Mail /> WhatsApp
          </Button>
        </div>
      </div>

      <div className="flex w-full gap-5 justify-between mt-6">
        <Link href={"/dashboard"}>
          <Button variant={"outline"}>
            {" "}
            <ArrowLeft /> Back to Dashboard{" "}
          </Button>
        </Link>
        <Link href={"/create-interview"}>
          <Button>
            {" "}
            <Plus /> Create New Interview{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default InterviewLink;
