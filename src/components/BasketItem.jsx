import React from 'react'

const BasketItem = ({ item, product }) => {
    return (
        <div>
            {
                item.amount > 0 && (
                    <>
                        {product.title} x {item.amount}
                    </>
                )
            }
        </div>
    )
}

export default BasketItem