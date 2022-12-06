import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <div>
            <div className="mt-8 grid w-full grid-cols-2 place-items-center space-x-4">
                <div className="h-full">
                    <h1 className="text-xl font-bold">👋 About myself</h1>
                    <p className="mt-4">
                        Hey team! My name is Marvin and I design digital
                        products worldwise. Besides being a freelance product
                        designer I'm also teaching others design, together with
                        Memorisely!
                    </p>
                </div>
                <Image
                    src="/memoji.jpg"
                    className="mx-auto"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                />
            </div>
            <Link
                className="text-medium text-blue-500 hover:text-blue-700"
                href="/about/contact"
            >
                📫 Say hi.
            </Link>
        </div>
    )
}
