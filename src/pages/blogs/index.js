import Link from 'next/link'
import React from 'react'

export default function Blogs() {
    return (
        <div>
            <h1>Blogs</h1>
            <Link href="/blogs/1">Go first item</Link>
        </div>
    )
}
