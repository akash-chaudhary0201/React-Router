
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { } from "react-bootstrap"

function Navbar() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar