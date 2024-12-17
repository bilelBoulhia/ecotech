'use client';
import { Label } from "@/components/ui/label";

import { signInAction } from "@/app/actions";

import { SubmitButton } from "@/components/submit-button";

import FadeBlurInput from "@/components/ui/Cool-input";
import { FaUserAlt } from "react-icons/fa";
import { PiPasswordLight } from "react-icons/pi";
import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import logo from '@/app/assests/logo.png'
export default  function Login() {
    return (


        <div className="flex flex-row justify-center bg-gradient-to-br from-gray-900 to-gray-800 items-center min-h-screen">

            <div className='min-h-screen gap-[5px] flex-col w-[40%] justify-center items-center flex relative'>
                <Image  src={logo} alt='logo' className='w-auto h-[3rem] p-1 absolute top-0 left-0   ' />

                <div>

                    <Label
                        className='text-xl text-white min-w-[270px] font-bold  text-center  uppercase tracking-wide inline-block  pb-1'>
                        Tableau de bord  <span
                        className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800">administrateur</span>
                    </Label>
                </div>
                <div className='w-[320px] sm:w-[400px] p-[2rem] relative flex flex-col'>
                    <form className='justify-center gap-9 flex-col flex'>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="email" className='text-gray-300 p-2 font-medium'>Nom d'utilisateur</Label>
                            <FadeBlurInput name="email" required Icon={FaUserAlt} placeholder='Entrez votre nom' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="password" className='text-gray-300 p-2 font-medium'>Mot de pass</Label>
                            <FadeBlurInput name="password" required Icon={PiPasswordLight} placeholder='Entrez votre mot de passe' />
                        </div>

                        <SubmitButton
                            className='px-[4rem] self-center bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800  text-white font-semibold transition-all duration-300' pendingText="Signing In..." formAction={signInAction}>
                            Sign-in
                        </SubmitButton>
                        {/*<FormMessage message={searchParams} />*/}
                    </form>
                </div>
            </div>
            <div className='hidden relative lg:block min-h-screen w-[60%]'>

                <div className="min-h-screen relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center">
                    <div className='absolute top-1/2 text-center left-1/2 translate-x-[-50%] translate-y-[-50%] w-full z-20'>
                        <div className="flex flex-col items-center justify-center p-4">


                            <h1 className="text-6xl  font-bold tracking-wider bg-blue-200 bg-clip-text text-transparent">
                                <span>Meteo </span>{" "}
                                <span>Algerie</span>
                            </h1>
                            <div className="mt-4 text-md font-medium uppercase tracking-[0.5em] bg-blue-400 bg-clip-text text-transparent">
                                office National de la Meteorologie
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 w-full h-full bg-gray-900 z-20 [mask-image:linear-gradient(transparent,white)] pointer-events-none"/>

                </div>
                <BackgroundBeamsWithCollision/>
            </div>

        </div>
    );
}