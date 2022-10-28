import { InitialLayout } from '../components/Home/InitialLayout';
import { Navbar } from '../components/Home/Navbar';
import { SecondLayout } from '../components/Home/SecondLayout';

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
