import { Children, createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{

        const[produto,setProduto] = useState(null)
    
        const [produtos,setProdutos] = useState ([
            {nome:"livro"},
            {nome:"piano"},
            {nome:"colar"},
            {nome:"pulga"}
        ])
    return( 
            <GlobalContext.Provider value = {{
                produto,setProduto,produtos
                }}>
                {children}
            </GlobalContext.Provider>
    )

}