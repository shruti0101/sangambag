"use client"
import { useState } from "react"
import Enquiry from "@/components/Enquiry"

const Stickybutton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      {/* Floating Social + Inquiry Section */}
      <div className="fixed top-50 right-0 z-50 flex flex-col items-center ">
        {/* Inquiry Button */}
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-red-500 text-white cursor-pointer font-semibold px-4 py-2 text-lg shadow-lg rounded-tl-md rounded-bl-md -rotate-90 origin-bottom-right hover:scale-105 transition mr-[-1px]"
        >
          Inquiry
        </button>
      </div>

      {/* Pass isOpen + onClose to ContactForm */}
      {isFormOpen && (
        <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </>
  )
}

export default Stickybutton
