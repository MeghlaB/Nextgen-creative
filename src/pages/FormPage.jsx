import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { getDatabase, ref as dbRef, push } from "firebase/database";
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const Application = ({ details = {}, firebase }) => {
    const defFormData = {
        name: '',
        dob: '',
        father: '',
        mother: '',
        nationality: '',
        gender: '',
        nid: '',
        marital: '',
        religion: '',
        profession: '',
        contact: '',
        email: '',
        mailing: '',
        permanent: '',
        photo: null,
        resumeCV: "",
    };

    const [formData, setFormData] = useState(defFormData);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    // Resize image to Base64
    const resizeImageToBase64 = (file, maxWidth = 300) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const scaleSize = maxWidth / img.width;
                    canvas.width = maxWidth;
                    canvas.height = img.height * scaleSize;

                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
                    resolve(dataUrl);
                };
                img.onerror = reject;
                img.src = event.target.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    // Form submit and email sending
    const handleSubmitEmail = async (e) => {
        e.preventDefault();

        // Check if the photo is selected before attempting to process it
        if (!formData.photo) {
            toast.error("Please upload a photo.");
            return;
        }

        try {
            // Resize the photo to base64
            const base64Photo = await resizeImageToBase64(formData.photo);

            // Prepare the data to be stored in Firebase
            const submission = {
                ...formData,
                photo: base64Photo,
            };

            // Save data to Firebase
            const database = getDatabase(firebase);
            await push(dbRef(database, '/applications'), submission);

            // Send email via EmailJS
            await emailjs.send(
                'service_y9g4yya', 
                'template_qk7nmza', 
                {
                    from_name: formData.name,
                    email: formData.email,
                    phone: formData.contact,
                    dob: formData.dob,
                    father: formData.father,
                    mother: formData.mother,
                    nationality: formData.nationality,
                    nid: formData.nid,
                    religion: formData.religion,
                    profession: formData.profession,
                    marital: formData.marital,
                    resumeCV: formData.resumeCV,
                    mailing: formData.mailing,
                    permanent: formData.permanent,
                    message: `New application from ${formData.name}`,
                },
                'hDzqQtESw86Hp0onJ'
            );

            // Reset the form after successful submission
            setFormData(defFormData);
            toast.success('Form submitted and email sent to HR!');
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong while submitting.');
        }
    };

    return (
        <div className="min-h-screen pt-32 bg-green-950 text-white flex flex-col xl:flex-row items-center justify-center px-6 py-12 gap-12">
            {/* Contact Info Section */}
            <div className="w-full xl:w-1/2 mx-auto xl:sticky top-32">
                <div className='xl:min-h-screen xl:pt-16'>
                    <div className='space-y-6'>
                        <h2 className="text-2xl font-bold leading-relaxed">
                            LET’S TALK ABOUT WHAT<br />
                            WE CAN MAKE, BUILD,<br />
                            SCALE TOGETHER
                        </h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-green-600" />
                                <span>{details.sitePhone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-green-600" />
                                <span>{details.siteEmail}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-green-600" />
                                <span>{details.siteAddress}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Form Section */}
            <form onSubmit={handleSubmitEmail} className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Form Fields */}
                {[{ name: "name", label: "Name*", type: "text" },
                { name: "dob", label: "Date of Birth*", type: "date" },
                { name: "father", label: "Father’s Name*", type: "text" },
                { name: "mother", label: "Mother’s Name*", type: "text" },
                { name: "nationality", label: "Nationality*", type: "text" },
                { name: "nid", label: "NID/Birth/Passport No.*", type: "text" },
                { name: "religion", label: "Religion*", type: "text" },
                { name: "profession", label: "Profession*", type: "text" },
                { name: "contact", label: "Contact Number*", type: "text" },
                { name: "email", label: "Email*", type: "email" },
                { name: "mailing", label: "Mailing Address*", type: "text" },
                { name: "permanent", label: "Permanent Address*", type: "text" },
                { name: "resumeCV", label: "Link of Resume (CV)*", type: "text" },
                ].map(({ name, label, type }) => (
                    <label key={name}>
                        {label}
                        <input
                            name={name}
                            type={type}
                            required
                            className="formInput"
                            value={formData[name]}
                            onChange={handleChange}
                        />
                    </label>
                ))}

                {/* Gender & Marital Status */}
                <label>
                    Gender*
                    <select name="gender" required className="formInput text-white border border-white" value={formData.gender} onChange={handleChange}>
                        <option value="">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </label>

                <label>
                    Marital Status*
                    <select name="marital" required className="formInput text-white border border-white" value={formData.marital} onChange={handleChange}>
                        <option value="">Select</option>
                        <option>Single</option>
                        <option>Married</option>
                    </select>
                </label>

                {/* Photo Upload */}
                <label>
                    Photo*
                    <input name="photo" type="file" required className="formInput text-white" onChange={handleChange} />
                </label>

                {/* Submit Button */}
                <div className="col-span-2 md:col-span-2 flex flex-col md:flex-row gap-4 mt-4">
                    <button
                        type="submit"
                        className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 py-2 rounded-md font-semibold"
                    >
                        Submit
                    </button>
                    {/* <a
                        href={`https://wa.me/${details.whatsapp || ''}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-1/2 bg-green-500 hover:bg-green-600 py-2 rounded-md font-semibold text-center"
                    >
                        WhatsApp
                    </a> */}
                </div>
            </form>
        </div>
    );
};

export default Application;
