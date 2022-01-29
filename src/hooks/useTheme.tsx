import { useEffect, useState } from 'react'

/**
 * a custom hook to switch between light mode and dark mode
 * @default "dark"
 * @returns
 */
const useTheme = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.className = theme
    }
  }, [theme])

  return {
    theme,
    toggleTheme
  }
}

export default useTheme
