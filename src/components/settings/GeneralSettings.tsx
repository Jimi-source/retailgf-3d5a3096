
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const GeneralSettings: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Основные настройки</CardTitle>
        <CardDescription>Общие параметры работы системы</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="companyName">Название компании</Label>
          <Input id="companyName" defaultValue="ООО Складская Логистика" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="warehouseAddress">Адрес склада</Label>
          <Input id="warehouseAddress" defaultValue="г. Москва, ул. Складская, д. 123" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contactEmail">Контактный email</Label>
          <Input id="contactEmail" type="email" defaultValue="support@warehouse-logistics.ru" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startShift">Начало смены</Label>
            <Input id="startShift" type="time" defaultValue="08:00" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endShift">Конец смены</Label>
            <Input id="endShift" type="time" defaultValue="20:00" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="offlineMode" defaultChecked />
          <Label htmlFor="offlineMode">Разрешить работу в оффлайн режиме</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="autoRefresh" defaultChecked />
          <Label htmlFor="autoRefresh">Автоматическое обновление данных</Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Сохранить изменения</Button>
      </CardFooter>
    </Card>
  );
};

export default GeneralSettings;
