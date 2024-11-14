'use client';
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import FadeBlurInput from "@/components/ui/Cool-input";
import { FaUserAlt } from "react-icons/fa";
import { PiPasswordLight } from "react-icons/pi";
export default  function Login() {
    return (
        <div className="flex flex-row justify-center bg-gradient-to-br from-gray-900 to-gray-800 items-center min-h-screen">
            <div className='min-h-screen gap-[5px] flex-col w-[40%] justify-center items-center flex relative'>

                <div>

                    <Label
                        className='text-xl text-white min-w-[270px] font-bold    uppercase tracking-wide inline-block  pb-1'>
                        evaluation <span
                        className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400">Dashboard</span>
                    </Label>
                </div>
                <div className='w-[320px] sm:w-[400px] p-[2rem] relative flex flex-col'>
                    <form className='justify-center gap-9 flex-col flex'>
                        <div className='flex flex-col gap-2'>
                            <Label className='text-gray-300 p-2 font-medium'>Username</Label>
                            <FadeBlurInput Icon={FaUserAlt} placeholder='Enter your username' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label className='text-gray-300 p-2 font-medium'>Password</Label>
                            <FadeBlurInput Icon={PiPasswordLight} placeholder='Enter your password' />
                        </div>
                        <Button className='px-[4rem] self-center bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold transition-all duration-300' type='submit'>
                            Login
                        </Button>
                    </form>
                </div>
            </div>
            <div className='hidden lg:block min-h-screen w-[60%]'>
                <div className="min-h-screen relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center">
                    <div className='absolute top-1/2 text-center left-1/2 translate-x-[-50%] translate-y-[-50%] w-full z-20'>
                        <div className="flex flex-col items-center justify-center p-4">
                            <h1 className="text-6xl md:text-8xl font-bold tracking-wider bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                                <span>ECO</span>{" "}
                                <span>TECH</span>
                            </h1>
                            <div className="mt-4 text-xl md:text-2xl font-medium uppercase tracking-[0.5em] bg-gradient-to-r from-teal-200 to-cyan-200 bg-clip-text text-transparent">
                                ETS Club | Alger 3
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 w-full h-full bg-gray-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"/>
                    <Boxes/>
                </div>
            </div>
        </div>
    );
}