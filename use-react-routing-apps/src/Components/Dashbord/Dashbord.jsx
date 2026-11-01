import { useContext } from "react";
import { PostContext } from "../Context/Context";

const Dashbord = () => {


    const data=useContext(PostContext)

    console.log(data)

    return (
        <div>
            <h4>Dashbord</h4>
            <ol>
                {
                    data.map(da=><li>Name : {da.name}, Age : {da.age}</li>)
                }
            </ol>
        </div>
    );
};

export default Dashbord;