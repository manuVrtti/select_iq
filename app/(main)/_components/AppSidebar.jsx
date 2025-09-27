// "use client";   // ✅ mark as Client Component

// import { Button } from "@/components/ui/button"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
// } from "@/components/ui/sidebar"
// import { SideBarOptions } from "@/services/Constants"
// import { Plus } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// export function AppSidebar() {
//   const path = usePathname();   // ✅ Now works safely

//   return (
//     <Sidebar>
//       <SidebarHeader className="flex items-center mt-6">
//         <Image 
//           src={"/logo.png"} 
//           alt="logo" 
//           width={200} 
//           height={100}
//           className="w-[165px]" 
//         />       
//         <Button className="w-full"> 
//           <Plus /> Create New Interview 
//         </Button>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarMenu>
//             {SideBarOptions.map((option, index) => (
//               <SidebarMenuItem 
//                 key={index} 
//                 className='p-2' // ✅ highlight active path
//               >
//                 <SidebarMenuButton asChild className={`p-6 ${path==option.path&&'bg-indigo-100'} `}>
//                   <Link href={option.path}>
//                     <option.icon className={` ${path==option.path&&'text-primary'}`} />
//                     <span className={`text-[16px] font-medium ${path==option.path&&'text-primary'}`}>{option.name}</span>                         
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             ))}
//           </SidebarMenu>
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter />
//     </Sidebar>
//   )
// }

//----------------- New Bc ---------

"use client";   // ✅ Client Component

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { SideBarOptions } from "@/services/Constants";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/services/supabaseClient";

export function AppSidebar() {
  const path = usePathname();   // ✅ detect active path
  const router = useRouter();

  // 🔑 Logout fn
  const handleLogout = async () => {
    const confirmLogout = confirm("Are you sure you want to logout?"); // simple confirm
    if (confirmLogout) {
      await supabase.auth.signOut();  // clear session
      router.push("/auth");           // redirect to login
    }
  };

  return (
    <Sidebar>
      {/* 🔷 Header */}
      <SidebarHeader className="flex items-center mt-6">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={200}
          height={100}
          className="w-[165px]"
        />
        <Button className="w-full"> 
          <Plus /> <Link href={'/dashboard/create-interview'}> Create New Interview </Link>
        </Button>
      </SidebarHeader>

      {/* 🔷 Main Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SideBarOptions.map((option, index) => (
              <SidebarMenuItem key={index} className="p-2">
                {option.name === "Logout" ? (
                  // ✅ Special case for logout
                  <SidebarMenuButton
                    onClick={handleLogout}
                    className="p-6 hover:bg-red-50"
                  >
                    <option.icon className="text-red-600" />
                    <span className="text-[16px] font-medium text-red-600">
                      Logout
                    </span>
                  </SidebarMenuButton>
                ) : (
                  // ✅ Normal case → navigate
                  <SidebarMenuButton
                    asChild
                    className={`p-6 ${path == option.path && "bg-indigo-100"}`}
                  >
                    <Link href={option.path}>
                      <option.icon
                        className={` ${
                          path == option.path && "text-primary"
                        }`}
                      />
                      <span
                        className={`text-[16px] font-medium ${
                          path == option.path && "text-primary"
                        }`}
                      >
                        {option.name}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
