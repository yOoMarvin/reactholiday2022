import Link from 'next/Link'

export default function Layout({ children }) {
    return (
        <main>
            <Link
                href="/"
                className="mb-8 rounded-md p-2 text-xs font-medium transition-all duration-300 ease-out hover:bg-white hover:bg-opacity-10 hover:text-blue-500"
            >
                ← Back
            </Link>
            {children}
        </main>
    )
}
