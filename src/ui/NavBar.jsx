import React,{useState} from 'react'
import logo from "../assets/logo.jpeg"; // Replace with your logo path
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
function NavBar() {
    const[showMenu,setshowMenu] = useState(false)
  return (
    <div>
         <header className="grid xl:grid-cols-9 grid-cols-5 lg:grid-cols-10 gap-5 md:px-10 px-4 py-6 bg-white shadow">
            <div className="xl:col-span-5 col-span-4 lg:col-span-4   xl:text-3xl text-sm lg:text-xl font-bold text-indigo-600  ">
              <img src={logo} alt="Logo" className="md:h-16 md:w-16 h-10 w-10 rounded-full border-2 border-indigo-500 inline-block mr-3" />
              Raiser Precision Products  
            </div>
            <nav className="xl:col-span-3 lg:col-span-4 hidden lg:flex justify-evenly lg:text-lg items-center font-bold ">
              <a href="#" className="hover:text-indigo-600 col-span-1">Home</a>
              <a href="#" className="hover:text-indigo-600 col-span-1">Features</a>
              <a href="#" className="hover:text-indigo-600 col-span-1">Pricing</a>
              <a href="#" className="hover:text-indigo-600 col-span-1">Testimonials</a>
            </nav>
            
            <div className="xl:col-span-1 lg:col-span-2 col-span-1  flex justify-end ">
              {/* <button className="text-pink-500 font-semibold">Login</button> */}
              <div onClick={()=>setshowMenu(!showMenu)} className="lg:hidden  flex items-center mr-2 transition-all-500 justify-center">
              {showMenu?<IoClose className="text-2xl text-indigo-500" />:<MdOutlineMenu className="text-2xl text-indigo-500" />}  
              {/* menu */}

             
            </div>
              <button className="bg-indigo-500 hidden md:block xl:text-base md:text-xs text-[10px] lg:text-sm text-white md:px-3 px-1 py-1 h-1/2 my-auto  rounded hover:bg-indigo-600 transition-all-800">
                Get Started
              </button>
            </div>
          </header>
    
          {/* Side bar starts here */}
          {/* <div className={`${showMenu?'fixed right-0 w-[200px] z-50 h-full bg-indigo-200 ':'fixed right-[-400px] w-[200px] z-50 h-full bg-red-200 top-0'} top-0 transition-all-1000`}> */}
          <div className={`${showMenu?'relative w-full z-50 h-fit bg-white border-t ':'hidden'} transition-all-1000`}>
            <ul className="absolute flex-col w-full z-50 h-fit bg-white border-t items-center text-sm font-semibold py-5  space-y-5">
             
              <li className="w-full text-center">Home</li>
              <li className="w-full text-center">About</li>
              <li className="w-full text-center">Our Services</li>
              <li className="w-full text-center">Pricing</li>
              <li className="w-full text-center">Contacts</li>
    
            </ul>
      
          </div>
          {/* side bar ends here */}
    </div>
  )
}

export default NavBar