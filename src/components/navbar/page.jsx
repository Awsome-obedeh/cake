"use client"

import Link from "next/link";
import styles from './page.module.css'
import Image from "next/image";
import { CiBoxList } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { IoIosCart } from "react-icons/io";
const links = [

    {
        id: 1,
        title: "Chrismas Cakes",
        url: "/christmas",
        class: "christmas",
        titles: "ff"
    },
    {
        id: 2,
        title: "Special Cakes",
        url: "/specials",
        class: "christmas",
        titles: 'www'

    },
    {
        id: 3,
        title: "Birthday Cakes",
        url: "/birthday",
        class: "christmas",
        titles: 'ww'
    },
    {
        id: 4,
        title: "Graduation Cakes",
        url: "/graduation",
        class: "christmas",
        titles: 'qw'
    }
]


export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    function navHandler() {
        setShowNav(true)
    }
    function HideNavHandler(){
        setShowNav(false)
    }

    return (


        <nav className={`${styles.container} container`}>
            <div className={styles.logoHolder}>
                <Image src="https://i0.wp.com/fastestcakes.com/wp-content/uploads/2023/03/cropped-Vertical-logo-LOGO-1.png?resize=90%2C76&ssl=1" alt="yes" className={styles.img} fill={true} />
            </div>
            {
                links.map((link) => {
                    return (


                        <Link key={link.id} href={link.url} className={`${links.class} ${styles.link}`}>
                            <div>

                                {link.title}
                             
                            </div>


                        </Link>

                    )
                })
            }
            <IoIosCart style={{color:"white", fontSize:"1.5rem"}}/>


           
 
                <div className={styles.Mcontainer}>
                    <CiBoxList onClick={navHandler}  className={styles.hamburger} />
                   { showNav && <div className={styles.mobileNav}>
                        <IoMdClose className={styles.close} onClick={HideNavHandler}/>
                        {
                            links.map((link) => {
                                return (


                                    <Link key={link.id} href={link.url} className={`${links.class} ${styles.Mlink}`}>
                                        <div>

                                            {link.title}
                                        </div>


                                    </Link>

                                )
                            })
                        }
                    </div>}


                </div>
            
        </nav>

    )
}