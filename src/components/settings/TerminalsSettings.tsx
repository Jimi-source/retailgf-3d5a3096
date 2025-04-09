
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";

const TerminalsSettings: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Управление терминалами</CardTitle>
          <CardDescription>Настройка терминалов сбора данных (ТСД)</CardDescription>
        </div>
        <Button>Добавить терминал</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Модель</TableHead>
              <TableHead>Серийный номер</TableHead>
              <TableHead>Зона</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Последняя синхронизация</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>TSD-001</TableCell>
              <TableCell>Zebra TC57</TableCell>
              <TableCell>ZB123456789</TableCell>
              <TableCell>Приемка</TableCell>
              <TableCell>Онлайн</TableCell>
              <TableCell>09.04.2025 10:15</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Настройки</Button>
                  <Button size="sm" variant="outline">Перезагрузить</Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>TSD-002</TableCell>
              <TableCell>Honeywell CK65</TableCell>
              <TableCell>HW987654321</TableCell>
              <TableCell>Квантование</TableCell>
              <TableCell>Онлайн</TableCell>
              <TableCell>09.04.2025 10:12</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Настройки</Button>
                  <Button size="sm" variant="outline">Перезагрузить</Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>TSD-003</TableCell>
              <TableCell>Datalogic Skorpio X5</TableCell>
              <TableCell>DL123987456</TableCell>
              <TableCell>Отгрузка</TableCell>
              <TableCell>Оффлайн</TableCell>
              <TableCell>08.04.2025 18:45</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Настройки</Button>
                  <Button size="sm" variant="outline">Перезагрузить</Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TerminalsSettings;
