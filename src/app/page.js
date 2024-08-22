import Image from "next/image";
import Weather from "../app/Weather/index"
import Banner from "../app/Banner/index"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className=" max-w-5xl m-5 w-full text-red-500 items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed  left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Homie Helper App
        </p>
      </div>

      <div>
        <Image
          className="relative border-red-500 m-10 rounded-full ring-5 ring-white dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/house.jpg"
          alt="macon house"
          width= {300}
          height={300}
          priority
        />
      </div>
      
      <div className = "inline-flex p-5 mb-5 justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
       <a href="https://www.airbnb.com/rooms/1226049165383433399?guests=1&adults=1&s=67&unique_share_id=f1150cc4-2e1c-4d48-8c5b-3080f603c3b4">
            <div className="flex items-center gap-x-6">
                  <img alt="Airbnb" src="https://e7.pngegg.com/pngimages/703/597/png-clipart-logo-house-home-house-angle-building-thumbnail.png" className="h-12 w-12 rounded-full" />
              <button
                type="button"
                className="inline-flex  justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
               Rebook
              </button>
            </div>
      </a> 
      </div>
      

      <div>
     
        <Banner />   
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <Weather />
        </div>
    </main>
  );
}
