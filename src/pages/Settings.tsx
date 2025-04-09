
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

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
        </TabsContent>

        <TabsContent value="integrations">
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
        </TabsContent>

        <TabsContent value="printing">
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
        </TabsContent>

        <TabsContent value="users">
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
        </TabsContent>

        <TabsContent value="terminals">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table
      ref={ref}
      className="w-full caption-bottom text-sm"
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className="[&_tr]:border-b" {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className="[&_tr:last-child]:border-0"
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className="p-4 align-middle [&:has([role=checkbox])]:pr-0"
    {...props}
  />
));
TableCell.displayName = "TableCell";

export default Settings;
