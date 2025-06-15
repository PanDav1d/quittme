import {
  Save,
  Key,
  Bell,
  Shield,
  Globe,
  Smartphone,
  CreditCard,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export function SettingsSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-2">Einstellungen</h2>
        <p className="text-muted-foreground">
          Verwalte deine QuittMe-Integration und Präferenzen
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Store Information */}
        <Card className="animate-slide-in-up delay-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Laden-Informationen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Laden-Name</label>
              <Input defaultValue="REWE Markt Berlin Mitte" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Adresse</label>
              <Input defaultValue="Friedrichstraße 123, 10117 Berlin" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Kontakt E-Mail</label>
              <Input defaultValue="manager@rewe-berlin-mitte.de" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Telefon</label>
              <Input defaultValue="+49 30 12345678" />
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" />
              Änderungen speichern
            </Button>
          </CardContent>
        </Card>

        {/* API Configuration */}
        <Card className="animate-slide-in-up delay-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="w-5 h-5" />
              API-Konfiguration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">API-Key</label>
              <div className="flex gap-2">
                <Input
                  defaultValue="qm_live_sk_1234567890abcdef"
                  type="password"
                  readOnly
                />
                <Button variant="outline" size="sm">
                  Anzeigen
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Webhook-URL</label>
              <Input defaultValue="https://api.rewe-berlin.de/quittme/webhook" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">API-Version</label>
              <div className="flex items-center gap-2">
                <Input defaultValue="v2.1" readOnly />
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                  Aktuell
                </Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Key className="w-4 h-4 mr-2" />
              Neuen API-Key generieren
            </Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="animate-slide-in-up delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Benachrichtigungen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">E-Mail-Benachrichtigungen</p>
                <p className="text-sm text-muted-foreground">
                  Erhalte Updates per E-Mail
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Transaktions-Alerts</p>
                <p className="text-sm text-muted-foreground">
                  Bei jeder neuen Transaktion
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Fehler-Benachrichtigungen</p>
                <p className="text-sm text-muted-foreground">
                  Bei API-Fehlern oder Ausfällen
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Wöchentliche Berichte</p>
                <p className="text-sm text-muted-foreground">
                  Zusammenfassung der Woche
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="animate-slide-in-up delay-400">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Sicherheit
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Zwei-Faktor-Authentifizierung</p>
                <p className="text-sm text-muted-foreground">
                  Zusätzliche Sicherheit für dein Konto
                </p>
              </div>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                Aktiviert
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">IP-Whitelist</p>
                <p className="text-sm text-muted-foreground">
                  Beschränke API-Zugriff auf bestimmte IPs
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Erlaubte IP-Adressen
              </label>
              <Input defaultValue="192.168.1.100, 203.0.113.0/24" />
            </div>
            <Button variant="outline" className="w-full">
              Passwort ändern
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Integration Status */}
      <Card className="animate-fade-in-up delay-500">
        <CardHeader>
          <CardTitle>Integration-Übersicht</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-950/20">
              <CreditCard className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Kassensystem</h3>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                ✓ Verbunden
              </Badge>
              <p className="text-xs text-muted-foreground mt-2">SAP Retail</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20">
              <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Mobile App</h3>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                ✓ Aktiv
              </Badge>
              <p className="text-xs text-muted-foreground mt-2">
                iOS & Android
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Kunden-Portal</h3>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                ✓ Synchronisiert
              </Badge>
              <p className="text-xs text-muted-foreground mt-2">
                847 aktive Nutzer
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20">
              <Globe className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Web-Integration</h3>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                ✓ Online
              </Badge>
              <p className="text-xs text-muted-foreground mt-2">API v2.1</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
