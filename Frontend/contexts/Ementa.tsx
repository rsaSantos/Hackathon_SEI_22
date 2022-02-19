import { createContext, useContext, useState} from "react";

export const EmentaContext = createContext(null);


export default function EmentasProvider({children}) {
    const [ementa, setEmenta] = useState<any>(null);
  
    return <EmentaContext.Provider value={{ementa, setEmenta}}>
      {children}
    </EmentaContext.Provider>
  
  }

export function useEmenta() {
    return useContext(EmentaContext);
}

