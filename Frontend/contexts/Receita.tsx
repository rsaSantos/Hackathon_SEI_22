import { createContext, useContext, useState} from "react";

export const ReceitaContext = createContext(null);


export default function ReceitasContext({children}) {
    const [receita, setReceita] = useState<any>(null);
  
    return <ReceitaContext.Provider value={{receita, setReceita}}>
      {children}
    </ReceitaContext.Provider>
  
  }

export function useReceita() {
    return useContext(ReceitaContext);
}