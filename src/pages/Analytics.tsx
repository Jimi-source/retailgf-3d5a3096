
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BarChart, LineChart, PieChart } from "recharts";

// Заглушка для графиков, в реальности здесь будут компоненты из recharts
const SimpleBarChart = () => (
  <div className="h-[300px] w-full bg-muted rounded-md flex items-center justify-center">
    <p className="text-muted-foreground">Гистограмма (пример)</p>
  </div>
);

const SimpleLineChart = () => (
  <div className="h-[300px] w-full bg-muted rounded-md flex items-center justify-center">
    <p className="text-muted-foreground">Линейный график (пример)</p>
  </div>
);

const SimplePieChart = () => (
  <div className="h-[300px] w-full bg-muted rounded-md flex items-center justify-center">
    <p className="text-muted-foreground">Круговая диаграмма (пример)</p>
  </div>
);

const Analytics: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Аналитика и отчеты</h1>

      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Обзор</TabsTrigger>
          <TabsTrigger value="receiving">Приемка</TabsTrigger>
          <TabsTrigger value="quantization">Квантование</TabsTrigger>
          <TabsTrigger value="shipping">Отгрузка</TabsTrigger>
          <TabsTrigger value="employees">Сотрудники</TabsTrigger>
          <TabsTrigger value="reports">Отчеты</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Приемка</CardTitle>
                <CardDescription>Последние 30 дней</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">386</div>
                <p className="text-sm text-muted-foreground">паллет принято</p>
                <div className="mt-4 text-sm text-green-600">+12% по сравнению с прошлым месяцем</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Квантование</CardTitle>
                <CardDescription>Последние 30 дней</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4,128</div>
                <p className="text-sm text-muted-foreground">коробок скомплектовано</p>
                <div className="mt-4 text-sm text-green-600">+8% по сравнению с прошлым месяцем</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Отгрузка</CardTitle>
                <CardDescription>Последние 30 дней</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">325</div>
                <p className="text-sm text-muted-foreground">паллет отгружено</p>
                <div className="mt-4 text-sm text-amber-600">-3% по сравнению с прошлым месяцем</div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Общая активность</CardTitle>
              <CardDescription>Количество операций по дням</CardDescription>
            </CardHeader>
            <CardContent>
              <SimpleLineChart />
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Распределение по РЦ</CardTitle>
                <CardDescription>Объем отгрузок по распределительным центрам</CardDescription>
              </CardHeader>
              <CardContent>
                <SimplePieChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Топ SKU</CardTitle>
                <CardDescription>Наиболее частые товары в обработке</CardDescription>
              </CardHeader>
              <CardContent>
                <SimpleBarChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="receiving">
          <Card>
            <CardHeader>
              <CardTitle>Аналитика приемки</CardTitle>
              <CardDescription>Данные о процессе приемки номерных ящиков</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">Среднее время приемки</p>
                  <p className="text-3xl font-bold">2.4 мин</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">Расхождения</p>
                  <p className="text-3xl font-bold">8.2%</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">Пиковая нагрузка</p>
                  <p className="text-3xl font-bold">32 паллет/ч</p>
                </div>
              </div>

              <SimpleBarChart />

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Расхождения по заводам</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Завод</TableHead>
                      <TableHead>Принято паллет</TableHead>
                      <TableHead>С расхождениями</TableHead>
                      <TableHead>% расхождений</TableHead>
                      <TableHead>Недостача (лотки)</TableHead>
                      <TableHead>Излишки (лотки)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Завод №1</TableCell>
                      <TableCell>156</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell>7.7%</TableCell>
                      <TableCell>24</TableCell>
                      <TableCell>8</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Завод №2</TableCell>
                      <TableCell>128</TableCell>
                      <TableCell>14</TableCell>
                      <TableCell>10.9%</TableCell>
                      <TableCell>32</TableCell>
                      <TableCell>4</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quantization">
          <Card>
            <CardHeader>
              <CardTitle>Аналитика квантования</CardTitle>
              <CardDescription>Данные о процессе квантования лотков в коробки</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">Производительность</p>
                  <p className="text-3xl font-bold">132 кор/ч</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">Задания не с первого раза</p>
                  <p className="text-3xl font-bold">4.5%</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">Среднее количество коробок в задании</p>
                  <p className="text-3xl font-bold">14.2</p>
                </div>
              </div>

              <SimpleLineChart />

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Производительность комплектовщиков</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Сотрудник</TableHead>
                      <TableHead>Выполнено заданий</TableHead>
                      <TableHead>Коробок собрано</TableHead>
                      <TableHead>Коробок в час</TableHead>
                      <TableHead>% заданий с первого раза</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Иванов И.И.</TableCell>
                      <TableCell>48</TableCell>
                      <TableCell>642</TableCell>
                      <TableCell>128</TableCell>
                      <TableCell>96.4%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Петров В.А.</TableCell>
                      <TableCell>42</TableCell>
                      <TableCell>588</TableCell>
                      <TableCell>118</TableCell>
                      <TableCell>94.2%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping">
          <Card>
            <CardHeader>
              <CardTitle>Аналитика отгрузки</CardTitle>
              <CardDescription>Данные о процессе отгрузки паллет на РЦ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">Среднее время отгрузки</p>
                  <p className="text-3xl font-bold">8.6 мин</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">% переформирований</p>
                  <p className="text-3xl font-bold">12.8%</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">Среднее кол-во паллет в ТТН</p>
                  <p className="text-3xl font-bold">4.5</p>
                </div>
              </div>

              <SimpleBarChart />

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Распределение отгрузок по РЦ</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>РЦ</TableHead>
                      <TableHead>Количество ТТН</TableHead>
                      <TableHead>Отгружено паллет</TableHead>
                      <TableHead>Отгружено коробок</TableHead>
                      <TableHead>% переформирований</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>РЦ-Москва</TableCell>
                      <TableCell>24</TableCell>
                      <TableCell>112</TableCell>
                      <TableCell>1,344</TableCell>
                      <TableCell>8.4%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>РЦ-Казань</TableCell>
                      <TableCell>18</TableCell>
                      <TableCell>76</TableCell>
                      <TableCell>912</TableCell>
                      <TableCell>15.2%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employees">
          <Card>
            <CardHeader>
              <CardTitle>Аналитика по сотрудникам</CardTitle>
              <CardDescription>Данные о производительности сотрудников</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Сотрудник</TableHead>
                    <TableHead>Роль</TableHead>
                    <TableHead>Принято паллет</TableHead>
                    <TableHead>Собрано коробок</TableHead>
                    <TableHead>Отгружено ТТН</TableHead>
                    <TableHead>Производительность</TableHead>
                    <TableHead>Ошибки</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Иванов И.И.</TableCell>
                    <TableCell>Комплектовщик</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>642</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>128 кор/ч</TableCell>
                    <TableCell>3.6%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Петров В.А.</TableCell>
                    <TableCell>Приемщик</TableCell>
                    <TableCell>152</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>21 пал/ч</TableCell>
                    <TableCell>2.1%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Сидоров А.А.</TableCell>
                    <TableCell>Бригадир</TableCell>
                    <TableCell>48</TableCell>
                    <TableCell>124</TableCell>
                    <TableCell>14</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>1.2%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Производительность по времени суток</h3>
                  <SimpleBarChart />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Распределение рабочей нагрузки</h3>
                  <SimplePieChart />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Доступные отчеты</CardTitle>
                <CardDescription>Сформированные отчеты для экспорта</CardDescription>
              </div>
              <Button>Создать новый отчет</Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Название отчета</TableHead>
                    <TableHead>Тип</TableHead>
                    <TableHead>Период</TableHead>
                    <TableHead>Создан</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Сводный отчет за март 2025</TableCell>
                    <TableCell>Комбинированный</TableCell>
                    <TableCell>01.03.2025 - 31.03.2025</TableCell>
                    <TableCell>02.04.2025</TableCell>
                    <TableCell>Готов</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Excel</Button>
                        <Button size="sm" variant="outline">PDF</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Анализ расхождений за Q1 2025</TableCell>
                    <TableCell>Приемка</TableCell>
                    <TableCell>01.01.2025 - 31.03.2025</TableCell>
                    <TableCell>05.04.2025</TableCell>
                    <TableCell>Готов</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Excel</Button>
                        <Button size="sm" variant="outline">PDF</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Производительность смены Б</TableCell>
                    <TableCell>Сотрудники</TableCell>
                    <TableCell>15.03.2025 - 09.04.2025</TableCell>
                    <TableCell>09.04.2025</TableCell>
                    <TableCell>В процессе</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline" disabled>В обработке</Button>
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

export default Analytics;
