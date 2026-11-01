import { use } from "react";
import { PostContext } from "../Context/Context";

const Files = () => {

    const abcd=use(PostContext)
    console.log(abcd)

    return (
        <div>
            <h4>File</h4>
        </div>
    );
};

export default Files;