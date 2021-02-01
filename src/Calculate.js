import React from 'react'
import Stocks from './Stocks'

export default function Calculate({testy}) {
    return (
        
        testy.map(balls => {
            return <Stocks key={balls} balls = {balls} />
        })
    )
}
