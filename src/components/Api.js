// import { useEffect, useState } from "react"
// import { Button } from "react-bootstrap"

// function Api() {

//     const [data, setData] = useState([])

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
//             result.json().then((response) => {
//                 setData(response)
//             })
//         })
//     }, [])


//     return (
//         <>
//             <div className="App">
//                 <h1>
//                     Api Calling
//                 </h1>
//                 <h2>
//                     Data from Api
//                 </h2>


//                 <Button>Show API Data</Button>

//                 <table border="1">
//                     <tr>
//                         <td>Id</td>
//                         <td>Name</td>
//                         <td>Username</td>
//                         <td>Email</td>
//                         <td>Address</td>
//                     </tr>
//                     {
//                         data.map((item) =>
//                             <tr>
//                                 <td>{item.id}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.username}</td>
//                                 <td>{item.email}</td>
//                                 <td>{item.city}</td>
//                             </tr>
//                         )
//                     }
//                 </table>
//             </div>

//         </>
//     )
// }

// export default Api


import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Api() {
    const [data, setData] = useState([]);
    const [showTable, setShowTable] = useState(false);

    useEffect(() => {
        if (showTable) {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((result) => result.json())
                .then((response) => {
                    setData(response);
                });
        }
    }, [showTable]);

    const handleShowTable = () => {
        setShowTable(true);
    };

    return (
        <>
            <div className="App">
                <h1>Api Calling</h1>
                <h2>Data from Api</h2>

                <Button onClick={handleShowTable}>Show API Data</Button>

                {showTable && (
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}

export default Api;
