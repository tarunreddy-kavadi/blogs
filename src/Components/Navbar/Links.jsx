"use client"
import { React, useState } from 'react'
import styles from './links.module.css'
import NavLinks from '../NavLinks/navLinks'
import ResponsveMenu from '../NavLinks/ResponsiveNavLinks/ResponsveMenu'

const Links = () => {
    const [open, setOpen] = useState();
    const handleClick = () => setOpen(!open);
    const session = true;
    const isAdmin = false;

    const link = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Admin',
            path: '/admin'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contact',
            path: '/contact'
        },

    ]
    return <div className={styles.container}>
        {
            link.map((props) => <NavLinks props={props} key={props.title} />)
        }
        {
            session ?
                (<>
                    {isAdmin && <NavLinks props={{ title: 'Admin', path: '/admin' }} />}
                    <button className={styles.logout}>Logout</button>
                </>) : <NavLinks props={{ title: 'Login', path: '/login' }}>Login</NavLinks>
        }

        <button className={styles.ResponsiveMenu} onClick={handleClick}>Menu</button>
        {console.log(open)}
        <div className={styles.menu}>
            {
                open && link.map((props) => <ResponsveMenu props={props} key={props.title} />)

            }
        </div>
    </div>

}

export default Links
