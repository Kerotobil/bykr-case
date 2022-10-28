import Image from 'next/image';
import { Button } from './General/button';

export const InitialLayout = () => {
  return (
    <div className="relative pb-56 ">
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
        <Button text="Our Project" />
      </div>
      <div className="mt-10 mx-auto "></div>
      <div className="absolute top-44 right-20 md:right-24 lg:right-10 ">
        <div className="relative">
          <Image src="/heroImage.png" alt="" width={448} height={475} />
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
