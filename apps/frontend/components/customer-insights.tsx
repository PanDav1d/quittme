import { Users, TrendingUp, Star, MessageSquare, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const weeklyStats = [
  {
    title: "Durchschnittliche Kunden/Tag",
    value: "289",
    change: "+12 vs. letzte Woche",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "QuittMe-Nutzung",
    value: "44%",
    change: "+3% vs. letzte Woche",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "Beste Tageszeit",
    value: "15:00-17:00",
    change: "Höchste QuittMe-Nutzung",
    icon: Clock,
    color: "text-purple-600",
  },
];

const timeSlots = [
  { time: "09:00-11:00", customers: 45, quittme: 18, percentage: 40 },
  { time: "11:00-13:00", customers: 78, quittme: 31, percentage: 40 },
  { time: "13:00-15:00", customers: 92, quittme: 38, percentage: 41 },
  { time: "15:00-17:00", customers: 67, quittme: 32, percentage: 48 },
  { time: "17:00-19:00", customers: 89, quittme: 35, percentage: 39 },
  { time: "19:00-21:00", customers: 34, quittme: 12, percentage: 35 },
];

const recentFeedback = [
  {
    message: "Super praktisch! Endlich keine verlorenen Kassenzettel mehr.",
    time: "vor 2h",
    rating: 5,
  },
  {
    message: "Funktioniert einwandfrei. Sehr zufrieden.",
    time: "vor 4h",
    rating: 5,
  },
  {
    message: "Gute Idee, könnte aber schneller sein.",
    time: "vor 6h",
    rating: 4,
  },
];

export function CustomerInsights() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-2">Kunden-Insights</h2>
        <p className="text-muted-foreground">
          Verstehe wie deine Kunden QuittMe in deinem Laden nutzen
        </p>
      </div>

      {/* Weekly Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {weeklyStats.map((stat, index) => {
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
                <div className="text-sm text-muted-foreground">
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Time-based Usage */}
        <Card className="animate-slide-in-up delay-300">
          <CardHeader>
            <CardTitle>QuittMe-Nutzung nach Tageszeit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timeSlots.map((slot, index) => (
                <div
                  key={slot.time}
                  className="flex items-center justify-between animate-fade-in"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-20 text-sm font-medium">{slot.time}</div>
                    <div>
                      <p className="text-sm font-semibold">
                        {slot.customers} Kunden
                      </p>
                      <p className="text-xs text-green-600">
                        {slot.quittme} mit QuittMe
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${slot.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium w-8">
                      {slot.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Feedback */}
        <Card className="animate-slide-in-up delay-400">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Kunden-Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentFeedback.map((feedback, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg border hover:bg-muted/50 transition-colors duration-300 animate-slide-in-right"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < feedback.rating
                              ? "text-yellow-500 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {feedback.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{feedback.message}"
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Simple Summary */}
      <Card className="animate-fade-in-up delay-600">
        <CardHeader>
          <CardTitle>Zusammenfassung</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20">
              <div className="text-2xl font-bold text-blue-600 mb-2">44%</div>
              <p className="text-sm text-muted-foreground">
                deiner Kunden nutzen QuittMe
              </p>
            </div>
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20">
              <div className="text-2xl font-bold text-green-600 mb-2">127</div>
              <p className="text-sm text-muted-foreground">
                digitale Belege heute
              </p>
            </div>
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20">
              <div className="text-2xl font-bold text-purple-600 mb-2">
                4.8★
              </div>
              <p className="text-sm text-muted-foreground">
                durchschnittliche Bewertung
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
