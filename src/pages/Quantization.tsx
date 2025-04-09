
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Quantization: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Квантование лотков в коробки</h1>

      <Tabs defaultValue="tasks">
        <TabsList className="mb-4">
          <TabsTrigger value="tasks">Задания</TabsTrigger>
          <TabsTrigger value="create">Создать задание</TabsTrigger>
          <TabsTrigger value="verification">Проверка бригадиром</TabsTrigger>
          <TabsTrigger value="history">История</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Активные задания</CardTitle>
              <CardDescription>Задания на квантование лотков в коробки</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>№ задания</TableHead>
                    <TableHead>РЦ</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Коробок</TableHead>
                    <TableHead>Лотков в коробке</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Q-2301</TableCell>
                    <TableCell>РЦ-Москва</TableCell>
                    <TableCell>SKU-7845</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell><Badge>В работе</Badge></TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Детали</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Q-2302</TableCell>
                    <TableCell>РЦ-Казань</TableCell>
                    <TableCell>SKU-3421</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell><Badge variant="outline">Ожидает</Badge></TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Начать</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Создание задания на квантование</CardTitle>
              <CardDescription>Настройте параметры нового задания</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dc">Распределительный центр</Label>
                    <Input id="dc" placeholder="Выберите РЦ" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU</Label>
                    <Input id="sku" placeholder="Введите или выберите SKU" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="boxes">Количество коробок</Label>
                    <Input id="boxes" type="number" placeholder="Введите количество" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lotsPerBox">Лотков в коробке</Label>
                    <Input id="lotsPerBox" type="number" placeholder="Введите количество" />
                  </div>
                </div>

                <div className="pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Проверить наличие и создать задание</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Проверка доступности</DialogTitle>
                        <DialogDescription>
                          Для создания задания требуется следующее:
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <div className="flex justify-between items-center py-2">
                          <span>Требуется лотков:</span>
                          <span className="font-medium">48</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span>Доступно лотков:</span>
                          <span className="font-medium text-green-600">64</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span>Доступные ячейки:</span>
                          <span className="font-medium">A1-04, B3-11</span>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button>Создать задание</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verification">
          <Card>
            <CardHeader>
              <CardTitle>Проверка результатов квантования</CardTitle>
              <CardDescription>Задания, требующие проверки бригадиром</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>№ задания</TableHead>
                    <TableHead>РЦ</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Коробок</TableHead>
                    <TableHead>Паллеты</TableHead>
                    <TableHead>Комплектовщик</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Q-2299</TableCell>
                    <TableCell>РЦ-Москва</TableCell>
                    <TableCell>SKU-7845</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>Сидоров А.А.</TableCell>
                    <TableCell>
                      <Button size="sm">Проверить</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Q-2300</TableCell>
                    <TableCell>РЦ-Казань</TableCell>
                    <TableCell>SKU-3421</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>Петров В.А.</TableCell>
                    <TableCell>
                      <Button size="sm">Проверить</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>История квантования</CardTitle>
              <CardDescription>Ранее выполненные задания</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>№ задания</TableHead>
                    <TableHead>РЦ</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Коробок</TableHead>
                    <TableHead>Паллеты</TableHead>
                    <TableHead>Дата завершения</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Q-2295</TableCell>
                    <TableCell>РЦ-Москва</TableCell>
                    <TableCell>SKU-7845</TableCell>
                    <TableCell>24</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>09.04.2025 10:15</TableCell>
                    <TableCell><Badge variant="outline" className="bg-green-50">Завершено</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Q-2296</TableCell>
                    <TableCell>РЦ-Казань</TableCell>
                    <TableCell>SKU-3421</TableCell>
                    <TableCell>18</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>09.04.2025 09:30</TableCell>
                    <TableCell><Badge variant="outline" className="bg-green-50">Завершено</Badge></TableCell>
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

export default Quantization;
