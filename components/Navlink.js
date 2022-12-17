'use client'

import Link from 'next/Link'
import {
    usePathname,
    useSelectedLayoutSegment,
    useSelectedLayoutSegments,
} from 'next/navigation'

export default function NavLink({ href, children }) {
    let path = usePathname()
    let active = path.includes(href)

    // let segment = useSelectedLayoutSegment
    // let active = href === `/${segment}`

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
