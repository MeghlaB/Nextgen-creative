import React from 'react';
const AwardsPage = ({details}) => {
    const awardsData = details.awards
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {awardsData.map((award, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={award.imageUrl}
                            alt={award.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{award.title}</h2>
                            <p className="text-gray-500">{award.year}</p>
                            <p className="mt-2 text-gray-700">{award.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AwardsPage;
