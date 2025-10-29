export default function RecentHires() {
  const hires = [
    { name: 'Aisha Khan', role: 'Product Designer', dept: 'Design', avatar: 'https://i.pravatar.cc/100?img=12' },
    { name: 'Marco Silva', role: 'Backend Engineer', dept: 'Engineering', avatar: 'https://i.pravatar.cc/100?img=27' },
    { name: 'Sophia Lee', role: 'HR Generalist', dept: 'People Ops', avatar: 'https://i.pravatar.cc/100?img=32' },
    { name: 'David Chen', role: 'Data Analyst', dept: 'Analytics', avatar: 'https://i.pravatar.cc/100?img=14' },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold tracking-tight">Recent Hires</h3>
        <button className="text-xs text-blue-700 hover:underline">View all</button>
      </div>
      <ul className="divide-y divide-gray-200">
        {hires.map((h) => (
          <li key={h.name} className="py-3 flex items-center gap-3">
            <img src={h.avatar} alt={h.name} className="h-9 w-9 rounded-full" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">{h.name}</p>
              <p className="text-xs text-gray-500 truncate">{h.role} • {h.dept}</p>
            </div>
            <span className="text-[10px] px-2 py-1 rounded-full bg-green-50 text-green-700">New</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
