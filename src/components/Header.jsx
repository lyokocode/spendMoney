import React from 'react'
import { moneyFormat } from '../helpers'
import { BsBasket } from "react-icons/bs"

const Header = ({ money, total, modalToogle }) => {
    return (
        <header className='header'>
            {total > 0 && money - total !== 0 && (
                <>Harcayacak <span className='money'>{moneyFormat(money - total)}₺</span> paranız kaldı</>
            )}
            {total === 0 && (
                <>Harcamak için <span className='money'>{moneyFormat(money)}₺</span> paranız var</>
            )}
            {money - total === 0 && (
                <>valla ülkeyi sen daha hızlı soydun. Tebrikler...</>
            )}

            <BsBasket className='basket-icon' onClick={modalToogle} />

        </header>
    )
}

export default Header