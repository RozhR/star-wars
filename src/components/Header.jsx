const Header = () => {
    return (
        <header className="rounded-top-5">
            <nav className="fixed-top mt-2 ms-5">
                <ul className="nav gap-2">
                    <li className="nav-item btn btn-danger border-warning">Home</li>
                    <li className="nav-item btn btn-danger border-warning">About me</li>
                    <li className="nav-item btn btn-danger border-warning">Star Wars</li>
                    <li className="nav-item btn btn-danger border-warning">Contact</li>
                </ul>
            </nav>
            <h1 className="text-center fs-1 py-4">Luke Skywalker</h1>
        </header>
    )
        ;
};

export default Header;