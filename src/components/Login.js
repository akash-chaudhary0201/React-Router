import { Button } from "react-bootstrap"

function Login() {
    return (
        <>
            <h1>Login Page</h1>
            <input type="text" placeholder="Enter Your User Name" /> <br /> <br />
            <input type="password" placeholder="Enter Your Password" /> <br /> <br />
            <Button>Login</Button>
        </>
    )
}

export default Login