
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralSettings from "@/components/settings/GeneralSettings";
import IntegrationsSettings from "@/components/settings/IntegrationsSettings";
import PrintingSettings from "@/components/settings/PrintingSettings";
import UsersSettings from "@/components/settings/UsersSettings";
import TerminalsSettings from "@/components/settings/TerminalsSettings";

const Settings: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Настройки системы</h1>

      <Tabs defaultValue="general">
        <TabsList className="mb-4">
          <TabsTrigger value="general">Общие</TabsTrigger>
          <TabsTrigger value="integrations">Интеграции</TabsTrigger>
          <TabsTrigger value="printing">Печать</TabsTrigger>
          <TabsTrigger value="users">Пользователи</TabsTrigger>
          <TabsTrigger value="terminals">Терминалы</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <GeneralSettings />
        </TabsContent>

        <TabsContent value="integrations">
          <IntegrationsSettings />
        </TabsContent>

        <TabsContent value="printing">
          <PrintingSettings />
        </TabsContent>

        <TabsContent value="users">
          <UsersSettings />
        </TabsContent>

        <TabsContent value="terminals">
          <TerminalsSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
