export default function Announcements() {
  const items = [
    {
      title: 'Policy Update: Remote Work',
      body: 'Hybrid work remains default. Fully remote requests open for Q4.',
      time: '2h ago',
    },
    {
      title: 'Benefits Enrollment',
      body: 'Open enrollment starts Nov 1. Review plans and choose before Nov 20.',
      time: 'Yesterday',
    },
    {
      title: 'Learning Week',
      body: 'Upskilling sessions across product, AI, and leadership next week.',
      time: '3 days ago',
    },
  ];

  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200">
        <h3 className="font-semibold">Announcements</h3>
        <p className="text-sm text-gray-500">What's new across the org</p>
      </div>
      <ul className="divide-y divide-gray-100">
        {items.map((a, idx) => (
          <li key={idx} className="px-4 py-4">
            <p className="text-sm font-medium text-gray-900">{a.title}</p>
            <p className="text-sm text-gray-600 mt-1">{a.body}</p>
            <p className="text-xs text-gray-400 mt-2">{a.time}</p>
          </li>
        ))}
      </ul>
      <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 text-right">
        <button className="text-sm text-blue-700 hover:underline">View all</button>
      </div>
    </section>
  );
}
