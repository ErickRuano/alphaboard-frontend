import { useState } from 'react';
import Head from 'next/head'
import {Logo}  from '../components/Logo'
import ProgressBar from  '../components/ProgressBar'
import Link from 'next/link';
// import { useUser, UserButton } from '@clerk/nextjs';

const Layout = ({children, name, button, description, loading = false}) => {
    return (
        <div className="h-screen overflow-hidden flex flex-col">
            <Head>
                <title>{name} - AlphaBoard: NFT-gated private platform for your alpha groups.</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            {/* <div className='px-10 w-full mx-auto'>
                <nav className="w-full py-5 flex justify-between items-center">
                    <Logo />
                    <div className="flex gap-5 items-center">
                        <Link href="https://github.com/ErickRuano/thirdauth-frontend">
                            <a className='text-white text-base cursor-pointer hover:text-primary-600 font-bold'>
                                <img src={`/images/landing-image-rounded.png`} alt="Github Logo" className='noMargin h-8'/>
                            </a>
                        </Link>
                    </div>
                </nav>
            </div> */}
            {
                loading && <div className="h-1 w-full relative">
                    <ProgressBar />
                </div>
            }
            {
                !loading && <div className='overflow-y-scroll w-full mx-auto py-20 px-20 2xl:px-0' >
                <div className="max-w-screen-2xl m-auto">
                    <div className="flex flex-col justify-center items-center">
                        <div className='flex flex-col text-center'>
                            <h1 className='mb-2'>{name}</h1>
                            <span className=''>{description}</span>
                        </div>
                        {button}
                    </div>
                    <div className="mb-10"></div>
                    {children}
                </div>
            </div>
            }
        </div>
      );
}
  
export default Layout;