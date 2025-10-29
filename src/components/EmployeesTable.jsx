import { ChevronRight } from 'lucide-react';

const employees = [
  { id: 'EMP-1023', name: 'Ava Johnson', role: 'Product Designer', team: 'Design', status: 'Active', doj: '2022-08-14' },
  { id: 'EMP-0954', name: 'Noah Williams', role: 'Frontend Engineer', team: 'Engineering', status: 'Active', doj: '2021-11-03' },
  { id: 'EMP-0871', name: 'Liam Brown', role: 'HR Generalist', team: 'People Ops', status: 'Leave', doj: '2020-06-22' },
  { id: 'EMP-0762', name: 'Emma Davis', role: 'QA Analyst', team: 'Engineering', status: 'Probation', doj: '2024-02-10' },
];

function StatusPill({ status }) {
  const map = {
    Active: 'bg-green-50 text-green-700',
    Leave: 'bg-amber-50 text-amber-700',
    Probation: 'bg-blue-50 text-blue-700',
  };
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${map[status] || 'bg-gray-100 text-gray-700'}`}>
      {status}
    </span>
  );
}

export default function EmployeesTable() {
  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Team Snapshot</h3>
          <p className="text-sm text-gray-500">Recent activity and new joiners</p>
        </div>
        <button className="text-sm text-blue-700 hover:underline">View all</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50 text-xs text-gray-500">
            <tr>
              <th className="text-left font-medium px-4 py-3">Employee</th>
              <th className="text-left font-medium px-4 py-3">Role</th>
              <th className="text-left font-medium px-4 py-3">Team</th>
              <th className="text-left font-medium px-4 py-3">Status</th>
              <th className="text-left font-medium px-4 py-3">Joined</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {employees.map((e) => (
              <tr key={e.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img src={`https://i.pravatar.cc/100?u=${e.id}`} alt={e.name} className="h-8 w-8 rounded-full" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{e.name}</p>
                      <p className="text-xs text-gray-500">{e.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{e.role}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{e.team}</td>
                <td className="px-4 py-3"><StatusPill status={e.status} /></td>
                <td className="px-4 py-3 text-sm text-gray-700">{new Date(e.doj).toLocaleDateString()}</td>
                <td className="px-4 py-3 text-right">
                  <button className="inline-flex items-center text-sm text-blue-700 hover:underline">
                    Manage
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
