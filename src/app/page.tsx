import Typewriter from "@/components/typewriter";
import Image from "next/image";

const FACE_IMAGE_PATH = "/images/face.jpg";

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

      <div className="w-64 mx-auto md:w-full md:mx-0">
        <Typewriter
          texts={[
            "Software Engineer",
            "IT Technician",
            "Writer",
            "Artist",
            "Actor",
            "Improv Comedian",
            "Runner",
            "Musician",
          ]}
          className="text-xl font-semibold text-accent-light md:text-3xl"
        />
        <p className="md:text-lg">Hello - I&apos;m Joel!</p>
        <p className="md:text-lg">Welcome to my corner of the internet.</p>
      </div>
    </div>
    <div className="md:grow" />
  </main>
);

export default Home;
