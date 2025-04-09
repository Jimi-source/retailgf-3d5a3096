
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

const UsersSettings: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Управление пользователями</CardTitle>
          <CardDescription>Настройка прав доступа и ролей</CardDescription>
        </div>
        <Button>Добавить пользователя</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Имя</TableHead>
              <TableHead>Логин</TableHead>
              <TableHead>Роль</TableHead>
              <TableHead>Последний вход</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Иванов Иван Иванович</TableCell>
              <TableCell>ivanov</TableCell>
              <TableCell>Администратор</TableCell>
              <TableCell>09.04.2025 08:45</TableCell>
              <TableCell>Активен</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Изменить</Button>
                  <Button size="sm" variant="outline">Блокировать</Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Петров Петр Петрович</TableCell>
              <TableCell>petrov</TableCell>
              <TableCell>Бригадир</TableCell>
              <TableCell>09.04.2025 09:15</TableCell>
              <TableCell>Активен</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Изменить</Button>
                  <Button size="sm" variant="outline">Блокировать</Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Сидоров Александр Александрович</TableCell>
              <TableCell>sidorov</TableCell>
              <TableCell>Оператор</TableCell>
              <TableCell>08.04.2025 18:30</TableCell>
              <TableCell>Активен</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Изменить</Button>
                  <Button size="sm" variant="outline">Блокировать</Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UsersSettings;
