import Link from 'next/link'

export default function Contact() {
    return (
        <div className="flex flex-col">
            <h1 className="mt-8 text-xl font-bold">👋 Say hi.</h1>
            <Link
                className="mt-4 font-medium text-blue-500 hover:text-blue-700"
                href="mailto:hello@marvinmessenzehl.com"
            >
                hello@marvinmessenzehl.com
            </Link>
        </div>
    )
}
