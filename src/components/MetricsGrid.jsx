import { Users, CalendarDays, Clock8, BadgePercent } from 'lucide-react';

const cards = [
  {
    title: 'Total Employees',
    value: '128',
    change: '+6 this month',
    icon: Users,
    badge: 'Active',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    title: 'Attendance',
    value: '96.2%',
    change: '+1.1% vs last week',
    icon: CalendarDays,
    badge: 'Good',
    color: 'bg-green-50 text-green-700',
  },
  {
    title: 'Overtime Hours',
    value: '212h',
    change: '-18h vs last week',
    icon: Clock8,
    badge: 'Down',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    title: 'Leave Utilization',
    value: '54%',
    change: '+4% YoY',
    icon: BadgePercent,
    badge: 'Stable',
    color: 'bg-purple-50 text-purple-700',
  },
];

export default function MetricsGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map(({ title, value, change, icon: Icon, badge, color }) => (
        <div
          key={title}
          className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">{title}</p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight">{value}</h3>
            </div>
            <div className={`h-10 w-10 grid place-items-center rounded-lg ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-gray-500">{change}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{badge}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
