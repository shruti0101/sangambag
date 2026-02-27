import React from 'react'

const Addons = () => {
  return (
    <div>
          {/* features */}

      <div className="w-full  mx-auto  bg-[#DCFAEA] rounded-2xl py-8 ">
        <div className=" mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <img src="/3.webp" className="h-18 w-18" />
            <p className="font-semibold text-gray-900 text-xl">ISO 50001</p>
            <p className="text-gray-800 text-lg">Certification</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img src="/gem.png" className="h-25 w-38" />
        
            <p className="text-gray-800 text-lg">GEM Aprroved Products</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/4.webp" className="h-18 w-18" />
            <p className="font-semibold text-gray-900 text-xl">Renewable</p>
            <p className="text-gray-800 text-lg">Power Usage</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/2.webp" className="h-18 w-18" />
            <p className="font-semibold text-gray-900 text-xl">Waste</p>
            <p className="text-gray-800 text-lg">Management</p>
          </div>

          <div className="hidden md:flex flex-col items-center gap-2">
            <img src="/5.webp" className="h-18 w-18" />
            <p className="font-semibold text-gray-900 text-xl">CII Certified</p>
            <p className="text-gray-800 text-lg">Green Products</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addons