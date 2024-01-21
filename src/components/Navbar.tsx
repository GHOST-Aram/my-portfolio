import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex gap-8 items-center">
            <div className="flex gap-8 nav-items">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'#projects'}>Projects</NavLink>
                <NavLink to ={'#skills'}>Skills</NavLink>
            </div>
            <div className="flex gap-8 nav-items">
                <NavLink to={'https://dev.to/ghostaram'}>Blog</NavLink>
                <NavLink to={'#about'}>About</NavLink>
                <NavLink to={'#contact'}>Contact</NavLink>
            </div>
            {/* <div className="flex gap-8 nav-items">
            </div> */}
        </nav>
    )
}

export default Navbar