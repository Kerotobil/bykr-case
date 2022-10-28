import Image from 'next/image';

export const FourImage = () => {
  return (
    <div className="grid grid-cols-2 max-w-2xl gap-x-4 pb-16">
      <div className="justify-self-end pb-4">
        <Image src="/Rectangle6.png" alt="" width={264} height={70} />
      </div>
      <div className="mt-3 self-end">
        <Image src="/Rectangle10.png" alt="" width={220} height={70} />
      </div>
      <div className="justify-self-end">
        <Image src="/Rectangle11.png" alt="" width={220} height={70} />
      </div>
      <div className="mt-3 relative z-20">
        <Image src="/Rectangle9.png" className="z-20" alt="" width={264} height={70} />
        <div className="-z-10 absolute -bottom-16 -right-16">
          <Image src="/Ornament14.png" alt="" width={175} height={35} />
        </div>
      </div>
    </div>
  );
};
