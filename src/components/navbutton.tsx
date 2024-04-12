import Link from "next/link";

interface NavButtonProps {
  text: string;
  url: string;
}

const NavButton = (props: NavButtonProps) => (
  <li className="px-4">
    <Link className="hover:text-accent" href={props.url}>
      {props.text}
    </Link>
  </li>
);

export default NavButton;
