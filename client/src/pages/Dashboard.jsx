import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import DataList from "../components/DataList"


export default function Dashboard() {
    const {user} = useContext(UserContext)  //accessing user value
  return (
    <div>
        <h1>Dashboard</h1>
        {!!user && ( <h1>Hi {user.name} !</h1> )}
        <DataList/>
    </div>
  )
}




