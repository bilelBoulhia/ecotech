'use client';

import { FaArrowRight } from 'react-icons/fa';

import * as React from "react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}


const FadeBlurInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
         <div className="relative w-full">
                    <input
                        type="text"

                        className='w-full p-2 pr-10 pl-5 text-gray-100 bg-slate-800   rounded-full focus:outline-none'
                        ref={ref}
                        {...props}
                    />
                    <button
                        id="send-button"
                        className='absolute right-1 top-1/2 transform -translate-y-1/2 p-1 text-white rounded-full focus:outline-none  bg-white/20 '

                    >
                        <FaArrowRight size={28} className="backdrop-blur-sm rounded-full p-2" />

                    </button>



                </div>


    );
    });

export default FadeBlurInput;