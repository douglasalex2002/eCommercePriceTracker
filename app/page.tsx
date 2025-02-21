import React from 'react'
import Image from 'next/image'
import Searchb from '@/components/Searchb'
import Heroc from '@/components/Heroc'
import { getAllProducts } from '@/lib/actions'
import ProductCard from '@/components/ProductCard'

const Home = async () => {

  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="head-text">
              Unleash the power of
              <span className="text-blue-500"> PriceTracker</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>

            <Searchb />
          </div>
          <Heroc />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-7-16">
          {allProducts?.map
          ((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home