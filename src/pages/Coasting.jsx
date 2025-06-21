import { Lightbulb, LineChart } from 'lucide-react'
import React from 'react'

function Coasting() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-50 via-white to-purple-50">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
        How We Do It <span className="text-blue-600">Within Affordable Costing</span>
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        We harness open-source tools, smart workflows, and scalable systems to deliver quality solutions without breaking your budget.
      </p>
  
      <div className="grid md:grid-cols-2 gap-10 text-left">
        <div className="flex items-start space-x-4">
          <div className="p-4 bg-blue-100 rounded-xl shadow-md">
            <Lightbulb className="text-blue-600 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Smart Use of Resources</h3>
            <p className="text-gray-700">
              We reuse proven components, write clean code, and choose the right tech stack to keep costs down.
            </p>
          </div>
        </div>
  
        <div className="flex items-start space-x-4">
          <div className="p-4 bg-purple-100 rounded-xl shadow-md">
            <LineChart className="text-purple-600 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Model</h3>
            <p className="text-gray-700">
              Transparent pricing, pay-as-you-grow plans, and long-term support — helping you scale wisely and affordably.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Coasting
