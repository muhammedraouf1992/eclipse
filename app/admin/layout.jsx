import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import { auth, signIn } from "@/auth";

const layout = async ({ children }) => {
  const session = await auth();

  if (!session) {
    await signIn({ redirectTo: "/admin" });
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="container mx-auto">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default layout;
