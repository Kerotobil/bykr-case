import Image from 'next/image';

export const EigththLayout = () => {
  const contents = [
    { imageUrl: '/Rectangle14.png', title: 'Games' },
    { imageUrl: '/Rectangle15.png', title: 'Sports' },
    { imageUrl: '/Rectangle16.png', title: 'Metaverse' },
    { imageUrl: '/Rectangle17.png', title: 'Art' },
  ];
  return (
    <div className="hidden md:block px-44 mt-28">
      <h2>Categories</h2>
      <div className="flex space-x-6 justify-between mt-12">
        {contents.map((item, index) => (
          <div key={index} className="bg-gray-600 rounded-4xl pt-3 px-3 pb-14">
            <Image src={item.imageUrl} alt="" width={225} height={225} />
            <h3 className="mt-14 text-center font-redRose font-semibold">{item.title} </h3>
          </div>
        ))}
      </div>
      <div className="flex space-x-6 justify-between mt-16">
        {contents.map((item, index) => (
          <div key={index} className="bg-gray-600 rounded-4xl pt-3 px-3 pb-14">
            <Image src={item.imageUrl} alt="" width={225} height={225} />
            <h3 className="mt-14 text-center font-redRose font-semibold">{item.title} </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
