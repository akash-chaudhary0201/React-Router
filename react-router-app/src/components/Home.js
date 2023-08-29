import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

function Home() {
    return (
        <>
            <h1>
                This is Home Page.
            </h1>
            <Link to="/about">Go to About Us Page</Link>
        </>
    )
}

export default Home