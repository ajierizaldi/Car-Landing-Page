const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#main-section">
                    <img src="/images/logo.png" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="text-body nav-link active" href="#our-services">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-body nav-link" href="#why-us">Why Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-body nav-link" href="#testimonials">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-body nav-link" href="#faq">FAQ</a>
                        </li>
                        <button className="btn btn-success ">Register</button>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;