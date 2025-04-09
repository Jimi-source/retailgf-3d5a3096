
import React from "react";
import { SidebarProvider, Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { 
  Package, 
  Boxes, 
  TruckIcon, 
  BarChart, 
  Settings, 
  Home 
} from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

const baseUrl = "https://magnit--wms.lovable.app";

const sidebarItems = [
  {
    title: "Главная",
    icon: <Home className="w-5 h-5" />,
    path: `${baseUrl}/`
  },
  {
    title: "Приемка",
    icon: <Package className="w-5 h-5" />,
    path: `${baseUrl}/receiving`
  },
  {
    title: "Квантование",
    icon: <Boxes className="w-5 h-5" />,
    path: `${baseUrl}/quantization`
  },
  {
    title: "Отгрузка",
    icon: <TruckIcon className="w-5 h-5" />,
    path: `${baseUrl}/shipping`
  },
  {
    title: "Аналитика",
    icon: <BarChart className="w-5 h-5" />,
    path: `${baseUrl}/analytics`
  },
  {
    title: "Настройки",
    icon: <Settings className="w-5 h-5" />,
    path: `${baseUrl}/settings`
  }
];

const MainLayout: React.FC = () => {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col md:flex-row bg-background w-full">
        <Sidebar className="md:w-64 flex-shrink-0">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              WMS Система
            </h2>
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <a key={item.path} href={item.path}>
                  <Button
                    variant={location.pathname === item.path.replace(baseUrl, "") ? "default" : "ghost"}
                    size="sm"
                    className="w-full justify-start"
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </Sidebar>
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
        <Toaster />
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
