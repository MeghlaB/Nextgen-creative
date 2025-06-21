import React, { useEffect, useState } from 'react';
import { getDatabase, ref as dbRef, onValue, set } from "firebase/database";

const ChangePasswordForm = ({ firebase }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const db = getDatabase(firebase);
        const passRef = dbRef(db, '/password');
        onValue(passRef, (snapshot) => {
            setCurrentPassword(snapshot.val() || '');
            setLoading(false);
        });
    }, [firebase]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const db = getDatabase(firebase);
        await set(dbRef(db, '/password'), newPassword);
        setMessage('Password updated successfully');
        setNewPassword('');
    };

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded bg-white text-black shadow">
            <h2 className="text-xl font-bold mb-4">Change Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Current Password</label>
                    <input
                        type="text"
                        value={currentPassword}
                        disabled
                        className="w-full p-2 border rounded bg-gray-100 text-gray-600"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">New Password</label>
                    <input
                        type="text"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                    Update Password
                </button>
            </form>
            {message && <div className="mt-4 text-green-600">{message}</div>}
        </div>
    );
};

export default ChangePasswordForm;
