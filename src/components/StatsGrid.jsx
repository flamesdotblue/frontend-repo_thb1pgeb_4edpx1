import { Users, CalendarCheck, Clock, CheckCircle2 } from 'lucide-react';

const Card = ({ icon: Icon, label, value, change, trend = 'up' }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-semibold tracking-tight">{value}</p>
        </div>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full ${
        trend === 'up' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
      }`}>
        {trend === 'up' ? '▲' : '▼'} {change}
      </span>
    </div>
  </div>
);

export default function StatsGrid() {
  const stats = [
    { icon: Users, label: 'Total Employees', value: '248', change: '3.2%' },
    { icon: CalendarCheck, label: 'On Leave Today', value: '12', change: '1.1%', trend: 'down' },
    { icon: Clock, label: 'Overtime Hours', value: '86', change: '5.4%' },
    { icon: CheckCircle2, label: 'Attendance Rate', value: '96%', change: '0.8%' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <Card key={s.label} {...s} />
      ))}
    </div>
  );
}
