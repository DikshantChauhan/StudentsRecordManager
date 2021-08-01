import { createContext } from "react";

interface AppContextData {
    state: boolean;
    setState: (u: boolean) => void
}

const AppContainerContext = createContext<AppContextData>({
    state: true,
    setState: function (u){
        this.state = u
    },
})

export default AppContainerContext