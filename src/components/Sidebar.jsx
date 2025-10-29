import { Home, Users, Calendar, Settings, LogOut, BadgeCheck } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Users, label: 'Employees' },
    { icon: Calendar, label: 'Attendance' },
    { icon: BadgeCheck, label: 'Leave' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="h-screen sticky top-0 bg-white/80 backdrop-blur border-r border-gray-200 w-64 flex flex-col">
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">HR</div>
          <div>
            <p className="text-sm text-gray-500">Flames</p>
            <h1 className="text-lg font-semibold tracking-tight">HRMS</h1>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
              active
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4 border-t border-gray-200">
        <button className="w-full flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-md transition-colors">
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
