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
    <div className="min-h-screen bg-gray-100 py-12 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Choose Your Plan</h2>
        <p className="text-gray-500 mb-6 text-sm md:text-base">
          No contracts, no surprise fees.
        </p>

        {/* Toggle Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 bg-white shadow-lg rounded-full px-4 py-2 mb-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          <button
            onClick={() => handlePlanToggle("fixed")}
            className={`px-6 py-2 rounded-full transition text-sm md:text-base ${
              isFixed && selectedView === "main"
                ? "bg-green-600 text-white"
                : "text-gray-700"
            }`}
          >
            Fixed
          </button>
          <button
            onClick={() => handlePlanToggle("enterprise")}
            className={`px-6 py-2 rounded-full transition text-sm md:text-base ${
              !isFixed && selectedView === "main"
                ? "bg-green-600 text-white"
                : "text-gray-700"
            }`}
          >
            Enterprise
          </button>
          <button
            onClick={() => setSelectedView("customize")}
            className={`px-6 py-2 rounded-full transition text-sm md:text-base ${
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
            className={`grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center`}
          >
            {filteredPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col justify-between w-full max-w-sm"
              >
                <div>
                  <div className="w-4 h-4 bg-green-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>

                  <p className="text-2xl md:text-3xl font-bold mb-2">
                    {isFixed
                      ? plan.monthly
                      : plan.discountedPrice?.yearly || plan.yearly}
                    {!isFixed && selectedView === "main" && (
                      <span className="text-sm font-normal text-gray-500 ml-1">
                        monthly
                      </span>
                    )}
                  </p>

                  <ul className="text-gray-700 space-y-2 text-left mt-4 text-sm md:text-base">
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
