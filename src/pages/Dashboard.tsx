import { useState } from "react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { SidebarNav, dashboardNavItems } from "@/components/SidebarNav";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Outlet } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PanelLeft } from "lucide-react";

const Dashboard = () => {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  if (isMobile) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
               <div className="p-4">
                 <h2 className="mb-4 text-lg font-semibold tracking-tight">
                    Finance Dashboard
                  </h2>
                  <Separator className="mb-4" />
                  <SidebarNav items={dashboardNavItems} onLinkClick={() => setIsSheetOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
           <h1 className="text-lg font-semibold">Finance App</h1>
        </header>
        <main className="flex-1 p-4 bg-background">
          <Outlet />
        </main>
        <MadeWithDyad />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <ResizablePanelGroup direction="horizontal" className="min-h-[calc(100vh-4rem)] rounded-lg border">
          <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
            <div className="flex h-full flex-col p-6">
              <h2 className="mb-4 text-lg font-semibold tracking-tight">
                Finance Dashboard
              </h2>
              <Separator className="mb-4" />
              <SidebarNav items={dashboardNavItems} />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={80}>
            <div className="flex h-full flex-col p-6">
              <Outlet />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Dashboard;