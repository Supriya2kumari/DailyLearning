import { useState } from "react";
import { createContext } from "react";

export const dataContext = createContext();

export const dataProvider = ({children}) => {
    // const [data, setData] = useState("John Doe");
    const data = "John Doe";

    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    )
}