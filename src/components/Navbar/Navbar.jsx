import "./Navbar.css";

export default function Navbar(){


    return(
        <div className="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a class="active" href="#about">About</a></li>
            </ul>
        </div>
    )
}