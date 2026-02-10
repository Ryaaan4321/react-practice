"use client"

import { useContext, createContext, useState, useEffect } from "react"
const AppContext = createContext(null);
function AppProvider({ children }) {
    const [user, setUser] = useState(null)
    const [theme, setTheme] = useState(null);
    return (
        <AppContext.Provider value={{ user, theme, setTheme, setUser }}>
            {children}
        </AppContext.Provider>
    )
}
function ThemeDisplay() {
    const { theme } = useContext(AppContext);
    console.log("from the themee")
    return <p>Theme: {theme}</p>;
}
function Controls() {
    const { user, setUser } = useContext(AppContext)
    return (
        <div>
            <p>User : {user?.name}</p>
            <button
                onClick={() =>
                    setUser({ name: "Aryan " + Math.floor(Math.random() * 100) })
                }
            >
                Update User
            </button>
        </div>
    );
}
export default function Page() {

/*
useContext allows a component to read values from a shared context.
When the context provider’s value changes (by reference),
all consuming components re-render.

Context provides data, not UI.
Only renderable values (strings, numbers, JSX) should be used in JSX;
objects from context must be accessed via their properties.
*/
    return (
        <AppProvider>
            <ThemeDisplay />
            <Controls />
        </AppProvider>
    );
}
