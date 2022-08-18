import React from 'react'

const Product = ({ product, basket, setBasket }) => {

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
            <h3>{product.title}</h3>
            <p>{product.price} ₺ </p>
            <div className='actions'>
                <button className='sell-btn' onClick={removeBasket} disabled={!basketItem} >Çıkart</button>
                <span className='amount'>{basketItem && basketItem.amount || 0}</span>
                <button className='buy-btn ' onClick={addBasket}>Ekle</button>
            </div>
        </main >
    )
}

export default Product