import React from 'react'
import { moneyFormat } from '../helpers'
import BasketItem from './BasketItem'
import { AiOutlineClose } from "react-icons/ai"

const Basket = ({ basket, products, total, resetBasket, modalToogle }) => {
    return (
        <div className='modal'>
            <button className='modal-close' onClick={modalToogle}>
                <AiOutlineClose className='close-icon' />
            </button>
            <div className='modal-product'>
                {basket.map((item, index) => (
                    <BasketItem key={index} item={item} product={products.find(p => p.id === item.id)} />
                ))}
                {
                    total > 0 && (
                        <p>toplam {moneyFormat(total)}₺</p>
                    )
                }
            </div>
            <button className="reset-btn" onClick={resetBasket} >sepeti sıfırla</button>

        </div>
    )
}

export default Basket