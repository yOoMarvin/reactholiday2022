import NavLink from '../components/NavLink'
import '../styles/globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>🎄 React Holiday</title>
            </head>
            <body className="mx-auto max-w-screen-lg p-4">
                <header className="mx-auto flex w-full flex-row items-center justify-center space-x-4">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                </header>
                {children}
            </body>
        </html>
    )
}
