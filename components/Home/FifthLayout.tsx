import Image from 'next/image';
import { Button } from '../General/button';

export const FifthLayout = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div>
        <h2 className="text-center">Our Latest Projects</h2>
        <ul className="flex justify-between max-w-md mx-auto mt-4">
          <li>All</li>
          <li className="text-yellow-500">UI/UX</li>
          <li>Web Design</li>
          <li>Branding</li>
          <li>Interaction</li>
        </ul>
      </div>
      <div className="flex justify-between mt-12">
        <div className="max-w-xl">
          <Image src="/Rectangle12.png" alt="" width={554} height={120} />
          <h2 className="text-2xl max-w-sm mt-8">Talent.com - Logo, Full Redesign and Branding</h2>
          <p className="text-base text-zinc-200 mt-7 pr-8">
            Talent.com a new brand identity using their core values of optimism, transparency and approachability as
            inspiration. As a result, we were able to create the most streamlined
          </p>
        </div>
        <div>
          <Image src="/Rectangle13.png" alt="" width={554} height={120} />
          <h2 className="text-2xl max-w-sm mt-8">Bonfire - Landing Page Design Webby Awards Nomination</h2>
          <p className="text-base text-zinc-200 mt-7 pr-8">
            Pretty excited to announce that we just got nominated at the Webby Awards! easy to understand and to use
            should be essential for every business owner who uses their website.
          </p>
        </div>
      </div>
      <div className="w-56 mx-auto mt-12">
        <Button text="Read More" />
      </div>
    </div>
  );
};
