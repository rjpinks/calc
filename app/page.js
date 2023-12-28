'use client'

// order of operations

import BtnGenerator from './BtnGenerator';
import { useEffect } from 'react';

export default function Home() {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])

  return (
    <>
      <h1 className='title'>Let's do basic arithmetic!</h1>
      <p className='instructions'>Please Excuse My Dear Aunt Sally 🤓!!</p>
      <BtnGenerator />
    </>
  )
}
