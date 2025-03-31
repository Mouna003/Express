import { Link } from "react-router-dom";

function Header() {
return (
    <header className="header">
    <h1>Book Catalog</h1>
    <nav>
        <Link to="/">Catalog</Link>
        <Link to="/create">Add Book</Link>
    </nav>
    </header>
);
}

export default Header;
