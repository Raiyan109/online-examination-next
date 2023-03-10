import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <h1>Navbar</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>

            </nav>
        </div>
    )
}