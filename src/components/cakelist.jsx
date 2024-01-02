import Image from 'next/image'
import styles from './cakelist.module.css'
import { FaRegEyeSlash } from "react-icons/fa6"

export default function CakeList({cake}){
    return(
       

        <div  key={cake.id } className={styles.cakes}>
            <div className={styles.imgHolder} data-aos="zoom-in-down">
                <Image src={cake.img} className={styles.img} fill={true} alt="budget cakes"></Image> 
                <div className={styles.viewCon}>

                <p className={styles.view}> <FaRegEyeSlash style={{textAlign:"center", paddingRight:"2px"}}/> quick view</p>
                </div>
            </div>

            <p className={styles.name}>{cake.name}</p>
            <h5 className={styles.desc}>{cake.desc}</h5>
            <p className={styles.price}>{cake.price}</p>
            <button className={styles.btn} data-aos="fade-up">Buy now </button>
           
        </div>
       
    )   
}