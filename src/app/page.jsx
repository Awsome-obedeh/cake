import Image from 'next/image'
import styles from './page.module.css'
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import CakeList from '@/components/cakelist';

const data=[
  {
    id:1,
    img:"https://images.unsplash.com/photo-1553602870-e8a48bd4cd12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc:"vanilla Single LAyer Cake -10 Inches",
    price:9000,
    name:"budget cakes"
  },
  {
    id:2,
    img:"https://images.unsplash.com/photo-1553602870-e8a48bd4cd12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc:"vanilla Single LAyer Cake -10 Inches",
    price:9000,
    name:"budget cakes"
  },
  {
    id:3,
    img:"https://images.unsplash.com/photo-1553602870-e8a48bd4cd12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc:"vanilla Single LAyer Cake -10 Inches",
    price:9000,
    name:"budget cakes"
  },
  {
    id:4,
    img:"https://images.unsplash.com/photo-1553602870-e8a48bd4cd12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc:"vanilla Single LAyer Cake -10 Inches",
    price:9000,
    name:"budget cakes"
  },
  {
    id:5,
    img:"https://images.unsplash.com/photo-1553602870-e8a48bd4cd12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc:"vanilla Single LAyer Cake -10 Inches",
    price:9000,
    name:"budget cakes"
  },
  {
    id:6,
    img:"https://images.unsplash.com/photo-1553602870-e8a48bd4cd12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc:"vanilla Single LAyer Cake -10 Inches",
    price:9000,
    name:"budget cakes"
  },
]


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
          <FaCakeCandles style={{fontSize:'2.5rem',color:"hotpink"}}/>
          <p className='title'>Affordable Cakes</p>
          <p className="desc">Our cakes are affordable, delicious and excellente </p>
        </div>
        <div className="fireworks">
          <FaMoneyBillWaveAlt style={{fontSize:'2.5rem',color:"hotpink"}}/>
          <p className='title'>Free Fireworks!</p>
          <p className="desc">Our cakes are affordable, delicious and excellente </p>
        </div>
        <div className="shipping">
          <TbTruckDelivery style={{fontSize:'2.5rem',color:"hotpink"}}/>
          <p className='title'>Fastest Free Shipping</p>
          <p className="desc">We deliver even at the shortest notice completely free </p>
        </div>
    </section>

    {/* cake delivered */}
    <section className="delivered container">
      <h1 >20,000</h1>
      <h3>Successfully Cake Deliveries</h3>
      <hr className='rule'/>

    </section>

    <section className="budgets container">
      
      {
        data.map((cake)=>{
          return(
            

              <CakeList cake={cake}/>
              
           
          )
        })
      }

    </section>
    </div>
    )
  }
