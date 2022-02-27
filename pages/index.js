import Head from 'next/head'

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
        <button className="btn btn-primary btn-outline">Sign in with MetaMask</button>
        </div>
      </header>

      <main className={`w-full h-full flex flex-col lg:flex-row p-10 lg:px-0 gap-10 max-w-screen-2xl m-auto`}>
        <div className={`w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left`}>
          <h1 className={`text-4xl mb-5`}>Get a NFT-gated private platform for your alpha groups</h1>
          <p className={`text-xl text-gray-600 text-info-content`}>Create a group, send unique NFTs to your partners, and start sharing NFT projects and insights.</p>
        </div>
        <div className={`w-full h-full lg:w-1/2 flex flex-row justify-center items-start bg-center lg:bg-right-top bg-no-repeat bg-contain	`} style={{backgroundImage: `url(/images/landing-image-rounded.png)`}}>
          <img src='/images/landing-image-rounded.png' className={`hidden`} alt="Image of NFTs collection" />
        </div>
      </main>

      <footer className={``}>

      </footer>
    </div>
  )
}
