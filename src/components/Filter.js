import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Filter() {

    const navigate = useNavigate()

    return (
        <>
            <h1>
                Filter's Page
            </h1>
            <Button onClick={() => navigate("/about")}>Go to About Page</Button> <br /> <br />
            <Button onClick={() => navigate("/filter")}>Go to Filter Page</Button>
        </>
    )
}

export default Filter