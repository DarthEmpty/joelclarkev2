import Typewriter from "@/components/typewriter";
import Image from "next/image";

const FACE_IMAGE_PATH = "/images/face.jpg";

interface HomeSectionProps {
  children: React.ReactNode;
}

const HomeSection = (props: HomeSectionProps) => (
  <section className="container h-screen">{props.children}</section>
);

const Home = () => (
  <main>
    <HomeSection>
      <Image
        src={FACE_IMAGE_PATH}
        alt="Me!"
        width={100}
        height={100}
        className="object-cover mx-auto my-10 size-64 rounded-3xl"
      />

      <div className="mx-auto w-64">
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
        />
      </div>
    </HomeSection>
  </main>
);

export default Home;
