import Link from "next/link";
import { MouseEventHandler } from "react";
import { Link as LinkIcon } from "@/components/icons"

interface NavButtonProps {
  text: string;
  url: string;
  onClick?: MouseEventHandler;
}

const NavButton = (props: NavButtonProps) => (
  <li className="px-4">
    {props.url.startsWith("/") ? (
      <Link
        className="hover:text-accent"
        href={props.url}
        onClick={props.onClick}
      >
        {props.text}
      </Link>
    ) : (
      <a
        className="hover:text-accent flex"
        href={props.url}
        onClick={props.onClick}
        target="_blank"
      >
        <LinkIcon />
        {props.text}
      </a>
    )}
  </li>
);

export default NavButton;
