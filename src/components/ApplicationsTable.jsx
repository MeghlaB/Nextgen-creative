import React, { useEffect, useRef, useState } from 'react';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis/types';
import ScrollWrapper from './ScrollWrapper';
import { HashLoader } from 'react-spinners';

const ApplicationsTable = ({ firebase }) => {
    const [applications, setApplications] = useState([]);
    const [selected, setSelected] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const database = getDatabase(firebase);
        const appsRef = dbRef(database, '/applications');

        const unsubscribe = onValue(appsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const parsed = Object.entries(data).map(([id, app]) => ({ id, ...app }));
                setApplications(parsed);
                setIsLoading(false);
            }
        });

        return () => unsubscribe();
    }, [firebase]);






    return (
        isLoading ? <div className='flex justify-center items-center min-h-[50vh]'>
            <HashLoader />
        </div> :<div className="p-6 overflow-x-auto min-h-screen">
            <h2 className="text-2xl font-bold mb-4">All Applications</h2>
            {applications.length > 0 ? <table className="min-w-full bg-white rounded-lg shadow">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="p-3">Name</th>
                        <th className="p-3">Contact</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((app) => (
                        <tr key={app.id} className="border-b">
                            <td className="p-3">{app.name}</td>
                            <td className="p-3">{app.contact}</td>
                            <td className="p-3">{app.email}</td>
                            <td className="p-3">
                                <button
                                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                    onClick={() => setSelected(app)}
                                >
                                    Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>:"No applications right now!"}

            {selected && (
                <div className="fixed pt-16 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <>
                        <ScrollWrapper className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative text-black overflow-y-auto overflow-x-hidden max-h-[70vh]">
                            <button
                                className="absolute top-2 right-3 text-2xl font-bold text-red-600 hover:text-red-800"
                                onClick={() => setSelected(null)}
                            >
                                &times;
                            </button>
                            <h3 className="text-xl font-semibold mb-4">Applicant Details</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {Object.entries(selected).map(([key, value]) => (
                                    key !== "photo" ? (
                                        (key != "resumeCV" ? <div key={key}>
                                            <strong className="capitalize">{key}:</strong> {value}
                                        </div> : <div key={key} className='space-x-1.5'>
                                            <span>Open Resume </span>
                                            <Link className='text-green-700' to={value} target='_blank' > link here</Link>
                                        </div>)
                                    ) : (
                                        <div key={key} className="col-span-2">
                                            <strong>Photo:</strong>
                                            <img
                                                src={value}
                                                alt="Uploaded"
                                                className="w-40 h-40 object-cover mt-2 border rounded"
                                            />
                                        </div>
                                    )
                                ))}
                            </div>
                        </ScrollWrapper>
                    </>
                </div>
            )}
        </div>
    );
};

export default ApplicationsTable;
