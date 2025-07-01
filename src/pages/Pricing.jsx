import { useParams } from "react-router-dom";
import { useState } from "react";

export default function PricingTable({ details = {} }) {
  const { id } = useParams();
  const [isFixed, setIsFixed] = useState(true);
  const [selectedView, setSelectedView] = useState("main"); // "main" or "customize"

  const selectedService = details.services?.find(
    (service) => service.id === id
  );

  const handlePlanToggle = (planType) => {
    setSelectedView("main");
    setIsFixed(planType === "fixed");
  };

  const fixedPlans = ["basic", "standard", "premium"];

  const filteredPlans = selectedService?.pricingPlans?.filter((plan) => {
    const planName = plan.name.toLowerCase();
    const isFixedPlan = fixedPlans.includes(planName);
    return isFixed ? isFixedPlan : !isFixedPlan;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Choose Your Plan</h2>
        <p className="text-gray-500 mb-6">No contracts, no surprise fees.</p>

        {/* Toggle Buttons */}
        <div className="inline-flex bg-white shadow-lg rounded-full p-1 mb-10">
          <button
            onClick={() => handlePlanToggle("fixed")}
            className={`px-6 py-2 rounded-full ${
              isFixed && selectedView === "main"
                ? "bg-green-600 text-white"
                : "text-gray-700"
            }`}
          >
            Fixed
          </button>
          <button
            onClick={() => handlePlanToggle("enterprise")}
            className={`px-6 py-2 rounded-full ${
              !isFixed && selectedView === "main"
                ? "bg-green-600 text-white"
                : "text-gray-700"
            }`}
          >
            Enterprise
          </button>
          <button
            onClick={() => setSelectedView("customize")}
            className={`px-6 py-2 rounded-full ${
              selectedView === "customize"
                ? "bg-green-600 text-white"
                : "text-gray-700"
            }`}
          >
            Customize
          </button>
        </div>

        {/* Content */}
        {selectedView === "customize" ? (
          <p className="text-red-500 text-xl font-medium">Data Not Found</p>
        ) : selectedService ? (
          <div
            className={`grid ${
              filteredPlans.length === 1
                ? "place-items-center"
                : "md:grid-cols-3"
            } gap-8`}
          >
            {filteredPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between w-full max-w-sm"
              >
                <div>
                  <div className="w-4 h-4 bg-green-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>

                  <p className="text-3xl font-bold mb-2">
                    {isFixed
                      ? plan.monthly
                      : plan.discountedPrice?.yearly || plan.yearly}
                    {!isFixed && selectedView === "main" && (
                      <span className="text-sm font-normal text-gray-500 ml-1">
                        monthly
                      </span>
                    )}
                  </p>

                  <ul className="text-gray-700 space-y-2 text-left mt-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500">No service found with this ID.</p>
        )}
      </div>
    </div>
  );
}
