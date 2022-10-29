import Image from 'next/image';
import { Button } from '../General/button';

export const FifthLayout = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8 md:mt-28">
      <div>
        <h2 className="text-center">Our Latest Projects</h2>
        <ul className="flex justify-between max-w-xs md:max-w-md mx-auto mt-4">
          <li>All</li>
          <li className="text-yellow-500">UI/UX</li>
          <li>Web Design</li>
          <li>Branding</li>
          <li>Interaction</li>
        </ul>
      </div>
      <div className="flex space-x-4 px-8 pb-8 md:pb:0 mx-auto md:justify-between overflow-auto mt-12">
        <div className="flex-none w-80 md:w-auto md:max-w-lg">
          <Image src="/Rectangle12.png" alt="" width={554} height={120} />
          <div className="hidden md:block">
            <h2 className="text-2xl max-w-sm mt-8">Talent.com - Logo, Full Redesign and Branding</h2>
            <p className="text-base text-zinc-200 mt-7 pr-8">
              Talent.com a new brand identity using their core values of optimism, transparency and approachability as
              inspiration. As a result, we were able to create the most streamlined
            </p>
          </div>
        </div>
        <div className="flex-none w-80 md:w-auto md:max-w-lg">
          <Image src="/Rectangle13.png" alt="" width={554} height={120} />
          <div className="hidden md:block">
            <h2 className="text-2xl max-w-sm mt-8">Bonfire - Landing Page Design Webby Awards Nomination</h2>
            <p className="text-base text-zinc-200 mt-7 pr-8">
              Pretty excited to announce that we just got nominated at the Webby Awards! easy to understand and to use
              should be essential for every business owner who uses their website.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-56 mx-auto mt-12">
        <Button text="Read More" />
      </div>
    </div>
  );
};
