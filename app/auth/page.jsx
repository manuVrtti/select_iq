// "use client"
// import { Button } from '@/components/ui/button'
// import { supabase } from '@/services/supabaseClient'
// import Image from 'next/image'
// import React from 'react'


// function Login() {

//   /**
//    * 💛Used to sigh-in with google
//    */
//   const signInWithGoogle= async()=>{
//     const {error}=await supabase.auth.signInWithOAuth({ provider:'google', options: {redirectTo: `${window.location.origin}/dashboard`,// after login redirect krega}
//     },
//     })

//     if(error)
//     {
//       console.error('Error:',error.message)
//     }

//   }

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className='flex flex-col items-center  border rounded-2xl p-5 pb-12 bg-blue-50 mt-4'>
//         <Image 
//           src="/logo.png" 
//           alt="logo" 
//           width={220} 
//           height={10} 
//           className="mb-1 py-8" 
//         />

//         <div className="flex flex-col items-center ">
//           <Image 
//             src="/login.jpg" 
//             alt="login" 
//             width={600} 
//             height={400} 
//             className="w-[400px] h-[250px] rounded-2xl " 
//           />

//           <h2 className="text-2xl font-bold text-center mt-4 pb-3">
//             Welcome To SelectIQ
//           </h2>
//           <p className="text-gray-500 text-center">
//             Sign In With Google Authentication
//           </p>
//           <Button className="mt-7 w-full" onClick={signInWithGoogle} >Login With Google</Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login


//------------ New bc -------

"use client";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth`, // 👈 redirect after login
      },
    });

    if (error) {
      console.error("Error:", error.message);
    }
  };

  // ✅ Agar user already login hai → dashboard bhejo
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        router.replace("/dashboard");
      }
      setChecking(false);
    });
  }, [router]);

  if (checking) {
    return (
      <div className="flex items-center justify-center h-screen">
        Checking authentication...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center border rounded-2xl p-5 pb-12 bg-blue-50 mt-4">
        <Image
          src="/logo.png"
          alt="logo"
          width={220}
          height={10}
          className="mb-1 py-8"
        />
        <div className="flex flex-col items-center">
          <Image
            src="/login.jpg"
            alt="login"
            width={600}
            height={400}
            className="w-[400px] h-[250px] rounded-2xl"
          />
          <h2 className="text-2xl font-bold text-center mt-4 pb-3">
            Welcome To SelectIQ
          </h2>
          <p className="text-gray-500 text-center">
            Sign In With Google Authentication
          </p>
          <Button className="mt-7 w-full" onClick={signInWithGoogle}>
            Login With Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;



//------Middleware------

// import { NextResponse } from "next/server";
// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

// export default async function middleware(req) {
//   const res = NextResponse.next();
//   const supabase = createMiddlewareClient({ req, res });

//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   console.log("MIDDLEWARE SESSION (server) ===>", session);

//   const { pathname } = req.nextUrl;

//   if (!session && pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/auth", req.url));
//   }

//   if (session && pathname.startsWith("/auth")) {
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }

//   return res;
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/auth/:path*"],
// };
