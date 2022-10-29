import { EigththLayout } from '../components/Home/EigththLayout';
import { FifthLayout } from '../components/Home/FifthLayout';
import { Footer } from '../components/Home/Footer';
import { FourthLayout } from '../components/Home/FourthLayout';
import { InitialLayout } from '../components/Home/InitialLayout';
import { Navbar } from '../components/Home/Navbar';
import { SecondLayout } from '../components/Home/SecondLayout';
import { SeventhLayout } from '../components/Home/SeventhLayout';
import { SixthLayout } from '../components/Home/SixthLayout';
import { ThirdLayout } from '../components/Home/ThirdLayout';

export default function Home() {
  return (
    <div className="mainBg">
      <div className="max-w-screen-1/2xl mainBg pb-24 mx-auto text-white font-inter">
        <div className="md:h-screen mx-auto pt-10">
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
        <EigththLayout />
      </div>
      <Footer />
    </div>
  );
}
