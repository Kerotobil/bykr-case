import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-around mt-10">
        <Link href="/firstStep">
          <div className=" group border border-gray-400 hover:border-yellow-600 px-6 py-3 cursor-pointer">
            <h2 className="group-hover:text-yellow-500">First Step</h2>
            <h3 className="mx-10 text-xl text-center group-hover:text-yellow-500">Figma Design</h3>
          </div>
        </Link>
        <Link href="/countries">
          <div className=" group border border-gray-400 hover:border-yellow-600 px-6 py-3 cursor-pointer">
            <h2 className="group-hover:text-yellow-500">Second Step</h2>
            <h3 className="mx-10 text-xl text-center group-hover:text-yellow-500">Countries</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
