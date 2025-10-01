'use client'

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@workspace/ui/components/sidebar";
import { CalendarPlus, Home, Users } from "lucide-react";

export function AppSidebar() {
  const { open } = useSidebar()

  const items = [
    { title: 'Home', url: '/', icon: Home },
    { title: 'Professionais', url: '/professionals', icon: Users },
    { title: 'Agendamentos', url: '/bookings', icon: CalendarPlus },
  ]
  const sidebarAlignment = !open ? 'items-center' : 'items-left'

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent className={sidebarAlignment}>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        {/* <SidebarGroup /> */}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}