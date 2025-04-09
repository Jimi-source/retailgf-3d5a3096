
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Shipping: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Отгрузка паллет на РЦ</h1>

      <Tabs defaultValue="documents">
        <TabsList className="mb-4">
          <TabsTrigger value="documents">Документы для отгрузки</TabsTrigger>
          <TabsTrigger value="pallets">Готовые паллеты</TabsTrigger>
          <TabsTrigger value="repalletizing">Переформирование</TabsTrigger>
          <TabsTrigger value="history">История отгрузок</TabsTrigger>
        </TabsList>

        <TabsContent value="documents">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Товарно-транспортные накладные</CardTitle>
                <CardDescription>Список ТТН для отгрузки</CardDescription>
              </div>
              <Button>Импортировать ТТН из 1С</Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>№ ТТН</TableHead>
                    <TableHead>РЦ</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Паллеты</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>TTN-45678</TableCell>
                    <TableCell>РЦ-Москва</TableCell>
                    <TableCell>09.04.2025</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell><Badge>Готова к отгрузке</Badge></TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Печать</Button>
                        <Button size="sm">Отгрузить</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>TTN-45679</TableCell>
                    <TableCell>РЦ-Казань</TableCell>
                    <TableCell>09.04.2025</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell><Badge variant="outline">В подготовке</Badge></TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Печать</Button>
                        <Button size="sm" disabled>Отгрузить</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pallets">
          <Card>
            <CardHeader>
              <CardTitle>Паллеты готовые к отгрузке</CardTitle>
              <CardDescription>Список паллет, доступных для отгрузки на РЦ</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>№ паллеты</TableHead>
                    <TableHead>РЦ</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Коробок</TableHead>
                    <TableHead>Ячейка</TableHead>
                    <TableHead>ТТН</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>PL-5001</TableCell>
                    <TableCell>РЦ-Москва</TableCell>
                    <TableCell>SKU-7845</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>E4-08</TableCell>
                    <TableCell>TTN-45678</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Печать листа</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>PL-5002</TableCell>
                    <TableCell>РЦ-Москва</TableCell>
                    <TableCell>SKU-3421</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>E4-09</TableCell>
                    <TableCell>TTN-45678</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Печать листа</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="repalletizing">
          <Card>
            <CardHeader>
              <CardTitle>Переформирование паллет</CardTitle>
              <CardDescription>Управление переформированием паллет при несовместимости с ТС</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Выберите паллеты для переформирования</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">
                          <Input type="checkbox" className="w-4 h-4" />
                        </TableHead>
                        <TableHead>№ паллеты</TableHead>
                        <TableHead>РЦ</TableHead>
                        <TableHead>SKU</TableHead>
                        <TableHead>Коробок</TableHead>
                        <TableHead>ТТН</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Input type="checkbox" className="w-4 h-4" />
                        </TableCell>
                        <TableCell>PL-5003</TableCell>
                        <TableCell>РЦ-Казань</TableCell>
                        <TableCell>SKU-7845</TableCell>
                        <TableCell>18</TableCell>
                        <TableCell>TTN-45679</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Input type="checkbox" className="w-4 h-4" />
                        </TableCell>
                        <TableCell>PL-5004</TableCell>
                        <TableCell>РЦ-Казань</TableCell>
                        <TableCell>SKU-3421</TableCell>
                        <TableCell>12</TableCell>
                        <TableCell>TTN-45679</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Переформировать выбранные паллеты</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Переформирование паллет</DialogTitle>
                      <DialogDescription>
                        Укажите новое распределение коробок по паллетам
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="newPallets">Количество новых паллет</Label>
                        <Input id="newPallets" type="number" defaultValue="3" />
                      </div>
                      <div className="space-y-2">
                        <Label>Распределение коробок</Label>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Label className="w-24">Паллет 1:</Label>
                            <Input type="number" defaultValue="10" className="w-24" />
                            <span className="text-sm text-muted-foreground">коробок</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Label className="w-24">Паллет 2:</Label>
                            <Input type="number" defaultValue="10" className="w-24" />
                            <span className="text-sm text-muted-foreground">коробок</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Label className="w-24">Паллет 3:</Label>
                            <Input type="number" defaultValue="10" className="w-24" />
                            <span className="text-sm text-muted-foreground">коробок</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <Button type="submit">Подтвердить переформирование</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>История отгрузок</CardTitle>
              <CardDescription>Ранее выполненные отгрузки</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>№ ТТН</TableHead>
                    <TableHead>РЦ</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Паллеты</TableHead>
                    <TableHead>Номер ТС</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>TTN-45670</TableCell>
                    <TableCell>РЦ-Москва</TableCell>
                    <TableCell>08.04.2025</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>А123БВ777</TableCell>
                    <TableCell><Badge variant="outline" className="bg-green-50">Отгружено</Badge></TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Отчет</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>TTN-45671</TableCell>
                    <TableCell>РЦ-Казань</TableCell>
                    <TableCell>08.04.2025</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>В456АС116</TableCell>
                    <TableCell><Badge variant="outline" className="bg-green-50">Отгружено</Badge></TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Отчет</Button>
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

export default Shipping;
