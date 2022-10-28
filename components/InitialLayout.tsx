import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export const InitialLayout = () => {
  return (
    <div className="relative pb-56 border-2 border-white">
      <div className="relative text-center text-9xl">
        <h1 className="">Digital</h1>
        <h1 className="pr-36">Agency</h1>
        <div className="absolute top-0 left-24 md:left-24 lg:left-52 xl:left-72">
          <div className="w-48 h-32">
            <Image
              src="/worldClass.png"
              alt=""
              width={700}
              height={475}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 max-w-lg pr-32 mx-auto">
        <p className="text-lg">Full-service design support that growing B2B companies need. World leading agency.</p>
        <button className="w-48 flex items-center justify-center h-14 mt-10 text-lg bg-yellow-500 text-black rounded-full">
          Our Project <ArrowUpRightIcon className="w-4 h-4 ml-3" />
        </button>
      </div>
      <div className="mt-10 mx-auto "></div>
      <div className="absolute top-44 right-20 md:right-24 lg:right-32 ">
        <div className="relative max-w-md w-80">
          <Image
            src="/heroImage.png"
            alt=""
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-20 md:right-24 lg:left-9 ">
        <div className="relative w-64">
          <Image
            src="/SideImage.png"
            alt=""
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};
