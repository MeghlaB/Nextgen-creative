import {
  BadgeDollarSign,
  BarChart2,
  BookText,
  Boxes,
  ChartNoAxesColumn,
  ChartNoAxesCombined,
  Home,
  Lock,
  Settings,
  SlidersVertical,
  User2,
  UserPlus,
  Users,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

function AdminDashboard() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-colors ${
      isActive
        ? "bg-gray-700 text-blue-400"
        : "text-gray-200 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <aside className="h-screen w-[250px] bg-gray-900 text-white px-4 py-5 hidden md:flex flex-col fixed top-0 left-0 z-40 shadow-lg">
      {/* Sidebar Title */}
      <div className="text-2xl font-bold mb-10 text-center tracking-wide border-b border-gray-700 pb-4">
        Admin Panel
      </div>

      {/* ROLE SELECTION */}
      <h2 className="text-sm text-gray-400 uppercase mb-2">Role Selection</h2>
      <nav className="space-y-2 mb-8">
        <NavLink to="/dashboard/owner" className={linkClass}>
          <div className="flex gap-3">
            <SlidersVertical size={20} />
            <span>Owner</span>
          </div>
        </NavLink>
        <NavLink to="/dashboard/marketing-sales" className={linkClass}>
          <div className="flex gap-4">
            <ChartNoAxesCombined size={20} />
            <span>Marketing & Sales</span>
          </div>
        </NavLink>
        <NavLink to="/dashboard/content-seo" className={linkClass}>
          <div className="flex gap-4">
            <BookText size={20} />
            <span>Content & SEO</span>
          </div>
        </NavLink>
      </nav>

      {/* MANAGEMENT */}
      <h2 className="text-sm text-gray-400 uppercase mb-2">Management</h2>
      <nav className="space-y-2 mb-8">
        <NavLink to="/dashboard/home" className={linkClass}>
          <div className="flex gap-3">
            <Home size={20} />
            <span>Dashboard</span>
          </div>
        </NavLink>
        <NavLink to="/dashboard/user-management" className={linkClass}>
          <div className="flex gap-3">
            <Users size={20} />
            <span>User Management</span>
          </div>
        </NavLink>
        <NavLink to="/dashboard/projects" className={linkClass}>
          <div className="flex gap-3">
            <Boxes size={20} />
            <span>Projects</span>
          </div>
        </NavLink>
        <NavLink to="/dashboard/billing" className={linkClass}>
          <div className="flex gap-3">
            <BadgeDollarSign size={20} />
            <span>Billing & Invoices</span>
          </div>
        </NavLink>
        <NavLink to="/dashboard/analytics" className={linkClass}>
          <div className="flex gap-3">
            <ChartNoAxesColumn size={20} />
            <span>Analytics</span>
          </div>
        </NavLink>
        <NavLink to="/dashboard/audit" className={linkClass}>
          <div className="flex gap-3">
            <BookText size={20} />
            <span>Audit Logs</span>
          </div>
        </NavLink>
      </nav>

      {/* SYSTEM */}
      <h2 className="text-sm text-gray-400 uppercase mb-2">System</h2>
      <nav className="space-y-2">
        <NavLink to="/dashboard/settings" className={linkClass}>
          <div className="flex gap-3">
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </NavLink>
        <NavLink to="/dashboard/permissions" className={linkClass}>
          <div className="flex gap-3">
            <Lock size={20} />
            <span>Permissions</span>
          </div>
        </NavLink>
      </nav>
    </aside>
  );
}

export default AdminDashboard;
