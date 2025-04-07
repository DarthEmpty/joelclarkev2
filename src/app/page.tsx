import Typewriter from "@/components/typewriter";
import Image from "next/image";

const faceImage = "/images/face.jpg";

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
        src={faceImage}
        alt="Me!"
        width={100}
        height={100}
        className="object-cover mx-auto my-10 size-64 rounded-3xl"
      />

      <div className="mx-auto max-w-64">
        <Typewriter
          texts={["Software Engineer", "Artist", "Writer", "Actor"]}
        />
      </div>
    </HomeSection>
  </main>
);

export default Home;
