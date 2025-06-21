import React, { useState } from 'react';
import { getDatabase, ref as dbRef, push } from "firebase/database";
import { toast } from 'react-toastify';

const BlogUploadForm = ({ firebase }) => {
    const [formData, setFormData] = useState({
        title: '',
        coverImage: null,
        coverImageBase64: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            const file = files[0];
            if (file) {
                resizeAndConvertToBase64(file, 800, 600).then((base64) => {
                    setFormData((prev) => ({
                        ...prev,
                        coverImage: file,
                        coverImageBase64: base64,
                    }));
                });
            }
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const database = getDatabase(firebase);

        const blogPost = {
            title: formData.title,
            coverImage: formData.coverImageBase64,
            description: formData.description,
            date: new Date().toISOString(),
        };

        try {
            await push(dbRef(database, '/blogs'), blogPost);
            toast.success('Blog post uploaded!');
            setFormData({ title: '', coverImage: null, coverImageBase64: '', description: '' });
        } catch (err) {
            console.error(err);
            toast.error('Error uploading blog');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Upload Blog Post</h2>
            <label className="block">
                Title*
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="formInput !text-gray-700 border !border-gray-200"
                />
            </label>
            <label className="block">
                Cover Image*
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    required
                    className="formInput !text-gray-700 border !border-gray-200"
                />
            </label>
            <label className="block">
                Description*
                <textarea
                    name="description"
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="formInput !text-gray-700 border !border-gray-200"
                />
            </label>
            <button type="submit" className="bg-green-600 py-2 px-6 rounded font-bold hover:bg-green-700">
                Submit
            </button>
        </form>
    );
};

export default BlogUploadForm;
