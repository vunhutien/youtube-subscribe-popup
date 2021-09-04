import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react';
export default function Home() {

  const [isSubscribed, setSubscribed] = useState(false);
  const [isRingTheBell, setIsRingTheBell] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
    setTimeout(() => {
      //setIsShow(false);
    },5000);
  },[]);
  return (

    <div className="bg-blue-500 w-screen h-screen flex justify-center items-center flex-col">
      <Transition 
      show={isShow}
      enter="transition-all duration-[1500ms]"
      enterFrom="opacity-0 translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all duration-[1500ms]"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-full">
        <div className="w-[700px] bg-white rounded-xl p-5 pt-0 flex flex-col">
          <img src="images/YouTube-Logo.png" className="w-28"/>
          <div className="flex space-x-5 items-center justify-between">
            <div className="flex space-x-5 items-center">
              {/* Logo */}
              <img src="images/me-200.jpg" className="rounded-full w-20 h-20"/>
              {/* Channel Name & slogan */}
              <div>
                <h1 className="text-3xl font-bold">Coding with Tien</h1>
                <h2 className="text-lg text-gray-500">Just the way I did something!</h2>
              </div>
            </div>
            {/* Subscribe button and bell */}
            <div className="flex space-x-3 items-center justify-end ml-auto relative">
              <button 
              onClick={() => {setSubscribed(!isSubscribed)}}
              className={`text-white px-5 py-2 rounded text-lg
              font-bold uppercase
              ${isSubscribed ? 'bg-gray-300' : 'bg-red-500'}`}>
                {isSubscribed ? 'subscribed' : 'subscribe'}
              </button>
              
              {
                isRingTheBell ? 
                <svg onClick={() => {setIsRingTheBell(!isRingTheBell)}} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#666"><path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"/>
                </svg>
                : <svg onClick={() => {setIsRingTheBell(!isRingTheBell)}} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#999">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                  </svg>
              }


            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}
