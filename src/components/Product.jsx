import React from 'react'

const Product = ({ product, basket, setBasket }) => {

    const addBasket = () => {
        setBasket([...basket, product])
    }

    return (
        <main className='product'>
            <h3>{product.title}</h3>
            <p>{product.price} ₺ </p>
            <div className='actions'>
                <button className='sell-btn'>Çıkart</button>
                <span>0</span>
                <button className='buy-btn ' onClick={addBasket}>Ekle</button>
            </div>
        </main>
    )
}

export default Product