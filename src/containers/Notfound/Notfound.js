import React from 'react'
import { Link } from 'react-router-dom'

export const Notfound = () => {
  return (
    <div style={{
      fontSize: 50,
      color:'#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      background: '#0c0c0c',
      position:'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex : 1
    }}>
      Page not Found!
      <span style={{fontSize: 100, fontWeight: 600}}>Error 404</span>
      <Link to='/'
      // style={{display:'block', padding: '15px 30px', marginTop: '30px', fontSize: 30, textTransform: 'uppercase', border: '1px solid'}}
        className='btn'
        style={{position: 'relative', zIndex: 100}}
      >go to Home</Link>
    </div>
  )
}
