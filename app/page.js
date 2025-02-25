import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 text-white">
      <h1 className="text-4xl font-bold mb-6">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      
      <div className="flex flex-col gap-2">
        <Link href="/week-2" className="hover:text-green-400">
          Week 2 Assignment
        </Link>
        <Link href="/week-3" className="hover:text-green-400">
          Week 3 Assignment
        </Link>
        <Link href="/week-4" className="hover:text-green-400">
          Week 4 Assignment
        </Link>
        <Link href="/week-5" className="hover:text-green-400">
          Week 5 Assignment
        </Link>
      </div>
    </div>
  );
}

