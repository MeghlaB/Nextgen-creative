import { DollarSign, FolderKanban, HeartHandshake, Layers, Users } from "lucide-react";
import React from "react";

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
    </div>
  );
};

export default OwnerPage;
