import Link from "next/link"

interface NavButtonProps {
    text: string,
    url: string
}

export default function NavButton({ text, url }: NavButtonProps) {
  return (
    <li className="px-4">
      <Link className="hover:text-accent" href={url}>
        {text}
      </Link>
    </li>
  )
}