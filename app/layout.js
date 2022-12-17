import Link from 'next/Link'
import NavLink from '../components/NavLink'
import '../styles/globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>🎄 React Holiday</title>
            </head>
            <body className="mx-auto max-w-screen-lg p-4">
                <header className="mx-auto mb-8 flex w-full flex-row items-center justify-between">
                    <Link
                        href="/"
                        className="rounded-md bg-white bg-opacity-5 p-2 text-white transition-all duration-300 ease-out hover:bg-white hover:bg-opacity-10"
                    >
                        🎄 React Holiday
                    </Link>
                    <div className="flex flex-row items-center space-x-4">
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/quotes">Quotes</NavLink>
                        <NavLink href="/pokeapp">Pokemon App</NavLink>
                    </div>
                </header>
                {children}
            </body>
        </html>
    )
}
