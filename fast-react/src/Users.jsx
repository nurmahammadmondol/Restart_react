import { use } from "react";
import User from "./User";


export default function Users({data}) {
    const users = use(data);
    // console.log(users);
  return (
    <div>

        <h2>Users = {users.length}</h2>

        {
            users.map(user=><User key={user.id} user={user}></User>)
        }

    </div>
  )
}
