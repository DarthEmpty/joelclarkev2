import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/typewriter";

const FACE_IMAGE_PATH = "/images/face.jpg";
const CV_PATH = "/SoftEngCV.pdf";
const ROLES = [
  "Software Engineer",
  "IT Technician",
  "Writer",
  "Artist",
  "Actor",
  "Improv Comedian",
  "Runner",
  "Musician",
];

const Home = () => (
  <main className="flex flex-col mx-auto h-screen">
    <div className="md:grow" />
    <div className="md:shrink md:flex md:mx-auto md:content-center md:gap-x-10 md:justify-center">
      <Image
        src={FACE_IMAGE_PATH}
        alt="Me!"
        width={100}
        height={100}
        className="object-cover size-64 rounded-3xl mx-auto my-7 md:mx-0 md:my-0"
      />

      <div className="w-64 mx-auto flex flex-col md:w-full md:mx-0">
        <Typewriter
          texts={ROLES}
          className="text-xl font-semibold text-accent-light md:text-3xl"
        />
        <p className="md:text-lg">Hello - I&apos;m Joel!</p>
        <p className="md:text-lg">Welcome to my corner of the internet.</p>
        <div className="md:grow" />
        <Link
          className="mt-4 p-1 text-center bg-accent-dark active:bg-accent-light md:hover:bg-accent-light md:active:bg-accent-dark rounded-3xl md:mr-36"
          href={CV_PATH}
        >
          Check out my CV!
        </Link>
      </div>
    </div>
    <div className="md:grow" />
  </main>
);

export default Home;
