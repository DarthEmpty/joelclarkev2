import Image from "next/image";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary-light dark:bg-primary-dark">
      <NavBar />
    </main>
  );
}
