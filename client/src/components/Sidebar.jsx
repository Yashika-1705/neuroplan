import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-100 p-6 border-r">
      <h2 className="text-xl font-bold mb-6">NeuroPlan</h2>
      <ul className="space-y-4">
        <li className="text-red-600">📊 Dashboard</li>
        <li>📄 Syllabus Dump</li>
        <li>🗓️ Weekly Plan</li>
        <li>📚 Courses</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
