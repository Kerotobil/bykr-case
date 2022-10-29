import { FifthLayout } from '../components/Home/FifthLayout';
import { FourthLayout } from '../components/Home/FourthLayout';
import { InitialLayout } from '../components/Home/InitialLayout';
import { Navbar } from '../components/Home/Navbar';
import { SecondLayout } from '../components/Home/SecondLayout';
import { SeventhLayout } from '../components/Home/SeventhLayout';
import { SixthLayout } from '../components/Home/SixthLayout';
import { ThirdLayout } from '../components/Home/ThirdLayout';

export default function Home() {
  return (
    <div className="max-w-screen-1/2xl mainBg mx-auto text-white font-inter">
      <div className=" h-screen mx-auto pt-10">
        <Navbar />
        <div className="mt-16">
          <InitialLayout />
        </div>
      </div>
      <SecondLayout />
      <ThirdLayout />
      <FourthLayout />
      <FifthLayout />
      <SixthLayout />
      <SeventhLayout />
    </div>
  );
}
