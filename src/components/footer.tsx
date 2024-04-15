import NavButton from "@/components/navbutton";
import { Strong } from "@/components/typography";

const Footer = () => (
  <footer className="flex w-full flex-col items-center space-y-5 p-12 bg-white dark:bg-black">
    <ul className="flex divide-x-2">
      <NavButton text="Email" url="mailto:joel.clarke273@gmail.com" />
      <NavButton text="GitHub" url="https://github.com/DarthEmpty" />
      <NavButton
        text="LinkedIn"
        url="https://www.linkedin.com/in/joel-clarke-7baa16128/"
      />
    </ul>

    <p className="text-center text-sm">
      Made with <Strong>NextJS</Strong>, using <Strong>TypeScript</Strong> and{" "}
      <Strong>TailwindCSS</Strong>
    </p>
  </footer>
);

export default Footer;
