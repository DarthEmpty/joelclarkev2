import NavButton from "./navbutton"

export default function NavBar() {
    return (
        <nav>
            <div className="flex-grow"/>

            <NavButton text="Home" url="#"/>
            <NavButton text="Gallery" url="#"/>
            <NavButton text="CV" url="#"/>
        </nav>
    );
}