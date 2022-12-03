'use client'

import Link from 'next/Link'
import { useSelectedLayoutSegments } from 'next/navigation'

export default function NavLink({ href, children }) {
    let segment = useSelectedLayoutSegments()
    let active = href === `/${segment}`

    console.log({ href, active })

    return (
        <Link
            className={
                active
                    ? 'rounded-md bg-white bg-opacity-5 p-2 text-blue-500'
                    : 'rounded-md p-2 transition-all duration-300 ease-out hover:bg-white hover:bg-opacity-10'
            }
            href={href}
        >
            {children}
        </Link>
    )
}
