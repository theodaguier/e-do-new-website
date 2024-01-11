"use client";

import { Activity } from "lucide-react";
import { Nav } from "./nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useState } from "react";
import { cn } from "@/lib/utils";

const DashboardPage = () => {
  return (
    <div className="w-full h-[100vh]">
      <Nav />
    </div>
  );
};

export default DashboardPage;
