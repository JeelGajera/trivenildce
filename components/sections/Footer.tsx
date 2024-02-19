import { Fragment } from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './colorAnimation.css'; 
export default function Footer() {
  return (
    <Fragment>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto flex flex-wrap">
        
              <div className="w-full lg:w-2/4">
              <div className="flex justify-center">
            <div className="text-center">
                <div className="font-['PP_Right_Sans'] text-4xl font-medium leading-[55px] tracking-[0.04em] text-left w-[380px] h-[55px]">
               
                <div className="container">
  <p className="title  style={{ fontSize: '10px' }}">
    <span className="title-word title-word-1">Are</span>
    <span className="title-word title-word-2">You</span>
    <span className="title-word title-word-3">Ready</span>
    <span className="title-word title-word-4">?</span>
  </p>
</div>
                </div>
                <div className="flex">
                  <div style={{ marginRight: "-10px" }}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Login
                    </button>
                  </div>

                  <div style={{ marginLeft: "35px" }}>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Sign Up
                    </button>
                  </div>
                </div>
                </div> </div>
              </div>
        
          <div className="w-full lg:w-1/4">
            <h3 className="text-lg font-semibold">Sitemap</h3>
            <ul className="mt-4">
              <li className="py-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Events
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-gray-400 hover:text-white">
My Profile                </a>
              </li>
            </ul>
            <h3 className="text-lg font-semibold">Follow us on</h3>
            <div className="flex ">
        
          
          <div className="flex justify-center space-x-4">
            <FaTwitter className="text-blue-500 text-2xl hover:text-blue-700"/>  
            <FaInstagram className="text-pink-500 text-2xl hover:text-pink-700"/>
            <FaLinkedin className="text-blue-800 text-2xl hover:text-blue-900"/>
            <FaFacebook className="text-blue-800 text-2xl hover:text-blue-900"/>
          </div>

       
      </div>
          </div>
          <div className="w-full lg:w-1/4">
            <h3 className="text-lg font-semibold">Address</h3>
            <ul className="mt-4">
              <li className="py-2">
                <a href="#" className="text-gray-400 hover:text-white">
                L.D. College of Engineering
Opp Gujarat University,
Navrangpura, Ahmedabad - 380015.
GUJARAT INDIA
              </a>
              </li>
              </ul>
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="mt-4">
              <li className="py-2">
            
                <a href="#" className="text-gray-400 hover:text-white">
                Phone No: 079 2630 2887
Email: ldce-abad-dte@gujarat.gov.in
                </a>
              </li>
            
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
