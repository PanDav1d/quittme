import {
  TrendingUp,
  Users,
  Receipt,
  Euro,
  Calendar,
  Download,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const monthlyStats = [
  { month: "Jan", transactions: 1240, revenue: 18500 },
  { month: "Feb", transactions: 1380, revenue: 21200 },
  { month: "Mar", transactions: 1520, revenue: 23800 },
  { month: "Apr", transactions: 1680, revenue: 26400 },
  { month: "Mai", transactions: 1850, revenue: 29100 },
  { month: "Jun", transactions: 1920, revenue: 31500 },
];

const topCategories = [
  { category: "Lebensmittel", percentage: 45, amount: "€14.175" },
  { category: "Getränke", percentage: 25, amount: "€7.875" },
  { category: "Haushalt", percentage: 15, amount: "€4.725" },
  { category: "Kosmetik", percentage: 10, amount: "€3.150" },
  { category: "Sonstiges", percentage: 5, amount: "€1.575" },
];

export function AnalyticsSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold mb-2">Analytics & Berichte</h2>
          <p className="text-muted-foreground">
            Detaillierte Einblicke in deine QuittMe-Performance
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Download className="w-4 h-4 mr-2" />
          Report exportieren
        </Button>
      </div>

      {/* Time Period Selector */}
      <div className="flex gap-2 animate-slide-in-up delay-100">
        <Button variant="outline" size="sm">
          <Calendar className="w-4 h-4 mr-2" />
          Heute
        </Button>
        <Button variant="outline" size="sm">
          Diese Woche
        </Button>
        <Button size="sm" className="bg-green-600 hover:bg-green-700">
          Dieser Monat
        </Button>
        <Button variant="outline" size="sm">
          Dieses Jahr
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: "Gesamt-Transaktionen",
            value: "1.920",
            change: "+12.5%",
            icon: Receipt,
            color: "text-blue-600",
          },
          {
            title: "Gesamt-Umsatz",
            value: "€31.500",
            change: "+8.3%",
            icon: Euro,
            color: "text-green-600",
          },
          {
            title: "QuittMe-Nutzer",
            value: "847",
            change: "+23.1%",
            icon: Users,
            color: "text-purple-600",
          },
          {
            title: "Conversion Rate",
            value: "44.1%",
            change: "+5.2%",
            icon: TrendingUp,
            color: "text-orange-600",
          },
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card
              key={metric.title}
              className="hover:shadow-lg transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <Icon className={`w-4 h-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="flex items-center gap-1 text-sm">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="font-medium text-green-600">
                    {metric.change}
                  </span>
                  <span className="text-muted-foreground">
                    vs. letzter Monat
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trend */}
        <Card className="animate-slide-in-up delay-600">
          <CardHeader>
            <CardTitle>Monatlicher Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyStats.map((stat, index) => (
                <div
                  key={stat.month}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 text-center">
                      <span className="font-medium">{stat.month}</span>
                    </div>
                    <div>
                      <p className="font-semibold">
                        {stat.transactions} Transaktionen
                      </p>
                      <p className="text-sm text-muted-foreground">
                        €{stat.revenue.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(stat.transactions / 2000) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Categories */}
        <Card className="animate-slide-in-up delay-700">
          <CardHeader>
            <CardTitle>Top Kategorien</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCategories.map((category, index) => (
                <div
                  key={category.category}
                  className="flex items-center justify-between animate-fade-in"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: `hsl(${120 + index * 30}, 70%, 50%)`,
                      }}
                    />
                    <span className="font-medium">{category.category}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold">{category.amount}</p>
                      <p className="text-sm text-muted-foreground">
                        {category.percentage}%
                      </p>
                    </div>
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Insights */}
      <Card className="animate-fade-in-up delay-800">
        <CardHeader>
          <CardTitle>Performance Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-950/20">
              <Badge className="mb-3 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                ✓ Sehr gut
              </Badge>
              <h3 className="font-semibold mb-2">API-Performance</h3>
              <p className="text-2xl font-bold text-green-600 mb-1">99.8%</p>
              <p className="text-sm text-muted-foreground">Verfügbarkeit</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20">
              <Badge className="mb-3 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                ↗ Steigend
              </Badge>
              <h3 className="font-semibold mb-2">Nutzer-Adoption</h3>
              <p className="text-2xl font-bold text-blue-600 mb-1">44.1%</p>
              <p className="text-sm text-muted-foreground">deiner Kunden</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20">
              <Badge className="mb-3 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                ⚡ Schnell
              </Badge>
              <h3 className="font-semibold mb-2">Ø Verarbeitungszeit</h3>
              <p className="text-2xl font-bold text-purple-600 mb-1">1.2s</p>
              <p className="text-sm text-muted-foreground">pro Transaktion</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
