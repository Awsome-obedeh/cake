import Link from 'next/link'
import styles from './page.module.css'
import { FaFacebookF,FaWhatsapp,FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <section className={`${styles.footer} container `}>
            <div className={styles.links}>
                <h2 className={styles.title}>Hot Links</h2>
                <Link className={styles.links}href='/about'>About Us</Link>
                <Link className={styles.links}href='/contact'>Contact Us</Link>
                <Link className={styles.links}href='/about'>Terms & Conditions</Link>

            </div>

            <div className={styles.locations}>
                <h2 className={styles.title}>Our Locations</h2>
                <p>Lekki:no 1 some street, Road</p>
                <p>Port Harcourt:no 1 that street, Road</p>
            </div>

            <div className={styles.socials}>
            <h2 className={styles.title}>Reach Us</h2>
                <FaFacebookF style={{margin:"0 5px",  fontSize:"1rem",color:"#0000ff"}}/>
                <FaWhatsapp style={{margin:"0 5px", fontSize:"1rem",color:"#00b300"}}/>
                <FaTwitter style={{margin:"0 5px", fontSize:"1rem",color:"#0000ff"}}/>
            </div>
        </section>
    )
}