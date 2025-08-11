import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { SidebarNav, dashboardNavItems } from "@/components/SidebarNav";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Outlet } from "react-router-dom"; // Used for nested routes

const Dashboard = () => {
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
              <Outlet /> {/* This is where nested routes will render */}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Dashboard;