import Image from 'next/image';
import { IconAndText } from './IconAndText';

export const ThirdLayout = () => {
  return (
    <div className="relative">
      <div className="flex flex-col-reverse md:flex-row relative pt-0 md:pt-24 pb-20 px-8 z-20">
        <div className="relative z-20 mt-10 md:mt-0">
          <Image src="/Rectangle4.png" alt="" width={650} height={120} className="z-40" />
          <div className="md:hidden absolute right-0 -bottom-28 bg-yellow-500 h-96 w-96 -z-10"></div>
          <div className="md:hidden absolute left-0 -bottom-28 bg-yellow-500 h-96 w-96 -z-10"></div>
        </div>
        <div className="md:ml-14 max-w-xl md:pt-12 z-20">
          <h1 className="text-2xl md:text-5xl font-bold">Our Solution Approach</h1>
          <div className="space-y-12 mt-12">
            <IconAndText
              title="Data Analysis with problem factor"
              text="Delivering the spatial expertise of the largest, most sophisticated performance marketing agencies, while providing intimate, boutique-like support."
            />
            <IconAndText
              title="Functionality solution for users"
              text="Delivering the spatial expertise of the largest, most sophisticated performance marketing agencies."
            />
            <IconAndText
              title="Latest technology enabled"
              text="Technology the spatial expertise of the largest, most sophisticated performance marketing agencies, while providing intimate, boutique-like support."
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute top-0 z-10 h-full w-full">
        <div className="bg-yellow-500 w-5/12 h-full "></div>
        <div className="bg-custom w-7/12 h-full"></div>
      </div>
    </div>
  );
};
