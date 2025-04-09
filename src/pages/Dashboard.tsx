
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Boxes, TruckIcon, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const moduleCards = [
  {
    title: "Приемка номерных ящиков",
    description: "Управление процессом приемки номерных ящиков со склада производителя",
    icon: <Package className="h-8 w-8" />,
    path: "/receiving",
    color: "bg-blue-100 dark:bg-blue-900"
  },
  {
    title: "Квантование лотков",
    description: "Управление процессом квантования лотков в коробки для отгрузки",
    icon: <Boxes className="h-8 w-8" />,
    path: "/quantization",
    color: "bg-green-100 dark:bg-green-900"
  },
  {
    title: "Отгрузка паллет",
    description: "Управление процессом отгрузки паллет на распределительные центры",
    icon: <TruckIcon className="h-8 w-8" />,
    path: "/shipping",
    color: "bg-orange-100 dark:bg-orange-900"
  }
];

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Складская логистика для ритейла</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {moduleCards.map((card) => (
          <Card key={card.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className={`rounded-full p-3 w-fit ${card.color}`}>
                {card.icon}
              </div>
              <CardTitle className="mt-4">{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link to={card.path} className="w-full">
                <Button className="w-full">Перейти</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center gap-4">
          <AlertCircle className="h-6 w-6 text-amber-500" />
          <div>
            <CardTitle>Статистика системы</CardTitle>
            <CardDescription>Обзор текущего состояния складских операций</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <p className="text-muted-foreground text-sm">Паллеты на приемке</p>
              <p className="text-3xl font-bold">12</p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <p className="text-muted-foreground text-sm">Активные задания на квантование</p>
              <p className="text-3xl font-bold">5</p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <p className="text-muted-foreground text-sm">Паллеты готовые к отгрузке</p>
              <p className="text-3xl font-bold">8</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Последние активности</CardTitle>
          <CardDescription>Недавние действия в системе</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b pb-2 last:border-0">
                <p className="font-medium">Паллет P-{1000 + i} принят на склад</p>
                <p className="text-sm text-muted-foreground">10:3{i} • Оператор Иванов И.</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Link to="/analytics">
            <Button variant="outline">Посмотреть все активности</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dashboard;
