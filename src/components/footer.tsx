import NavButton from "@/components/navbutton";

const Footer = () => (
  <footer className="flex w-full flex-col items-center space-y-5 p-12">
    <ul className="flex divide-x-2">
      <NavButton text="Email" url="mailto:joel.clarke273@gmail.com" />
      <NavButton text="GitHub" url="https://github.com/DarthEmpty" />
      <NavButton
        text="LinkedIn"
        url="https://www.linkedin.com/in/joel-clarke-7baa16128/"
      />
    </ul>

    <p className="text-center text-sm">
      Made with <strong className="text-accent">NextJS</strong>, using{" "}
      <strong className="text-accent">TypeScript</strong> and{" "}
      <strong className="text-accent">TailwindCSS</strong>
    </p>
  </footer>
);

export default Footer;
