import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

const useTheme = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEY) ?? 'neon')

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    const toggleTheme = () => setTheme((prev) => (prev === 'neon' ? 'terminal' : 'neon'))

    return [theme, toggleTheme]
}

export default useTheme
