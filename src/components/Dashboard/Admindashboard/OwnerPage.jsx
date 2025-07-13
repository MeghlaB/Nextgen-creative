import { DollarSign, FolderKanban, HeartHandshake, Layers, Users } from "lucide-react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 10, projects: 8 },
  { month: "Feb", revenue: 15, projects: 12 },
  { month: "Mar", revenue: 25, projects: 18 },
  { month: "Apr", revenue: 35, projects: 26 },
  { month: "May", revenue: 45, projects: 33 },
  { month: "Jun", revenue: 55, projects: 38 },
];

const teamPerformance = [
  { team: "Marketing Team", progress: 52, color: "bg-blue-500" },
  { team: "Content & SEO Team", progress: 87, color: "bg-green-500" },
  { team: "Design Team", progress: 95, color: "bg-purple-500" },
  { team: "Development Team", progress: 89, color: "bg-yellow-500" },
];

const recentActivities = [
  {
    title: 'New project "E-commerce Redesign" created',
    time: "5 minutes ago by Sarah Johnson",
    color: "bg-blue-400",
  },
  {
    title: "Michael Chen joined the Content Team",
    time: "1 hour ago by HR department",
    color: "bg-green-400",
  },
  {
    title: "Invoice #3245 paid by TechCorp",
    time: "3 hours ago by Finance Department",
    color: "bg-yellow-400",
  },
  {
    title: 'New comment on "Digital Marketing Strategy" blog post',
    time: "5 hours ago by Olivia Martin",
    color: "bg-purple-400",
  },
];


const OwnerPage = () => {
    const stats = [
  {
    title: "Active Projects",
    value: 24,
    change: "↑ 10% increase",
    icon: <FolderKanban className="text-blue-500" size={20} />,
  },
  {
    title: "Monthly Revenue",
    value: "$78,650",
    change: "↑ 13% increase",
    icon: <DollarSign className="text-green-500" size={20} />,
  },
  {
    title: "Team Members",
    value: 32,
    change: "↑ 2 new hires",
    icon: <Users className="text-purple-500" size={20} />,
  },
  {
    title: "Client Satisfaction",
    value: "94.8%",
    change: "↑ 2.1% increase",
    icon: <HeartHandshake className="text-pink-500" size={20} />,
  },
];
  return (
    <div>
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-6 flex justify-between items-center shadow-md">
        {/* Text Section */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Welcome to NextGenCreative.Solutions
          </h1>
          <p className="text-sm md:text-base text-white/90">
            Your complete creative agency management platform. Monitor all
            aspects of your business, from marketing campaigns to content
            creation and client management.
          </p>
        </div>

        {/* Icon Section */}
        <div className="hidden md:block opacity-20 pr-4">
          <Layers size={80} />
        </div>
      </div>
      {/* dashboard summary careds */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow-sm p-5 border border-gray-200"
        >
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium text-gray-500">{item.title}</h4>
            {item.icon}
          </div>
          <div className="text-2xl font-bold text-gray-800">{item.value}</div>
          <div className="text-sm text-green-600 mt-1">{item.change}</div>
        </div>
      ))}
    </div>
    {/* Performance  */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Performance Overview */}
      <div className="bg-white rounded-lg shadow p-4 col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Performance Overview</h2>
          <div className="space-x-1">
            <button className="text-sm bg-gray-100 px-2 py-1 rounded">Weekly</button>
            <button className="text-sm bg-blue-500 text-white px-2 py-1 rounded">Monthly</button>
            <button className="text-sm bg-gray-100 px-2 py-1 rounded">Yearly</button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#3B82F6" name="Revenue" />
            <Line type="monotone" dataKey="projects" stroke="#10B981" name="Projects" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-4 space-y-2">
        <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
        <button className="w-full text-left bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium px-3 py-2 rounded">
          ➕ Create New Project
        </button>
        <button className="w-full text-left bg-green-100 hover:bg-green-200 text-green-800 font-medium px-3 py-2 rounded">
          👤 Add New Team Member
        </button>
        <button className="w-full text-left bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium px-3 py-2 rounded">
          📊 Generate Reports
        </button>
        <button className="w-full text-left bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-medium px-3 py-2 rounded">
          📅 Schedule Meeting
        </button>
        <button className="w-full text-left bg-red-100 hover:bg-red-200 text-red-800 font-medium px-3 py-2 rounded">
          ⚠️ View Urgent Tasks
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Team Performance */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Team Performance</h2>
        {teamPerformance.map((item, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{item.team}</span>
              <span className="text-sm text-gray-600">{item.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`${item.color} h-3 rounded-full`}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          {recentActivities.map((activity, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <div className={`w-3 h-3 mt-1 rounded-full ${activity.color}`} />
              <div>
                <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default OwnerPage;
