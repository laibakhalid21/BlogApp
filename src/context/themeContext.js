"use client";

import { createContext, useState } from "react";
import { useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("dark")

    useEffect(() => {
        const savedMode = localStorage.getItem("theme");
        if (savedMode) {
            setMode(savedMode);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", mode);
    }, [mode]);


    const toggle = () => {
        setMode((prev) => (prev === 'dark' ? "light" : "dark"))
    }

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={`${mode === 'light' ? "bg-white text-black" : "bg-black text-white"}`}>
                {children}
            </div>

        </ThemeContext.Provider>
    )

}