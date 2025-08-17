// import { useState } from 'react'
import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/electron-vite.animate.svg'
import './App.css'

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data));
  }, []);

  return (
    <>
      <div>
        {/*
          Pastikan `products` adalah array sebelum menggunakan `.map()`.
          Meskipun `useState([])` sudah menentukannya, lebih baik
          menambahkan kondisi untuk menghindari error saat data belum terisi.
        */}
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} style={{ width: '200px', border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
            </div>
          ))
        ) : (
          // Tampilkan pesan loading atau indikator lainnya saat data masih dimuat
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export default App
