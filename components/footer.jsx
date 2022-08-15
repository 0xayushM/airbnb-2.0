import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 px-16 md:px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800' >
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800' >
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>Accessibilty</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800' >
        <h5 className='font-bold'>HOST</h5>
        <p>Ayush Mangal</p>
        <p>Presents</p>
        <p>Airbnb clone</p>
        <p>Using NextJs</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800' >
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi</p>
        <p>Easter eggs</p>
        <p>Keep building</p>
      </div>
    </div>
  )
}

export default Footer
