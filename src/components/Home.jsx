import React from 'react'
import NavBar from '../ui/NavBar'
import Features from './Features'
import Pricing from './Pricing'
import Testimonials from './Testinmonials'
import Footer from '../ui/Footer'

function Home() {
  return (
    <div className='min-h-screen relative bg-white font-sans'>

        <NavBar/>

        <section className="lg:flex flex flex-col lg:flex-row items-center justify-between xl:px-28 lg:px-20 py-20 bg-gradient-to-r from-white to-indigo-100">
        <div className="lg:max-w-xl  w-9/12 lg:flex  lg:order-first mt-6 lg:mt-0 order-last justify-end items-center mb-10 md:mb-0">
          <div className="mx-auto xl:w-fit w-full lg:w-2/3 xl:pl-16  flex-col ">
            <h1 className="xl:text-5xl lg:text-2xl md:text-xl font-extrabold text-gray-900 mb-6 leading-tight">
              Build the Next Great <br /> Thing
            </h1>
            <p className="lg:text-lg md:text-base text-sm text-gray-600 xl:mt-16 xl:mb-6 lg:mt-10 lg:mb-2">
              Are you ready to start your adventure and start building the next greatest SAAS app on the market?
            </p>
            <button className="bg-indigo-500 text-white xl:px-6 xl:py-3 lg:px-3 mt-4 lg:py-2 px-3 py-1 xl:text-base text-xs lg:text-sm rounded shadow-md hover:bg-indigo-600">
              Signup Today!
            </button>
            <div className="mt-10 text-gray-500 text-xs lg:text-sm">
              INTEGRATES WITH
              <div className="flex gap-6 mt-2">
                <img src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" alt="Stripe" className="h-5 lg:text-base md:text-xs text-[10px]" />
                <img src="https://cdn.worldvectorlogo.com/logos/vimeo-icon.svg" alt="Vimeo" className="h-5 lg:text-base md:text-xs text-[10px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Image with Logo */}
        <div className="w-9/12 xl:w-1/2  order-first lg:order-last lg:w-1/2">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Laptop"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-indigo-800 bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-3xl font-bold flex items-center gap-2">
                <span className="text-4xl">⛰️</span> Project-R
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features component  */}
      <Features/>

      {/* Pricing compoent */}
      <Pricing/>

      {/* Testmonials */}
      <Testimonials/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Home