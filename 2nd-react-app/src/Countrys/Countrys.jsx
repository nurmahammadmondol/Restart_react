import { use } from "react";
import Country from "./Country";


const Countrys = ({countrys}) => {

    const Countrys=use(countrys);
    console.log(Countrys)

    return (
        <div className="border-2 w-11/12 mx-auto my-10 p-5">
            <h4>Countrys Details : {Countrys.length}</h4>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
             {
                Countrys.map((country, i)=><Country key={i} country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countrys;