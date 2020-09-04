import React from 'react'
import './Home.styles.css';

// Components : 
import Product from '../../components/Product/Product.component';

function Home() {
  return (
    <div className="home">
       <img src="https://www.amazon.fr/images/G/08/digital/video/gateway/placement/launch/MySpy/MYSPY_2020_FT_XSite_HeroTALL_3000x1200_PV_fr-FR._CB406306835_.jpg"
            alt=""
            className="home__image"
       />
       {/* 2 colum row */}
      <div className="home__row">
      <Product 
          id="123456"
          title="New XPS 17 9700 17 Laptop 10th Gen Core i7-10875H up to 5.1 GHz 8 cores RTX 2060 6GB Max-Q 
                 4K UHD Anti-Reflex 500-Nit Touch Display Plus Best Notebook Stylus Pen Light (1TB SSD RAID|32GB RAM|10 PRO) " 
          price={1559.97}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Op7K6t2zL._AC_SL1013_.jpg"
       />
       
      <Product 
          id="123456"
          title="pNEW Microsoft Surface Book 3 - 13.5 
                Touch-Screen - 10th Gen Intel Core i5 - 8GB Memory -
                256GB SSD (Latest Model) - Platinum " 
          price={1299.00}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/716cFXnM4SL._AC_SL1500_.jpg"
       />
      </div>

       {/* 3 colum row */}
      <div className="home__row">
      <Product 
          id="123456"
          title="Apple iPhone 11 Pro Max (64GB, Midnight Green) [Locked] + Carrier Subscription"
          price={1099.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/81bsgUsPM-L.jpg"
       />

      <Product 
          id="123456"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={999.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
       />

      <Product 
          id="123456"
          title="Microsoft Surface Pro 7 256GB i5 8GB RAM with Windows 10 Pro (Wi-Fi, Quad-Core i5-1035G4, Newest Version) Platinum PVR-00001"
          price={1087.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/618%2BM%2B0QsdL._AC_SL1500_.jpg"
       />
      </div>
      {/* 1 colum row */}
      <div className="home__row">
      <Product 
          id="123456"
          title="Samsung Business CH890 Series 34 inch WQHD 3440x1440 Ultrawide Curved Desktop Monitor for Business, 100 Hz, USB-C, HDMI, DP, 3 Year Warranty..."
          price={561.68}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71qkzkC7bHL._AC_SL1500_.jpg"
       />
      </div>


    </div>
  )
}

export default Home
