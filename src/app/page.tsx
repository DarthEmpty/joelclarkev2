import { Strong } from "@/components/typography";

interface HomeSectionProps {
  heading: string;
  children: React.ReactNode;
}

const HomeSection = (props: HomeSectionProps) => (
  <div className="min-w-full odd:bg-secondary-light even:bg-primary-light dark:odd:bg-secondary-dark dark:even:bg-primary-dark">
    <section className="md:text-xl md:container md:mx-auto space-y-5 md:space-y-8 p-12 xl:px-96 md:py-24">
      <h1 className="text-4xl md:text-6xl font-semibold capitalize text-accent-dark">
        {props.heading}
      </h1>
      {props.children}
    </section>
  </div>
);

const Home = () => (
  <main>
    <HomeSection heading="Welcome!">
      <p>
        Hey there! My name is <Strong>Joel</Strong> - a creative and diligent
        software developer who&apos;s motivated to learn, help people, and make
        a difference.
      </p>
    </HomeSection>

    <HomeSection heading="Programmer">
      <p>
        I studied <Strong>Computer Science</Strong> at Royal Holloway University
        and am still very eager to break into the{" "}
        <Strong>Software Development</Strong> scene.
      </p>
      <p>
        My skillset includes <Strong>Python 3</Strong>, <Strong>VueJS</Strong>,
        and <Strong>NextJS</Strong> (which I used to create this website!).
      </p>
    </HomeSection>

    <HomeSection heading="Technician">
      <p>
        I currently work as an <Strong>IT Service Desk Technician</Strong> in
        the NHS - a very fast paced environment where efficiency, accuracy, and
        communication really matter.
      </p>
    </HomeSection>

    <HomeSection heading="Artist">
      <p>
        I been known to draw in my spare time, using a variety of mediums to
        create art. I have experience using traditional mediums - like{" "}
        <Strong>pencil</Strong> and <Strong>Ink</Strong> - as well as using
        digital art programs - like <Strong>Affinity Designer</Strong> and{" "}
        <Strong>Clip Studio Paint</Strong>.
      </p>
    </HomeSection>

    <HomeSection heading="Writer">
      <p>
        I&apos;m in the very early stages of creating a graphic novel called{" "}
        <Strong>Martyr</Strong>, a low fantasy story about a girl, her purpose,
        and the growing tensions on her island.
      </p>
      <p>
        I use <Strong>Scrivener</Strong> to write the script and record my
        thoughts.
      </p>
      <p>
        Right now, the story is kept secret and safe from all (safe a few
        reviewers) but I&apos;m looking to share snippets of it in due time so
        watch this space!
      </p>
    </HomeSection>

    <HomeSection heading="And then some...">
      <p>
        I helped lead <Strong>The Journey Church</Strong> near Egham for 5 and
        1/2 years, including through the height of the Covid pandemic.
      </p>

      <p>
        While I no longer help lead the church, I&apos;m still involved in its{" "}
        <Strong>music</Strong> and <Strong>teaching</Strong> on a regular basis.
      </p>

      <p>
        I&apos;m excited by the world of Improv! I thoroughly enjoyed taking a
        level 1 course with <Strong>Hoopla!</Strong> and love shows like{" "}
        <Strong>Act Promptly</Strong>, <Strong>Off Book</Strong>, and -
        naturally - <Strong>Who&apos;s Line Is It Anyway?</Strong>
      </p>

      <p>
        I enjoy playing video games! A few of my favourites are{" "}
        <Strong>Super Smash Bros. Ultimate</Strong>, <Strong>Hades</Strong>, and{" "}
        <Strong>Xenoblade Chronicles</Strong>.
      </p>
    </HomeSection>
  </main>
);

export default Home;
