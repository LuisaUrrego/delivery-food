import React, { useEffect, useState } from 'react'
import back from "../../assets/chevron-left.svg"
import tarjeta from "../../assets/tarjeta.png"
import paypal from "../../assets/paypal.png"
import { useDispatch, useSelector } from 'react-redux'
import location from "../../assets/Vector.svg"
import { useNavigate } from 'react-router-dom'
import { StyleCart } from './StyleCart';
import AmountProduct from './AmountProduct'
import { agregarElemento, reiniciarReducer } from '../../redux/reducers/shoppingCartReducer';

const Cart = () => {
    const choosedProducts = useSelector((state) => state.shoppingCart);
    const [shopList, setShopList] = useState([]);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleTotal = (precio) => {
        let temp = total;
        setTotal(temp + precio)
    }

    const despacharAgregar = () => {
        const nuevoElemento = {total};
        dispatch(agregarElemento(nuevoElemento)); 
        dispatch(reiniciarReducer());
        navigate(`/confirmationBuy`)
      };

    const handleback = () => {
        navigate(`/Menu/Home`);
    }

    useEffect(() => {
        setShopList(choosedProducts.shoppingCart)
        console.log(choosedProducts)
    }, []);

    useEffect(() => {
        let precio = 0;
        choosedProducts.shoppingCart.map(item => {
            precio = precio + (item.platoSelected.precio * item.contador);
            handleTotal(precio)
        }
        )
    }, [choosedProducts]);


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

                                    return <div className='productList'>
                                        <img src={item.platoSelected.imagen} alt="food" />
                                        <AmountProduct cantidad={item.contador} />
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

            <h2 className='paymentTotal'>Total: ${total}</h2>

            <button onClick={despacharAgregar} className='orderButton'>
                Order
            </button>
        </StyleCart>
    )
}

export default Cart
