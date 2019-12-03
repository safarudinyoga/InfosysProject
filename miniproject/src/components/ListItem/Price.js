import React from 'react'

export default function Price(props) {
    const harga = (rate) => {
        if (rate <= 3) {
            return <h4 className='text-left mt-2'>Rp. 3.500</h4>
        } else if (rate >= 3 && rate <= 6) {
            return <h4 className='text-left mt-2'>Rp. 8.250</h4>
        } else if (rate >= 6 && rate <= 8) {
            return <h4 className='text-left mt-2'>Rp. 16.350</h4>
        } else if (rate >= 8 && rate <= 10) {
            return <h4 className='text-left mt-2'>Rp. 21.250</h4>
        } else {
            return <h4 className='text-left'>Not in Range</h4>
        }
    }

    return (
        <div>
            {harga(props.rate)}
        </div>
    )
}
