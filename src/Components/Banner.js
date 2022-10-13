import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-no-repeat bg-cover bg-[url(https://i.ibb.co/7Q0G7hX/black-friday-background-with-tablet-mock-up-23-2148330755.jpg)]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
    data-aos='fade-left'
    data-aos-duration='1000'
    data-aos-delay='200'
    src="https://i.ibb.co/QmgZVJP/wireless-technology-devices-isometric-icons-set-1284-15264.webp" className="max-w-sm rounded-lg shadow-2xl" />
    <div className='text-orange-300 text-left shadow-lg'>
      <h1
      data-aos='fade-right'
      data-aos-duration='1000'
      data-aos-delay='200'
      className="text-5xl font-bold">Get the best Products</h1>
      <p 
       data-aos='fade-right'
       data-aos-delay='400'
       data-aos-duration='900'
      className="py-6">We supply the best products to your doorstep. Our company supplies the electronics gadgets and Devices . Find all the products you want from us.</p>
      <button
      data-aos='zoom-in'
      data-aos-delay='1000'
      className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;