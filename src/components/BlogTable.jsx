import React, { useEffect, useState } from 'react';
import { getDatabase, ref as dbRef, onValue, remove, set } from "firebase/database";
import { HashLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const BlogTable = ({ firebase }) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(null);
    const [editForm, setEditForm] = useState({ title: '', description: '', coverImage: null });

    useEffect(() => {
        const db = getDatabase(firebase);
        const blogsRef = dbRef(db, '/blogs');

        onValue(blogsRef, (snapshot) => {
            const data = snapshot.val();
            const blogList = data
                ? Object.entries(data).map(([id, blog]) => ({
                    id: btoa(id),
                    originalId: id,
                    ...blog,
                }))
                : [];
            setBlogs(blogList.reverse());
            setLoading(false);
        });
    }, [firebase]);

    const handleDelete = async (id) => {
        const db = getDatabase(firebase);
        await remove(dbRef(db, `/blogs/${id}`));
    };

    const handleEdit = (blog) => {
        setEditing(blog.originalId);
        setEditForm({
            title: blog.title,
            description: blog.description,
            coverImage: null,
            oldCoverImage: blog.coverImage,
        });
    };

    const resizeAndConvertToBase64 = (file, maxWidth, maxHeight) => {
        return new Promise((resolve) => {
            const img = new Image();
            const reader = new FileReader();
            reader.onload = (e) => {
                img.src = e.target.result;
            };
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                canvas.getContext('2d').drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', 0.8));
            };
            reader.readAsDataURL(file);
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (editForm.coverImage) {
            const resizedImage = await resizeAndConvertToBase64(editForm.coverImage, 600, 400);
            await saveBlog(resizedImage);
        } else {
            await saveBlog(editForm.oldCoverImage);
        }
    };


    const saveBlog = async (coverImage) => {
        const db = getDatabase(firebase);
        await set(dbRef(db, `/blogs/${editing}`), {
            title: editForm.title,
            description: editForm.description,
            coverImage,
            date: new Date().toISOString(),
        });
        setEditing(null);
        setEditForm({ title: '', description: '', coverImage: null });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <HashLoader color="#22c55e" size={60} />
            </div>
        );
    }

    return (
        <div className="overflow-x-auto px-4">
            <div className='font-bold text-xl mt-8 mb-2 text-black'>
                List of all blog post
            </div>
            <table className="min-w-full border border-gray-300 text-black bg-white">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-3 border-b border-gray-300">Title</th>
                        <th className="p-3 border-b border-gray-300">Cover Image</th>
                        <th className="p-3 border-b border-gray-300">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog.id} className="hover:bg-gray-100">
                            <td className="p-3 border-b border-gray-300">{blog.title}</td>
                            <td className="p-3 border-b border-gray-300">
                                <img src={blog.coverImage} alt="cover" className="w-20 h-14 object-cover rounded" />
                            </td>
                            <td className="p-3 border-b border-gray-300 space-x-2">
                                <Link target='_blank' to={`/blogs/${blog.id}`} className="text-blue-500 underline">
                                    View
                                </Link>
                                <button
                                    onClick={() => handleEdit(blog)}
                                    className="text-yellow-600 hover:underline"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(blog.originalId)}
                                    className="text-red-600 hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editing && (
                <div className='bg-black/50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
                    <form
                        onSubmit={handleUpdate}
                        className="mt-6 p-4 bg-white text-black border border-gray-300 rounded shadow-xl "
                    >
                        <h2 className="text-lg font-bold mb-4">Update Blog</h2>
                        <div className="mb-3">
                            <label className="block font-medium">Title</label>
                            <input
                                type="text"
                                value={editForm.title}
                                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                                className="border border-gray-300 w-full p-2 rounded"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block font-medium">Content</label>
                            <textarea
                                rows="4"
                                defaultValue={editForm.description}
                                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                                className="border border-gray-300 w-full p-2 rounded"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setEditForm({ ...editForm, coverImage: e.target.files[0] })}
                                className="border border-gray-300 w-full p-2 rounded"
                            />
                            <small className="block font-medium">Cover Image (leave empty to keep current)</small>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() => setEditing(null)}
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default BlogTable;
