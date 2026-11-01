import { createContext } from "react";


export const PostContext=createContext('')

const data=[
    {name: 'robi', age: 23},
    {name: 'nasir', age: 20},
    {name: 'asif', age: 25},
    {name: 'ovi', age: 23}
]

const ContextProvider = ({children}) => {
    return <PostContext value={data}>{children}</PostContext>
};

export default ContextProvider;