import Image from 'next/image';
import { Button } from '../General/button';

export const SeventhLayout = () => {
  const contents = [
    {
      imageUrl: '/Rectangle18.png',
      tag: 'TECHNOLOGY',
      author: 'John Doe',
      date: '19 Jan 2022',
      title: 'A small business is only as good as its tools and it is totally true.',
    },
    {
      imageUrl: '/Rectangle19.png',
      tag: 'WEBINER',
      author: 'John Doe',
      date: '19 Jan 2022',
      title: 'Colaboration with team members that will be grow to business.',
    },
  ];
  return (
    <div className="px-0 md:px-36">
      <div className="flex justify-between px-4 ">
        <h2>Blog From Insight</h2>
        <div className="text-yellow-500 ml-12 w-20 md:hidden">See All</div>
      </div>
      <div className="flex md:justify-between space-x-4 md:space-x-10 mt-10 overflow-x-auto pb-8 md:px-0">
        {contents.map((item, index) => (
          <div className="flex-none md:flex-1 mx-2 w-96" key={index}>
            <Image src={item.imageUrl} alt="" width={554} height={120} />
            <h6 className="bg-stone-100 w-min mx-auto md:mx-0 text-xs px-3 py-1 mt-6 text-black  rounded-lg">
              {item.tag}
            </h6>
            <div className="mt-4 text-center md:text-left text-base">
              <span>{item.author} </span>&bull; <span>{item.date} </span>
            </div>
            <div>
              <h3 className="mt-4 text-center md:text-left px-12 md:px-0">{item.title} </h3>
              <div className="min-w-min w-32 md:w-auto mx-auto">
                <Button text="Read More" bgColor="bg-transparent" borderClasses="border" textClasses="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
