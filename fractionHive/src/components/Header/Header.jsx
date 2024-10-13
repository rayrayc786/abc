import React from 'react'
import Logo from '../../assets/logo.png'

const menuData = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'AboutUs',
        href: '/about-us'
    },
    {
        label:'Properties',
        href: '/properties'
    },
    {
        label:'Agents',
        href: '/agents'
    },
    {
        label:'Blog',
        href: '/blog'
    },
    {
        label: 'Contact Us',
        href: '/contact-us'
    },
];

const Header = () => {
  return (
    <div className=" text-black py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="Fraction Hive Logo" className="h-10 w-auto mr-4"/>
        <span className="text-xl font-bold">Fraction Hive</span>
      </div>
      <div className="space-x-4">
        {menuData.map((menu) => (
          <a key={menu.label} href={menu.href} className="hover:text-gray-300">
            {menu.label}
          </a>
        ))}
      </div>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Login</button>
      </div>
    </div>
  )
}

export default Header
