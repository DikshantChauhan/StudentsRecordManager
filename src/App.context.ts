import { createContext } from "react";
import { User } from "./Components/Models/User";

interface AppContextData {
    user: User | undefined;
    setUser: (u: User) => void
}

const AppContext = createContext<AppContextData>({
    user: undefined,
    setUser: function (u){
        this.user = u
    },
})

export default AppContext