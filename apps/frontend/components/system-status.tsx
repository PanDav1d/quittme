import {
  CheckCircle,
  AlertTriangle,
  Server,
  Wifi,
  Database,
  Activity,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const systemComponents = [
  {
    name: "Kassensystem",
    status: "online",
    description: "Verbindung zu deinem SAP Retail System",
    responseTime: "12ms",
    icon: Database,
  },
  {
    name: "QuittMe API",
    status: "online",
    description: "Schnittstelle für Belegübertragung",
    responseTime: "45ms",
    icon: Server,
  },
  {
    name: "Internet-Verbindung",
    status: "online",
    description: "Netzwerk und Bandbreite",
    responseTime: "8ms",
    icon: Wifi,
  },
  {
    name: "Beleg-Übertragung",
    status: "warning",
    description: "Digitale Belegverarbeitung",
    responseTime: "156ms",
    icon: Activity,
  },
];

const recentEvents = [
  {
    type: "info",
    message: "Kassensystem erfolgreich verbunden",
    time: "vor 2h",
  },
  {
    type: "warning",
    message: "Langsamere Beleg-Übertragung erkannt",
    time: "vor 3h",
  },
  {
    type: "success",
    message: "System-Update installiert",
    time: "vor 5h",
  },
];

export function SystemStatus() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-green-600";
      case "warning":
        return "text-yellow-600";
      case "offline":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      case "warning":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "offline":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold mb-2">System-Status</h2>
          <p className="text-muted-foreground">
            Überwache deine QuittMe-Integration und alle Verbindungen
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Activity className="w-4 h-4 mr-2" />
          System testen
        </Button>
      </div>

      {/* Overall Status */}
      <Card className="animate-slide-in-up delay-100">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Systeme funktional</h3>
                <p className="text-muted-foreground">
                  Letzte Prüfung: vor 30 Sekunden
                </p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-lg px-4 py-2">
              Alles läuft
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* System Components */}
      <Card className="animate-slide-in-up delay-200">
        <CardHeader>
          <CardTitle>System-Komponenten</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {systemComponents.map((component, index) => {
              const Icon = component.icon;
              const StatusIcon =
                component.status === "online" ? CheckCircle : AlertTriangle;
              return (
                <div
                  key={component.name}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{component.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {component.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-sm font-medium">Antwortzeit</p>
                      <p className="text-sm text-muted-foreground">
                        {component.responseTime}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <StatusIcon
                        className={`w-4 h-4 ${getStatusColor(component.status)}`}
                      />
                      <Badge className={getStatusBadge(component.status)}>
                        {component.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Events */}
      <Card className="animate-fade-in-up delay-400">
        <CardHeader>
          <CardTitle>Letzte Ereignisse</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentEvents.map((event, index) => {
              const getEventIcon = () => {
                switch (event.type) {
                  case "success":
                    return CheckCircle;
                  case "warning":
                    return AlertTriangle;
                  default:
                    return Activity;
                }
              };
              const EventIcon = getEventIcon();
              const getEventColor = () => {
                switch (event.type) {
                  case "success":
                    return "text-green-600";
                  case "warning":
                    return "text-yellow-600";
                  default:
                    return "text-blue-600";
                }
              };

              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300 animate-slide-in-right"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <EventIcon className={`w-5 h-5 mt-0.5 ${getEventColor()}`} />
                  <div className="flex-1">
                    <p className="font-medium">{event.message}</p>
                    <span className="text-sm text-muted-foreground">
                      {event.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
