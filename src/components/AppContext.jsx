import  { createContext, useState } from 'react';

const AppContext = createContext()

   export function AppProvider(props){

        const [theme, setTheme] = useState("");
        function toggleTheme(){
            if(theme === "dark"){
                setTheme("light")
            } else {
                setTheme("dark")
            }
        }

        const value = {
            theme: theme,
            toggleTheme: toggleTheme
        }
        return <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>            
       
  
}

export default AppContext;