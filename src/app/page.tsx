interface HomeSectionProps {
  heading: string;
  children: React.ReactNode;
}

const HomeSection = (props: HomeSectionProps) => (
  <section className="min-w-full p-12 md:p-24 odd:bg-primary-light even:bg-secondary-light dark:odd:bg-primary-dark dark:even:bg-secondary-dark">
    <h1 className="titlecase text-4xl">{props.heading}</h1>
    {props.children}
  </section>
);

const Home = () => (
  <main className="bg-primary-light dark:bg-primary-dark">
    <HomeSection heading="Welcome!">
      <p>Hey there! My name is Joel - welcome to this side of the internet.</p>
    </HomeSection>

    <HomeSection heading="Technician">
      <p>Example text</p>
    </HomeSection>

    <HomeSection heading="Programmer">
      <p>Example text</p>
    </HomeSection>

    <HomeSection heading="Artist">
      <p>Example text</p>
    </HomeSection>

    <HomeSection heading="Writer">
      <p>Example text</p>
    </HomeSection>

    <HomeSection heading="And...">
      <p>Example text</p>
    </HomeSection>
  </main>
);

export default Home;
