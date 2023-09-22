
import { createContext, useContext, ReactNode } from 'react'

type MapContext_Type = {
    children: ReactNode
}

let MapContext = createContext()
export default function MapContextProvider({ children }: MapContext_Type) {

    return (
        <MapContext.Provider value={true}>
            {children}
        </MapContext.Provider>
    )
}

export function useMapContext() {
    return useContext(MapContext)
}