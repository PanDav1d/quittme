import {
  Users,
  Receipt,
  CheckCircle,
  Zap,
  Palette,
  MessageSquare,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const todayStats = [
  {
    title: "Kunden heute",
    value: "289",
    subtitle: "Gesamte Kundschaft",
    icon: Users,
    color: "text-gray-600",
  },
  {
    title: "QuittMe genutzt",
    value: "127",
    subtitle: "44% deiner Kunden",
    change: "+8 vs. gestern",
    icon: Receipt,
    color: "text-green-600",
    percentage: 44,
  },
  {
    title: "Digitale Belege",
    value: "127",
    subtitle: "0 Papier-Belege",
    icon: Receipt,
    color: "text-blue-600",
  },
  {
    title: "System Status",
    value: "Online",
    subtitle: "Alle Systeme laufen",
    icon: CheckCircle,
    color: "text-green-600",
  },
];

const weeklyData = [
  { day: "Mo", total: 245, quittme: 89 },
  { day: "Di", total: 267, quittme: 98 },
  { day: "Mi", total: 298, quittme: 134 },
  { day: "Do", total: 234, quittme: 95 },
  { day: "Fr", total: 312, quittme: 142 },
  { day: "Sa", total: 398, quittme: 178 },
  { day: "So", total: 289, quittme: 127 },
];

const recentActivity = [
  {
    message: "Kunde hat QuittMe zum ersten Mal genutzt",
    time: "vor 3 Min",
    icon: Users,
    color: "text-blue-600",
  },
  {
    message: "Digitaler Beleg erfolgreich übertragen",
    time: "vor 5 Min",
    icon: Receipt,
    color: "text-green-600",
  },
  {
    message: "Neuer Kunde registriert sich für QuittMe",
    time: "vor 8 Min",
    icon: Users,
    color: "text-blue-600",
  },
  {
    message: "Kassensystem-Verbindung geprüft",
    time: "vor 12 Min",
    icon: CheckCircle,
    color: "text-gray-600",
  },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-2">
          Willkommen zurück, REWE Markt! 👋
        </h2>
        <p className="text-muted-foreground">
          Hier siehst du wie viele deiner Kunden QuittMe nutzen und ob alle
          Systeme laufen.
        </p>
      </div>

      {/* Today's Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {todayStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.title}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-2">
                  {stat.subtitle}
                </div>
                {stat.change && (
                  <div className="text-sm font-medium text-green-600 mb-2">
                    {stat.change}
                  </div>
                )}
                {stat.percentage && (
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Overview */}
        <Card className="animate-slide-in-up delay-400">
          <CardHeader>
            <CardTitle>Diese Woche</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day, index) => {
                const percentage = Math.round((day.quittme / day.total) * 100);
                return (
                  <div
                    key={day.day}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300 animate-fade-in"
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 text-center font-medium">
                        {day.day}
                      </div>
                      <div>
                        <p className="font-semibold">{day.total} Kunden</p>
                        <p className="text-sm text-green-600">
                          {day.quittme} mit QuittMe ({percentage}%)
                        </p>
                      </div>
                    </div>
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="animate-slide-in-up delay-500">
          <CardHeader>
            <CardTitle>Schnellaktionen</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              className="w-full justify-start bg-purple-600 hover:bg-purple-700"
              size="lg"
            >
              <Palette className="w-4 h-4 mr-2" />
              Beleg-Design anpassen
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              size="lg"
            >
              <Zap className="w-4 h-4 mr-2" />
              System-Status prüfen
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              size="lg"
            >
              <Receipt className="w-4 h-4 mr-2" />
              Test-Beleg senden
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              size="lg"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Integration-Hilfe
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* System Health */}
      <Card className="animate-fade-in-up delay-600">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            System-Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Kassensystem", status: "Online", color: "bg-green-500" },
              { name: "QuittMe API", status: "Online", color: "bg-green-500" },
              {
                name: "Beleg-Übertragung",
                status: "Online",
                color: "bg-green-500",
              },
              { name: "Internet", status: "Online", color: "bg-green-500" },
            ].map((system, index) => (
              <div
                key={system.name}
                className="flex items-center gap-3 p-3 rounded-lg bg-green-50/50 dark:bg-green-950/20 animate-fade-in"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <div
                  className={`w-3 h-3 rounded-full ${system.color} animate-pulse`}
                />
                <div>
                  <p className="font-medium text-sm">{system.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {system.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="animate-fade-in-up delay-800">
        <CardHeader>
          <CardTitle>Letzte Aktivität</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300 animate-slide-in-right"
                  style={{ animationDelay: `${900 + index * 100}ms` }}
                >
                  <div
                    className={`w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center`}
                  >
                    <Icon className={`w-4 h-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
