"use client"
import { React } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './navLinks.module.css'

const NavLinks = ({ props }) => {
    const usePath = usePathname()

    return (

        <div className={styles.menu}>
            <Link href={props.path} className={`${styles.container} ${usePath === props.path ? styles.active : ''}`}>
                {props.title}</Link>
        </div>


    )
}

export default NavLinks

