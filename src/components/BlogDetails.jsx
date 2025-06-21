import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref as dbRef, get } from 'firebase/database';
import { HashLoader } from 'react-spinners';

const BlogDetails = ({ firebase }) => {
    const { postID } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            const db = getDatabase(firebase);
            const id = atob(postID);
            const blogRef = dbRef(db, `/blogs/${id}`);
            const snapshot = await get(blogRef);
            if (snapshot.exists()) {
                setBlog(snapshot.val());
            }
            setLoading(false);
        };
        fetchBlog();
    }, [firebase, postID]);

    if (loading) {
        return (
            <div className="mt-32 flex justify-center items-center min-h-[70vh]">
                <HashLoader color="#22c55e" size={60} />
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="mt-32 text-center text-gray-600">
                Blog not found.
            </div>
        );
    }

    return (
        <div className="mt-32 max-w-3xl mx-auto px-4 py-8 text-black">
            <div className="text-3xl font-bold mb-4">{blog.title}</div>
            <div>
                <span>Date: </span>
                <span>{new Date(blog.date).toLocaleString("en-BD")}</span>
            </div>
            <img
                src={blog.coverImage}
                alt="Cover"
                className="w-full h-64 object-cover rounded mb-6"
            />
            <div className="text-lg leading-relaxed whitespace-pre-wrap">
                {blog.description}
            </div>
        </div>
    );
};

export default BlogDetails;
