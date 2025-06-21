import React from 'react'

function Allservices({ details = {} }) {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
               {"services" in details && details.services.map((service, index) => (
                   <JackInTheBox cascade key={index}>
                       <Link
                                   to={`/pricing`}
                           className="!block text-center shadow-lg p-6 rounded-lg border border-gray-300 transform hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_5px_theme(colors.primary.DEFAULT),0_0_20px_theme(colors.primary.DEFAULT)] hover:cursor-pointer group relative"
                       >
                           <div className="!absolute mx-4 inset-0 !flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                               <div
                                   className="!block w-full text-lg font-semibold text-primary rounded-sm text-gray-500 py-2  border-gray-200 hover:bg-gray-100">
                                   <span>See Pricing</span>
                               </div>
                           </div>
                           <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                               <div>
                                   <img src={service.image} alt={service.title} className="w-full object-cover h-60 max-xl:h-32 max-xl:w-32 mx-auto bg-white rounded-md mb-2" />
                               </div>
                               <div className="text-xl font-semibold">{service.title}</div>
                               <div className="my-4 text-xs">{service.description}</div>
                           </div>
                       </Link>
                   </JackInTheBox>
   
               ))}
           </div>
  )
}

export default Allservices
