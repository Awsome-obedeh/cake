import Link from "next/link";
import styles from './page.module.css'

const links=[
    {
        id:2,
        title:"Chrismas Cakes",
        url:"/christmas"
    },
    {
        id:2,
        title:"Special Cakes",
        url:"/specials"
    },
    {
        id:3,
        title:"Birthday Cakes",
        url:"/birthday"
    },
    {
        id:4,
        title:"Graduation Cakes",
        url:"/graduation"
    }
]


export default function Navbar(){
    return(
        <nav className={styles.container}>
            {
                links.map((link)=>{
                    return(

                        <Link href={link.url} className={styles.link}>{link.title}</Link>
                    )
                })
            }
            
            
        </nav>
    )
}