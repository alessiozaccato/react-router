import { Link, NavLink } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        Blog
                    </NavLink>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aboutus" className="nav-link" aria-current="page">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink to="/posts" className="nav-link" aria-current="page">
                                    Posts
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default HeaderNav