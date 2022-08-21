import React from 'react'
import { moneyFormat } from '../helpers'
import BasketItem from './BasketItem'

const Basket = ({ basket, products, total, resetBasket }) => {
    return (
        <div>
            {basket.map((item, index) => (
                <BasketItem key={index} item={item} product={products.find(p => p.id === item.id)} />
            ))}
            {
                total > 0 && (
                    <p>toplam {moneyFormat(total)}₺</p>
                )
            }
            <button className="reset-btn" onClick={resetBasket} >sepeti sıfırla</button>

        </div>
    )
}

export default Basket