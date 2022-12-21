import Image from 'next/image'

export default function Home() {
    return (
        <div className="mt-8 grid grid-cols-2 items-center gap-16">
            <div>
                <h1 className="text-2xl font-bold">🎄React Holiday 2022</h1>
                <div className="mt-4 flex flex-col space-y-4 text-lg text-gray-300">
                    <p>
                        During React Holiday I've build some cool things and
                        learned a ton of stuff about Next.js 13.
                    </p>
                    <p>
                        You can check out the basics in the quotes and about
                        pages of the app. The pokemon route, includes a little,
                        but very cool app we've built in the second half of the
                        program.
                    </p>
                </div>
            </div>
            <Image
                src={
                    'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                }
                width="320"
                height="128"
                className="mt-8 w-full rounded-lg object-fill"
            />
        </div>
    )
}
