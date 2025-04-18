import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  IconDefinition,
} from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import Typewriter from "@/components/typewriter";
import faceImage from "@/images/face_compressed.jpg";

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

interface HomeLinkProps {
  icon: IconDefinition;
  url: string;
}

const HomeLink = (props: HomeLinkProps) => (
  <a href={props.url} target="_blank">
    <FontAwesomeIcon
      className="w-7 mr-5 text-accent-dark active:text-accent-light md:opacity-50 md:hover:opacity-100"
      icon={props.icon}
    />
  </a>
);

const Home = () => (
  <main className="flex flex-col mx-auto min-h-screen">
    <div className="grow min-h-20" />
    <div className="md:shrink md:flex md:mx-auto md:content-center md:gap-x-10 md:justify-center">
      <Image
        unoptimized
        priority
        src={faceImage}
        alt="Me!"
        className="object-cover size-64 rounded-3xl mx-auto my-7 md:mx-0 md:my-0"
      />

      <div className="w-64 mx-auto flex flex-col md:w-full md:mx-0">
        <Typewriter
          texts={ROLES}
          className="text-xl font-semibold text-accent-light md:text-3xl"
        />
        <p className="md:text-lg">Hello - I&apos;m Joel!</p>
        <p className="md:text-lg">Welcome to my corner of the internet.</p>
        <Link
          className="mt-4 p-1 text-center bg-accent-dark active:bg-accent-light md:hover:bg-accent-light md:active:bg-accent-dark rounded-3xl md:mr-36"
          href={CV_PATH}
        >
          Check out my CV!
        </Link>
        <div className="grow" />
        <div className="flex mt-10 justify-around md:mt-0 md:justify-normal">
          <HomeLink icon={faEnvelope} url="mailto:joel@joelclarke.co.uk" />
          <HomeLink icon={faGithub} url="https://github.com/DarthEmpty" />
          <HomeLink
            icon={faLinkedinIn}
            url="https://www.linkedin.com/in/joel-clarke-7baa16128/"
          />
        </div>
      </div>
    </div>
    <div className="grow min-h-7" />
  </main>
);

export default Home;
