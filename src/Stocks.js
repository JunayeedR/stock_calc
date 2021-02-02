import React from 'react'

const format = (num, decimals) => num.toLocaleString('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

export default function stocks({curr_stock}) {
    return (
        <div>
            <label> Your </label>
            {curr_stock.amount / curr_stock.price}
            <label> shares has increased by $</label>
            {(curr_stock.expected - curr_stock.price)}
            <label>, giving a $</label>
            {(curr_stock.amount / curr_stock.price) * (curr_stock.expected - curr_stock.price)}
            <label> gain, a </label>
            {100 * (curr_stock.expected - curr_stock.price) / curr_stock.price}
            <label>% increase</label><br /><br />
            
        </div>
    )
}
