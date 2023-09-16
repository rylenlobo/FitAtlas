import React from 'react'
import { GlobalStateContext } from '../../Context/Context'
import { useContext } from 'react'

const CartPage = () => {
 const {item} = useContext(GlobalStateContext)

  return (
    <div>
      {item}
    </div>
  )
}

export default CartPage
