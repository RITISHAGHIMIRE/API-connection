import React from 'react'
import Toolbar from '../../Components/navigation/Toolbar'
import Footer from '../../Components/navigation/Footer'

function Layout({children}) {
  return (
    <div className=''>
      <Toolbar />
<div>
{children}
</div>
      <Footer />

    </div>
  )
}

export default Layout