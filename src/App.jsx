import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import StatsGrid from './components/StatsGrid';
import RecentHires from './components/RecentHires';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 min-h-screen">
          <TopBar />

          <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
            {/* KPI cards */}
            <StatsGrid />

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Announcements */}
                <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold tracking-tight">Announcements</h3>
                    <button className="text-xs text-blue-700 hover:underline">Post update</button>
                  </div>
                  <div className="space-y-4">
                    <article className="p-4 rounded-lg bg-gradient-to-r from-indigo-50/80 to-blue-50 border border-indigo-100">
                      <p className="text-sm font-medium text-gray-800">Quarterly Town Hall</p>
                      <p className="text-xs text-gray-600 mt-1">Join us this Friday at 3 PM for Q&A with leadership. Snacks provided in all hubs.</p>
                    </article>
                    <article className="p-4 rounded-lg bg-gradient-to-r from-emerald-50/80 to-teal-50 border border-emerald-100">
                      <p className="text-sm font-medium text-gray-800">Benefits Enrollment</p>
                      <p className="text-xs text-gray-600 mt-1">Open enrollment ends next week. Review your plan selections in the portal.</p>
                    </article>
                  </div>
                </section>

                {/* Quick actions */}
                <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <h3 className="text-sm font-semibold tracking-tight mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      'Add Employee',
                      'Create Leave',
                      'Approve Timesheet',
                      'Schedule Interview',
                    ].map((a) => (
                      <button
                        key={a}
                        className="text-xs bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-md px-3 py-2 text-left"
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </section>
              </div>

              {/* Recent Hires */}
              <div className="space-y-6">
                <RecentHires />

                <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold tracking-tight">Upcoming Birthdays</h3>
                    <span className="text-xs text-gray-500">This month</span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { name: 'Emily Carter', date: 'Nov 12' },
                      { name: 'Ravi Sharma', date: 'Nov 18' },
                      { name: 'Laura Gómez', date: 'Nov 23' },
                    ].map((p) => (
                      <li key={p.name} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{p.name}</span>
                        <span className="text-xs text-gray-500">{p.date}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
