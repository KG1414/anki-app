const FormNavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand nav__title" href="/">Anki App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Anki App</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <br />
                    <br />
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <br />
                            <li className="nav-item">
                                <a className="nav-link" href="/">App</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default FormNavBar;