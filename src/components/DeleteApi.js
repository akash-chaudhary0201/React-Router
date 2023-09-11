import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

function PostApi() {


    // Showing the list of users :- 

    const [data, setData] = useState([])

    useEffect(() => {
        deleteApi()
    })


    function deleteApi() {
        fetch("http://localhost:4000/api/users").then((result) => {
            result.json().then((response) => {
                setData(response)
            })
        })
    }

    function deleteUser(name) {
        fetch(`http://localhost:4000/api/users/${name}`, {
            method: "DELETE"
        })
    }

    return (
        <>
            <h1>
                Delete API
            </h1>
            {/* <input type="text" name="name" value={name} placeholder="Enter  Your Name" onChange={(e) => { setName(e.target.value) }} /> <br /> <br />
            <input type="text" name="email" value={email} placeholder="Enter Your Email" onChange={(e) => { setEmail(e.target.value) }} /> <br /> <br />
            <input type="text" name="mobile" value={mobile} placeholder="Enter Your Mobile" onChange={(e) => { setMobile(e.target.value) }} /> <br /> <br /> */}


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
                            <td><Button onClick={() => deleteUser(item.name)}>Delete User</Button></td>
                        </tr>
                    )
                }
            </table>
        </>
    )
}

export default PostApi