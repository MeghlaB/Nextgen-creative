import React, { useEffect, useState } from 'react';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import Reveal, { Fade, JackInTheBox } from 'react-awesome-reveal';
import Blogs from './Hooks/Blogs';

const PublicBlogList = ({ firebase }) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getDatabase(firebase);
        const blogsRef = dbRef(db, '/blogs');

        onValue(blogsRef, (snapshot) => {
            const data = snapshot.val();
            const blogList = data
                ? Object.entries(data).map(([id, blog]) => ({
                    id: btoa(id),
                    ...blog,
                }))
                : [];
            setBlogs(blogList.reverse());
            setLoading(false);
        });
    }, [firebase]);

    if (loading) {
        return (
            <div className="mt-32 flex justify-center items-center h-64">
                <HashLoader color="#22c55e" size={60} />
            </div>
        );
    }

    return (
       <div className='mt-30'>
       <Blogs/>
         <div className=" max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       
       {blogs.map((blog) => (
           <JackInTheBox
               key={blog.id}
           >
               <Link
                   to={`/blogs/${blog.id}`}
                   className="w-72 border border-gray-200 rounded-md overflow-hidden shadow hover:shadow-lg transition duration-200 text-center"
               >
                   <img
                       src={blog.coverImage}
                       alt="Cover"
                       className="w-72 h-40 object-cover mx-auto"
                   />
                   <div className="text-lg font-semibold text-black mt-3 truncate">{blog.title}</div>
                   <div className='mb-3'>
                       <small>{new Date(blog.date).toLocaleString("en-BD")}</small>
                   </div>
               </Link>
           </JackInTheBox>
       ))}
   </div>
       </div>
    );
};

export default PublicBlogList;
