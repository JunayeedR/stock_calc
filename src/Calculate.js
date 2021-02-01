import React from 'react'
import Stocks from './Stocks'

export default function Calculate({calcs}) {
    return (
        calcs.map(curr_stock => {
            return <Stocks key={curr_stock.id} curr_stock = {curr_stock} />
        })
    )
}
