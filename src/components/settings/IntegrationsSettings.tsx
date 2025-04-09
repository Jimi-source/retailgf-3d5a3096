
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const IntegrationsSettings: React.FC = () => {
  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Интеграция с 1С</CardTitle>
          <CardDescription>Настройка взаимодействия с системой 1С</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="1cUrl">URL сервера 1С</Label>
            <Input id="1cUrl" defaultValue="https://1c-server.company.local" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="1cAuth">Ключ авторизации</Label>
            <Input id="1cAuth" type="password" defaultValue="••••••••••••••••" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="1cSyncInterval">Интервал синхронизации (мин)</Label>
            <Input id="1cSyncInterval" type="number" defaultValue="15" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="1cAutoSync" defaultChecked />
            <Label htmlFor="1cAutoSync">Автоматическая синхронизация</Label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Проверить соединение</Button>
          <Button>Сохранить</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Интеграция с WMS</CardTitle>
          <CardDescription>Настройки подключения к системе управления складом</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="wmsUrl">URL сервера WMS</Label>
            <Input id="wmsUrl" defaultValue="https://wms.company.local/api" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wmsKey">API ключ</Label>
            <Input id="wmsKey" type="password" defaultValue="••••••••••••••••" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wmsTimeout">Таймаут соединения (сек)</Label>
            <Input id="wmsTimeout" type="number" defaultValue="30" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wmsWebhook">Webhook для уведомлений</Label>
            <Input id="wmsWebhook" defaultValue="https://warehouse-logistics.ru/api/wms-webhook" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Проверить соединение</Button>
          <Button>Сохранить</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default IntegrationsSettings;
