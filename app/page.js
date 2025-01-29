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
      </div>
    </div>
  );
}
