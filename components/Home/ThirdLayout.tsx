import Image from 'next/image';
import { IconAndText } from './IconAndText';

export const ThirdLayout = () => {
  return (
    <div className="relative">
      <div className="flex relative pt-24 pb-20 px-8 z-20">
        <div className="z-20">
          <Image src="/Rectangle4.png" alt="" width={650} height={120} className="z-40" />
        </div>
        <div className="ml-14 max-w-xl pt-12 z-20">
          <h1 className="text-5xl font-bold">Our Solution Approach</h1>
          <div className="space-y-6 mt-12">
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
      <div className="absolute top-0 z-10 h-full w-full flex">
        <div className="bg-yellow-500 w-5/12 h-full "></div>
        <div className="bg-custom w-7/12 h-full"></div>
      </div>
    </div>
  );
};
