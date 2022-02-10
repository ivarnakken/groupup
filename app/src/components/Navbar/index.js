import styles from "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>GroupUp</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Create Group</a>
            </div>
        </nav>
    );
}

export default Navbar;