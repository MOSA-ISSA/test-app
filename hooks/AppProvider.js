import React, { useState } from "react";
import TheContext from "./AppContext";

const AppProvider = (props) => {
    const [Cart, setCart] = useState([]);

    return (
        <TheContext.Provider
            value={{
                Cart,
                setCart
            }}>
            {props.children}
        </TheContext.Provider>
    )
}

export default AppProvider;