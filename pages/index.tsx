import { InitialLayout } from '../components/InitialLayout';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div className="mainBg mx-auto text-white">
      <div className="max-w-7xl h-screen mx-auto pt-10">
        <Navbar />
        <div className="mt-16">
          <InitialLayout />
        </div>
      </div>
    </div>
  );
}
