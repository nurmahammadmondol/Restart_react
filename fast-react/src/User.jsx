
import './App.css'


export default function User({user}) {
    console.log(user)
  return (
    <div className="userCart">
        <h2>Name : {user.name}</h2>
        <p>Email : {user.email}</p>
        <p>Phone : {user.phone}</p>
    </div>
  )
}
