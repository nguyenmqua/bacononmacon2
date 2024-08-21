import Image from "next/image";
import Weather from "../app/Weather/index"
import Banner from "../app/Banner/index"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className=" max-w-5xl m-5 w-full text-red-500 items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Homie Helper App
        </p>
      </div>

      <div>
        <Image
          className="relative border-red-500 m-10 rounded-full ring-5 ring-white dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/house.jpg"
          alt="macon house"
          width={250}
          height={250}
          priority
        />
      </div>

      <div className="mb-32 w-80 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
     
        <Banner />   
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <Weather />
        </div>
    </main>
  );
}
