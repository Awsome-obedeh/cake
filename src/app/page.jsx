import Image from 'next/image'
import styles from './page.module.css'
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import CakeList from '@/components/cakelist';
import { FaRegEyeSlash } from "react-icons/fa6"
import { budgetCakes, christmasCakes, weddingCakes, specialCakes, topCakes } from '../../cakeSections';




export default function Home() {
  return (
    <div>

      <div className='container hero'>
        <div className="hero-title">
          <h2>Order  Amazing  cakes<br></br>   from just <br></br>#5000</h2>
          <h4>Get Fast  Shipping , Free <br></br>Delivery a nd free fireworks!!</h4>
        </div>
      </div>

      <section className="section-two container">
        <div className="money">
          <FaCakeCandles style={{ fontSize: '2.5rem', color: "hotpink" }} />
          <p className='title'>Affordable Cakes</p>
          <p className="desc">Our cakes are affordable, delicious and excellente </p>
        </div>
        <div className="fireworks">
          <FaMoneyBillWaveAlt style={{ fontSize: '2.5rem', color: "hotpink" }} />
          <p className='title'>Free Fireworks!</p>
          <p className="desc">Our cakes are affordable, delicious and excellente </p>
        </div>
        <div className="shipping">
          <TbTruckDelivery style={{ fontSize: '2.5rem', color: "hotpink" }} />
          <p className='title'>Fastest Free Shipping</p>
          <p className="desc">We deliver even at the shortest notice completely free </p>
        </div>
      </section>

      {/* cake delivered */}
      <section className="delivered container">
        <h1 >20,000</h1>
        <h3>Successfully Cake Deliveries</h3>
        <hr className='rule' />

      </section>

      <h2 className='section-title'>Our Budgets cakes</h2>

      <section className="budgets container">

        {
          budgetCakes.map((cake) => {
            return (


              <CakeList key={cake.id} cake={cake} />



            )
          })
        }
      </section>
        <button className='seemore'> See more </button>

      <hr className="rule" />
      <h2 className='section-title'>Our Christmas cakes</h2>
      <section className="budgets container">

        {
          christmasCakes.map((cake) => {
            return (


              <CakeList key={cake.id} cake={cake} />



            )
          })
        }

      </section>


      <hr className="rule" />
      <h2 className='section-title'>Our Wedding cakes</h2>
      <section className="budgets container">

        {
          weddingCakes.map((cake) => {
            return (


              <CakeList key={cake.id} cake={cake} />



            )
          })
        }

      </section>

      <hr className="rule" />
      <h2 className='section-title'>Our Special cakes</h2>
      <section className="budgets container">

        {
          specialCakes.map((cake) => {
            return (


              <CakeList key={cake.id} cake={cake} />



            )
          })
        }

      </section>
      <button className='seemore'> See more </button>


      <hr className="rule" />
      <h2 className='section-title'>Our Picks For you</h2>
      <section className="budgets container">

        {
          topCakes.map((cake) => {
            return (


              <CakeList key={cake.id} cake={cake} />



            )
          })
        }

      </section>
      <button className='seemore'> See more </button>
    </div>
  )
}
