import { useState } from "react"
import { Button } from "react-bootstrap"

function PostApi() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")

    function saveUser() {

        let data = { name, email, mobile }

        fetch("http://localhost:4000/api/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log("Result", result);
        })
    }

    return (
        <>
            <h1>
                Post API
            </h1>
            <input type="text" name="name" value={name} placeholder="Enter  Your Name" onChange={(e) => { setName(e.target.value) }} /> <br /> <br />
            <input type="text" name="email" value={email} placeholder="Enter Your Email" onChange={(e) => { setEmail(e.target.value) }} /> <br /> <br />
            <input type="text" name="number" value={mobile} placeholder="Enter Your Phone" onChange={(e) => { setMobile(e.target.value) }} /> <br /> <br />

            <Button onClick={saveUser}>Save New User</Button>
        </>
    )
}

export default PostApi