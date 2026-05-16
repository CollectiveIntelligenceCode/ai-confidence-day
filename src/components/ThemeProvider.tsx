import { ReactNode, useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(prefersDark);
    }
    setMounted(true);
  }, []);

  // Apply theme to DOM
  useEffect(() => {
    if (!mounted) return;

    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, mounted]);

  // Prevent hydration mismatch by only rendering after mount
  if (!mounted) {
    return children;
  }

  return (
    <>
      {children}
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
    </>
  );
}

function ThemeToggle({ isDark, setIsDark }: { isDark: boolean; setIsDark: (dark: boolean) => void }) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-brand-surface border border-brand-border hover:bg-brand-primary/10 transition-colors z-50"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? (
        // Sun icon (light mode)
        <svg
          className="w-5 h-5 text-brand-text"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a1 1 0 111.414-1.414l2.12 2.12a1 1 0 11-1.414 1.414zM2.05 6.464l2.12 2.12a1 1 0 01-1.414 1.414L.636 7.879a1 1 0 111.414-1.414zM17.95 6.464l-2.12 2.12a1 1 0 001.414 1.414l2.12-2.12a1 1 0 00-1.414-1.414zM2.05 13.536l2.12-2.12a1 1 0 011.414 1.414l-2.12 2.12a1 1 0 11-1.414-1.414zm15.9 0l-2.12-2.12a1 1 0 011.414-1.414l2.12 2.12a1 1 0 01-1.414 1.414z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        // Moon icon (dark mode)
        <svg
          className="w-5 h-5 text-brand-text"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}
