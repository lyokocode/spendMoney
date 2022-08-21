import React from 'react'
import { moneyFormat } from '../helpers'

const Product = ({ product, basket, setBasket, total, money }) => {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)

        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])

        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }

    }

    const removeBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)

        if (checkBasket.amount === 0) {
            setBasket([...basket.filter(item => item.id !== product.id)])
        } else {

            checkBasket.amount -= 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }

    }


    return (
        <main className='product'>
            <div className='image-container'>
                <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <p>{moneyFormat(product.price)} ₺ </p>
            <div className='actions'>
                <button className='sell-btn' onClick={removeBasket} disabled={!basketItem || basketItem.amount == 0} >Çıkart</button>
                <span className='amount'>{basketItem && basketItem.amount || 0}</span>
                <button className='buy-btn' onClick={addBasket} disabled={total + product.price > money}>Ekle</button>
            </div>
        </main >
    )
}

export default Product