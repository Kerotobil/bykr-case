import Image from 'next/image';
import { Button } from '../General/button';

export const InitialLayout = () => {
  return (
    <div className="relative pb-56 ">
      <div className="relative md:text-center text-7xl md:text-8xl lg:text-9xl font-extrabold">
        <h1 className="ml-28 md:ml-0">Digital</h1>
        <h1 className="ml-8 md:ml-0 md:pr-36">Agency</h1>
        <div className="absolute top-0 left-0 md:left-24 lg:left-52 xl:left-72">
          <div className="w-28 h:14 md:w-36 lg:w-48 md:h-32">
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
      <div className="mt-10 max-w-sm px-6 md:max-w-lg md:pr-32 mx-auto">
        <p className="text-lg text-zinc-200">
          Full-service design support that growing B2B companies need.
          <span className="hidden md:block"> World leading agency.</span>
        </p>
        <div className="hidden md:block">
          <Button text="Our Project" />
        </div>
        <div className="md:hidden block">
          <Button text="Our Work" />
        </div>
      </div>
      <div className="mt-10 mx-auto "></div>
      <div className="hidden md:block lg:absolute lg:top-44 md:right-24 lg:right-10 ">
        <div className="relative">
          <Image src="/heroImage.png" alt="" width={448} height={475} />
        </div>
      </div>
      <div className="mx-auto md:hidden">
        <Image src="/heroImage.png" alt="" className="mx-auto" width={320} height={475} />
      </div>
      <div className="ml-8 mt-16 lg:ml-0 lg:mt:0 lg:absolute bottom-0 lg:right-20 md:right-24 lg:left-9 ">
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
