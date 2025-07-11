import {
  BarChart2,
  Boxes,
  Home,
  User2,
  UserPlus,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

function AdminDashboard() {
  // Active/inactive link styles
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-colors ${
      isActive
        ? "bg-gray-700 text-blue-400"
        : "text-gray-200 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <aside className="h-screen w-[250px] bg-gray-900 text-white px-4 py-6 hidden md:flex flex-col fixed top-0 left-0 z-40 shadow-lg">
      {/* Sidebar Title */}
      <div className="text-2xl font-bold mb-10 text-center tracking-wide border-b border-gray-700 pb-4">
        Admin Panel
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <NavLink to="/dashboard" className={linkClass}>
          <Home size={20} />
          <span>Dashboard Home</span>
        </NavLink>

        <NavLink to="/dashboard/blog-management" className={linkClass}>
          <Boxes size={20} />
          <span>Blog Management</span>
        </NavLink>

        <NavLink to="/dashboard/add-blog" className={linkClass} >
          <UserPlus size={20} />
          <span>Add Blog</span>
        </NavLink>

        <NavLink to="/dashboard/alluser" className={linkClass}>
          <User2 size={20} />
          <span>All Users</span>
        </NavLink>

        <NavLink to="/dashboard/application" className={linkClass}>
          <BarChart2 size={20} />
          <span>Applications</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default AdminDashboard;
