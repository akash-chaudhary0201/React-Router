import { useParams } from "react-router-dom"

function User() {

    const params = useParams()

    const { name } = params
    return (
        <>
            <div>
                <h1>
                    {name}'s' Page
                </h1>
            </div>
        </>
    )
}

export default User