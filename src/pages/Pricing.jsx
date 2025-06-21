import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function PricingTable({ details = {} }) {
  const { id } = useParams();
  const [isMonthly, setIsMonthly] = useState(true); 

  const selectedService = details.services ? details.services.find(service => service.id === id) : null;
  console.log(selectedService);

  const handlePlanToggle = (planType) => {
    setIsMonthly(planType === 'monthly');
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Choose Your Plan</h2>
        <p className="text-gray-500 mb-6">No contracts, no surprise fees.</p>
        
        <div className="inline-flex bg-white shadow-lg rounded-full p-1 mb-10">
          <button 
            onClick={() => handlePlanToggle('monthly')}
            className={`px-6 py-2 rounded-full ${isMonthly ? 'bg-green-600 text-white' : 'text-gray-700'}`}>
            Monthly
          </button>
          <button 
            onClick={() => handlePlanToggle('yearly')}
            className={`px-6 rounded-full py-2 ${!isMonthly ? 'bg-green-600 text-white' : 'text-gray-700'}`}>
            Yearly
          </button>
        </div>

        {selectedService ? (
          <div className="grid md:grid-cols-3 gap-8">
            {selectedService.pricingPlans && selectedService.pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-${index === 1 ? 'green-700 text-white' : 'text-white'} rounded-xl shadow-lg p-8 flex flex-col justify-between`}>
                <div>
                  <div className={`w-4 h-4 ${index === 1 ? 'bg-white' : 'bg-green-300'} rounded-full mx-auto mb-4`}></div>
                  <h3 className="text-xl font-semibold mb-2 ">{plan.name}</h3>
                  {/* Adjusting price */}
                  <p className="text-3xl font-bold mb-2 line-through text-gray-400">
                    {isMonthly ? plan.monthly : plan.yearly}
                  </p>
                  <p className="text-3xl font-bold mb-2">
                    {/* Display discounted price */}
                    {isMonthly ? plan.discountedPrice?.monthly || plan.monthly : plan.discountedPrice?.yearly || plan.yearly} 
                    <span className="text-sm font-normal text-gray-500">/{isMonthly ? 'Month' : 'Year'}</span>
                  </p>
                  <p className={`mb-6 ${index === 1 ? 'text-purple-100' : 'text-gray-500'}`}>{plan.description}</p>
                  <ul className="text-gray-700 space-y-2 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No service found with this ID</p>
        )}
      </div>
    </div>
  );
}
