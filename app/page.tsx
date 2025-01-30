import Link from "next/link";

export default function page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      this  is Avinash Suthar 
      
      <Link href="/home">Go to home page</Link>
    </div>
  );
}
