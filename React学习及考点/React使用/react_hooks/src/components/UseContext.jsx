import React, { createContext, useContext, useState } from "react";

// 主题颜色
const themes = {
    light: {
        foreground: '#000',
        background: '#fff'
    },
    dark: {
        foreground: '#fff',
        background: '#222'
    }
}

// 创建Context
const ThemeContext = createContext(themes.light)


function UseContext() {
    return <ThemeContext.Provider value={themes}>
        <Toolbar />
    </ThemeContext.Provider>
}

function Toolbar() {
    return <div>
        <ThemeButton />
    </div>
}

function ThemeButton() {
    const value = useContext(ThemeContext)
    const [theme, setTheme] = useState(value.light)
    const [index, addIndex] = useState(0)
    let newTheme
    console.log('渲染')
    const handleClick = () => {
        newTheme = index % 2 === 0 ? value.dark : value.light
        addIndex(index + 1)
        setTheme(newTheme)
    }

    return <button
            style={{background: theme.background, color: theme.foreground}}
            onClick={handleClick}
        >
        请点击
    </button>
}

export default UseContext