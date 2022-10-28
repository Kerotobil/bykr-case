import { InitialLayout } from '../components/InitialLayout';
import { Navbar } from '../components/Navbar';
import { FourImage } from '../components/FourImage';
import { SecondLayout } from '../components/SecondLayout';

export default function Home() {
  return (
    <div className="max-w-7xl mainBg mx-auto text-white">
      <div className=" h-screen mx-auto pt-10">
        <Navbar />
        <div className="mt-16">
          <InitialLayout />
        </div>
      </div>
      <SecondLayout />
    </div>
  );
}
