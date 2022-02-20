import { createContext, useContext, useState} from "react";

export const CountContext = createContext(null);


export default function CountProvider({children}) {
    const [count, setCount] = useState<any>(1);
  
    return <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  
  }

export function useCount() {
    return useContext(CountContext);
}

