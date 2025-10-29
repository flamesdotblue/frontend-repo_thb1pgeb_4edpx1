import { Bell, Search, Plus } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold tracking-tight">HR Dashboard</h2>
          <span className="hidden sm:inline text-gray-400">•</span>
          <p className="hidden sm:inline text-sm text-gray-500">Overview and insights</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-md px-2 py-2">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search employees, teams..."
              className="bg-transparent outline-none text-sm w-64 placeholder:text-gray-500"
            />
          </div>
          <button className="hidden sm:flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md shadow">
            <Plus className="h-4 w-4" />
            Add Employee
          </button>
          <button className="relative p-2 rounded-md hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-red-500 rounded-full ring-2 ring-white" />
          </button>
          <img
            src="https://i.pravatar.cc/100?img=5"
            className="h-9 w-9 rounded-full ring-2 ring-white"
            alt="User avatar"
          />
        </div>
      </div>
    </header>
  );
}
