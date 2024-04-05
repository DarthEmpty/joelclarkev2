import Link from "next/link"

interface NavButtonProps {
    text: string,
    url: string
}

export default function NavButton({ text, url}: NavButtonProps) {
    return (
        <Link className="bg-transparent text-primary-dark dark:text-primary-light hover:text-accent" href={url}>
            {text}
        </Link>
    )
}