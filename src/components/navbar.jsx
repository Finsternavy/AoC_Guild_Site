import "../components/navbar.css"

const Navbar = () => {


    return (
        <div className="navbar container">
            <div className="btn-container">
                <button className="btn left-btn">About Us</button>
                <button className="btn left-btn">Members</button>
                <button className="btn right-btn">Login</button>
                <button className="btn right-btn">Apply</button>
            </div>
        </div>
    )
}

export default Navbar