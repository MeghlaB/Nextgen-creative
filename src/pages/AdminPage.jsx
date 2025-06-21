import { useEffect, useState } from "react"
import { BiSolidLock } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa";
import { toast } from "react-toastify";
import ApplicationsTable from "../components/ApplicationsTable";
import BlogUploadForm from "../components/BlogUploadForm";
import BlogTable from "../components/BlogTable";
import ChangePasswordForm from "../components/ChangePasswordForm";
import { getDatabase, ref as dbRef, onValue } from "firebase/database";

export default function AdminPage({ firebase, details }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [adminCurrentPage, setAdminCurrentPage] = useState("applications-list");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dbPassword, setDbPassword] = useState('');
    const cookieName = 'adminLogged';

    useEffect(() => {
        const db = getDatabase(firebase);
        const passRef = dbRef(db, '/password');
        onValue(passRef, (snapshot) => {
            setDbPassword(snapshot.val() || '');
        });

        setIsLoggedIn(localStorage.getItem(cookieName) == 'true');
    }, [firebase]);

    const login = (e) => {
        e.preventDefault();
        const envUsername = import.meta.env.VITE_AdminUserName;
        if (username === envUsername && password === dbPassword) {
            localStorage.setItem(cookieName, 'true');
            toast.success('Login successful');
            setIsLoggedIn(true);
            setPassword("");
        } else {
            toast.error('Invalid credentials')
        }
    }

    return <>
        <div className="pt-32 px-6 w-10/12 mx-auto">
            {isLoggedIn ? <>
                <div className="flex w-full">
                    <div className="flex-1/5 pt-8">
                        <div className="bg-gray-100 min-h-[50vh] rounded-sm overflow-hidden mb-6">
                            <div className={`px-4 py-4 cursor-pointer hover:bg-gray-300 select-none ${adminCurrentPage == "applications-list" ? "text-green-700 bg-gray-200" : ""}`} onClick={() => setAdminCurrentPage("applications-list")}>
                                <span>All Applications</span>
                            </div>
                            <div className={`px-4 py-4 cursor-pointer hover:bg-gray-300 select-none ${adminCurrentPage == "blogs-list" ? "text-green-700 bg-gray-200" : ""}`} onClick={() => setAdminCurrentPage("blogs-list")}>
                                <span>All Blog Posts</span>
                            </div>
                            <div className={`px-4 py-4 cursor-pointer hover:bg-gray-300 select-none ${adminCurrentPage == "blogs-add" ? "text-green-700 bg-gray-200" : ""}`} onClick={() => setAdminCurrentPage("blogs-add")}>
                                <span>Add Blog Posts</span>
                            </div>
                            <div className={`px-4 py-4 cursor-pointer hover:bg-gray-300 select-none ${adminCurrentPage == "change-password" ? "text-green-700 bg-gray-200" : ""}`} onClick={() => setAdminCurrentPage("change-password")}>
                                <span>Change Password</span>
                            </div>
                            <div className={`px-4 py-4 cursor-pointer hover:bg-gray-300 select-none text-red-700 font-bold`} onClick={() => {
                                localStorage.removeItem(cookieName);
                                setIsLoggedIn(false);
                                toast.success("Logout successful!");
                            }}>
                                <span>Logout</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-4/5">
                        {adminCurrentPage == "applications-list" && <ApplicationsTable firebase={firebase} />}
                        {adminCurrentPage == "blogs-add" && <BlogUploadForm firebase={firebase} />}
                        {adminCurrentPage == "blogs-list" && <BlogTable firebase={firebase} />}
                        {adminCurrentPage == "change-password" && <ChangePasswordForm firebase={firebase} />}
                    </div>
                </div>
            </> : <>
                <div className="flex items-center justify-center min-h-[70vh] ">
                    <form onSubmit={login} className="bg-white p-8 rounded shadow-xl border-gray-200 border w-92">
                        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
                        <label className="mb-4 flex items-center border border-gray-200 px-2 rounded">
                            <FaUserShield className="mr-2 text-green-500" />
                            <input
                                type="text"
                                placeholder="Username"
                                className="outline-none flex-1 py-2"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <label className="mb-6 flex items-center border border-gray-200 px-2 rounded">
                            <BiSolidLock className="mr-2 text-green-500" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="outline-none flex-1 py-2"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <button className="bg-green-600 hover:cursor-pointer text-white w-full py-2 rounded hover:bg-green-700">
                            Login
                        </button>
                    </form>
                </div>
            </>}
        </div>
    </>
}
