import Head from 'next/head'
import {Button, Avatar} from '@components'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={`w-screen h-screen flex flex-col justify-start items-start overflow-hidden transition-all ease-in-out duration-150`}>
      <Head>
        <title>AlphaBoard</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='w-full flex p-10 items-center justify-between'>
        <div className='logo text-4xl font-extrabold hover:cursor-pointer'><span className='text-primary'>Alpha</span>Board</div>
        <div>
        {/* <button className="btn btn-primary btn-outline">Sign in with MetaMask</button> */}
        <Link href="/groups">
            <a>
              <Button className="btn-primary btn-outline" >
                Sign in with MetaMask
              </Button>
            </a>
          </Link>
        </div>
      </header>

      <main className={`w-full h-full flex flex-col lg:flex-row p-10 gap-10 max-w-screen-2xl m-auto`}>
        <div className={`w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left grow-0`}>
          <h1 className={`mb-5`}>Get a NFT-gated private platform for your alpha groups</h1>
          <p className={`text-xl text-gray-600 text-info-content`}>Create a group, send unique NFTs to your partners, and start sharing NFT projects and insights.</p>
        </div>
        <div className={`w-full h-full lg:w-1/2 flex flex-row items-center justify-center 2xl:justify-between overflow-hidden gap-10 flex-wrap relative grow-0`} >
          {[0,1,2,3].map((item, index) => <div className="w-50 h-50 p-5 bg-base-content rounded-2xl" key={index}>
            <Avatar {...{width:275, height:275}} />
          </div>) }
          <img src='/images/landing-image-rounded.png' className={`hidden`} alt="Image of NFTs collection" />
        </div>
      </main>

      <footer className={``}>

      </footer>
    </div>
  )
}
