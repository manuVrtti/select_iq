"use client";   // ✅ mark as Client Component

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { SideBarOptions } from "@/services/Constants"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppSidebar() {
  const path = usePathname();   // ✅ Now works safely

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center mt-6">
        <Image 
          src={"/logo.png"} 
          alt="logo" 
          width={200} 
          height={100}
          className="w-[165px]" 
        />       
        <Button className="w-full"> 
          <Plus /> Create New Interview 
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SideBarOptions.map((option, index) => (
              <SidebarMenuItem 
                key={index} 
                className='p-2' // ✅ highlight active path
              >
                <SidebarMenuButton asChild className={`p-6 ${path==option.path&&'bg-indigo-100'} `}>
                  <Link href={option.path}>
                    <option.icon className={` ${path==option.path&&'text-primary'}`} />
                    <span className={`text-[16px] font-medium ${path==option.path&&'text-primary'}`}>{option.name}</span>                         
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
