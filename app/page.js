'use client'

// order of operations
// add styling


import BtnGenerator from './BtnGenerator';
import { useEffect } from 'react';



export default function Home() {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])


  return (
    <>
      <h1 className='title'>Let's do basic arithmetic!</h1>
      <p className='instructions'>It currently does not do order of operations</p>
      <BtnGenerator />
    </>
  )
}
