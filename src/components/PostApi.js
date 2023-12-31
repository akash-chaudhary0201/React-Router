import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

function PostApi() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")

    function saveUser() {

        let data = { name, email, mobile }

        console.log(data);

        fetch("http://localhost:4000/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    }

    // Showing the list of users :- 

    const [data, setData] = useState([])

    useEffect(() => {
        showAPI()
    })


    function showAPI() {
        fetch("http://localhost:4000/api/users").then((result) => {
            result.json().then((response) => {
                setData(response)
            })
        })
    }

    return (
        <>
            <h1>
                Post API
            </h1>
            <input type="text" name="name" value={name} placeholder="Enter  Your Name" onChange={(e) => { setName(e.target.value) }} /> <br /> <br />
            <input type="text" name="email" value={email} placeholder="Enter Your Email" onChange={(e) => { setEmail(e.target.value) }} /> <br /> <br />
            <input type="text" name="mobile" value={mobile} placeholder="Enter Your Mobile" onChange={(e) => { setMobile(e.target.value) }} /> <br /> <br />

            <Button onClick={saveUser}>Save New User</Button> <br /> <br />

            <h2>
                User's List :-
            </h2> <br /> <br />

            <table className="postapiTable">
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                </tr>
                {
                    data.map((item) =>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                        </tr>
                    )
                }
            </table>
        </>
    )
}

export default PostApi