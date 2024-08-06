import React from 'react'
import Link from 'next/link'
import styles from './Responsive.module.css'
import { usePathname } from 'next/navigation'

const ResponsveMenu = ({ props }) => {
    const usePath = usePathname
    return (
        <div>
            <Link href={props.path} className={`${styles.menu} ${usePath === props.path ? styles.active : ''}`}>
                {props.title}</Link>
        </div>
    )
}

export default ResponsveMenu
