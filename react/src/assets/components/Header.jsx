import React from 'react'

const Header = () => {
  return (
    <>
    <div className='NavBar'>
        <div className='left_section'>
            <ul className='list'>
                <li>home</li>
                <li>download</li>
                <li>about</li>
                <li>contact us</li>
            </ul>
        </div>
        <div className='right_section'>
            <div className='items'>
            <input type="search" placeholder='Search...'/>
            <h3 className='logOut'>LogOut</h3>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Header