import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
    return (
        <div>
            <h2>Page Not Found Redirect to <Link href='/'>Home Page</Link></h2>
        </div>
    )
}

export default PageNotFound
