import NavButton from "@/components/navbutton"

export default function NavBar() {
    return (
        <nav className="flex fixed items-center p-7 w-full bg-primary-light dark:bg-primary-dark">
            <h1 className="text-4xl font-bold uppercase">Joel Clarke</h1>

            <div className="grow"/>

            <ul className="flex">
                <NavButton text="Home" url="#"/>
                <NavButton text="CV" url="#"/>
                <NavButton text="Projects" url="#"/>
                <NavButton text="Gallery" url="#"/>
            </ul>
        </nav>
    );
}