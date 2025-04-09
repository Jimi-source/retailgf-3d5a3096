
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const PrintingSettings: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Настройки печати</CardTitle>
        <CardDescription>Управление параметрами печати документов</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="defaultPrinter">Принтер по умолчанию</Label>
          <Input id="defaultPrinter" defaultValue="HP LaserJet Pro M404dn" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="labelPrinter">Принтер для этикеток</Label>
          <Input id="labelPrinter" defaultValue="Zebra ZT411" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="paperSize">Размер бумаги для документов</Label>
          <Input id="paperSize" defaultValue="A4" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="labelSize">Размер этикеток</Label>
          <Input id="labelSize" defaultValue="100x150 мм" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="companyLogo">Логотип компании</Label>
          <Input id="companyLogo" type="file" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="footerText">Текст в подвале документов</Label>
          <Textarea id="footerText" rows={3} defaultValue="ООО Складская Логистика © 2025. Все права защищены." />
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="autoPrint" defaultChecked />
          <Label htmlFor="autoPrint">Автоматическая печать при завершении</Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Сохранить изменения</Button>
      </CardFooter>
    </Card>
  );
};

export default PrintingSettings;
