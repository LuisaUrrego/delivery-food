import React, { useEffect, useState } from 'react'
import back from "../../assets/chevron-left.svg"
import tarjeta from "../../assets/tarjeta.png"
import paypal from "../../assets/paypal.png"
import { useDispatch, useSelector } from 'react-redux'
import location from "../../assets/Vector.svg"
import { useNavigate } from 'react-router-dom'
import { StyleCart} from './StyleCart';
import AmountProduct from './AmountProduct'

const Cart = () => {
    const choosedProducts = useSelector((state) => state.shoppingCart);
    const [shopList, setShopList] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleback = () => {
        navigate(`/Menu/Home`);
    }

    useEffect(() => {
        setShopList(choosedProducts.shoppingCart)
        console.log(choosedProducts)
    }, []);

    return (
        <StyleCart>
            <nav>
                <img onClick={handleback} src={back} alt="back" />
                <h3>New order</h3>
            </nav>
            <section className='addressInfo'>
                <h2>Deliver to</h2>
                <div>
                    <img className="location" src={location} alt="location" />
                    <h4 className='address'>882 Well St, New-York</h4>
                </div>
            </section>
            <section className='paymentInfo'>
                <h2>Payment</h2>
                <div className='pyamentMethods'>
                <button>
                   <p> cash</p>
                </button>
                <button>
                    <img src={tarjeta} alt="tarjeta" />
                    <p>Tarjeta</p>
                </button>
                <button>
                    <img src={paypal} alt="paypal" />
                    <p>Paypal</p>
                </button>
                </div>
            </section>
            <main>
                {
                    choosedProducts ? (
                        <div>
                            {
                                choosedProducts.shoppingCart.map(item => {
                                   
                            return  <div className='productList'>
                                        <img src={item.platoSelected.imagen} alt="food" />
                                        <AmountProduct cantidad ={item.contador}/>
                                        <h3>{item.platoSelected.nombre}</h3>

                                    </div>
                                })
                            }
                        </div>
                    ) : (
                        <div className="loading">Loading...</div>
                    )
                }
            </main>
        </StyleCart>
    )
}

export default Cart
