import { Link } from 'react-scroll'
const Navbar = () => {
    return (
        <nav className="flex gap-8 items-center">
            <div className="flex gap-8 nav-items">
                <Link
                    to={'home'}
                    spy={true}
                    smooth={true}
                    activeClass='active'
                    duration={500}
                >Home</Link>
                <Link
                    to={'projects'}
                    spy={true}
                    smooth={true}
                    activeClass='active'
                    duration={500}
                >Projects</Link>
                <Link
                    to ={'skills'}
                    spy={true}
                    smooth={true}
                    activeClass='active'
                    duration={500}
                >Skills</Link>
            </div>
            <div className="flex gap-8 nav-items">
                <Link
                    to={'https://dev.to/ghostaram'}
                    spy={true}
                    smooth={true}
                    activeClass='active'
                    duration={500}
                >Blog</Link>
                <Link
                    to={'about'}
                    spy={true}
                    smooth={true}
                    activeClass='active'
                    duration={500}
                >About</Link>
                <Link
                    to={'contact'}
                    spy={true}
                    smooth={true}
                    activeClass='active'
                    duration={500}
                >Contact</Link>
            </div>
            {/* <div className="flex gap-8 nav-items">
            </div> */}
        </nav>
    )
}

export default Navbar