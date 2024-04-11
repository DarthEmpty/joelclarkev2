import NavButton from "@/components/navbutton";


export default function Footer() {
  return (
    <footer className="flex flex-col items-center p-12 w-full space-y-5">
      <ul className="flex divide-x-2">
        <NavButton text="Email" url="mailto:joel.clarke273@gmail.com"/>
        <NavButton text="GitHub" url="https://github.com/DarthEmpty"/>
        <NavButton text="LinkedIn" url="https://www.linkedin.com/in/joel-clarke-7baa16128/"/>
      </ul>

      <p className="text-sm text-center">
        Made with <strong className="text-accent">NextJS</strong>, using <strong className="text-accent">TypeScript</strong> and <strong className="text-accent">TailwindCSS</strong>
      </p>
    </footer>
  )
}
