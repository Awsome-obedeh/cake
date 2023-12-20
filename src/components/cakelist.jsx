import Image from 'next/image'
import styles from './cakelist.module.css'

export default function CakeList({cake}){
    return(
       

        <div  key={cake.id } className={styles.cakes}>
            <div className={styles.imgHolder}>
                <Image src={cake.img} className={styles.img} fill={true}></Image>
            </div>

            <p className={styles.name}>{cake.name}</p>
            <h5 className={styles.desc}>{cake.desc}</h5>
            <p className={styles.price}>{cake.price}</p>
            <button className={styles.btn}>Buy now </button>
        </div>
       
    )   
}