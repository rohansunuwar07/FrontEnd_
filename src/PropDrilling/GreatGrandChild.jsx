//import React from 'react'

import { useContext } from "react"
import { Context } from "../App";

const GreatGrandChild = () => {
   // console.log(props.value)

   let value = useContext(Context);
  return (
    <div>GreatGrandChild {value}</div>
  )
}

export default GreatGrandChild