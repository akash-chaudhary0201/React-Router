import { Link, Outlet } from "react-router-dom"

function Contact() {
    return (
        <>
            <h1>
                Contact Page
            </h1> <br /> <br />
            <h2>
                Get in Contact With :-
            </h2>
            <Link to="sales">Sales</Link> <br /> <br />
            <Link to="marketing">Marketing</Link>
            <Outlet />
        </>
    )
}

export default Contact