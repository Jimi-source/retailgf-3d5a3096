
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Receiving: React.FC = () => {
  const handleScanPallet = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Паллета отсканирована",
      description: "Начата приемка паллеты P-10045",
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Приемка номерных ящиков</h1>

      <Tabs defaultValue="active">
        <TabsList className="mb-4">
          <TabsTrigger value="active">Активные приемки</TabsTrigger>
          <TabsTrigger value="scan">Сканировать паллету</TabsTrigger>
          <TabsTrigger value="history">История приемок</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Текущие приемки</CardTitle>
              <CardDescription>Список паллет в процессе приемки</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>№ паллеты</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Количество лотков</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>P-10045</TableCell>
                    <TableCell>SKU-7845</TableCell>
                    <TableCell>24</TableCell>
                    <TableCell>В процессе</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Продолжить</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>P-10046</TableCell>
                    <TableCell>SKU-3421</TableCell>
                    <TableCell>36</TableCell>
                    <TableCell>Расхождение</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Продолжить</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scan">
          <Card>
            <CardHeader>
              <CardTitle>Сканирование паллеты</CardTitle>
              <CardDescription>Отсканируйте штрих-код паллеты для начала приемки</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleScanPallet} className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="palletCode">Штрих-код паллеты</Label>
                  <Input
                    id="palletCode"
                    placeholder="Отсканируйте или введите код паллеты"
                    autoFocus
                  />
                </div>
                <Button type="submit">Начать приемку</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>История приемок</CardTitle>
              <CardDescription>Ранее выполненные приемки паллет</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>№ паллеты</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>План лотков</TableHead>
                    <TableHead>Факт лотков</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Сотрудник</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>P-10035</TableCell>
                    <TableCell>SKU-7845</TableCell>
                    <TableCell>24</TableCell>
                    <TableCell>24</TableCell>
                    <TableCell>09.04.2025 10:15</TableCell>
                    <TableCell>Петров В.А.</TableCell>
                    <TableCell>Завершена</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>P-10036</TableCell>
                    <TableCell>SKU-3421</TableCell>
                    <TableCell>36</TableCell>
                    <TableCell>34</TableCell>
                    <TableCell>09.04.2025 09:30</TableCell>
                    <TableCell>Иванов И.И.</TableCell>
                    <TableCell>Расхождение</TableCell>
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

export default Receiving;
