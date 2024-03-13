import React from 'react'
import CardPrices from '../common/CardPrices'

function PackagesCards() {
    return (
        <section className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8"> 
    {/* <!-- Heading --> */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Top Tour Packages in India</h2>

      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
    </div>
    {/* <!-- /Heading --> */}
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
      <CardPrices
         className="flex flex-col items-center gap-4 md:flex-row lg:gap-6"
         imageSrc="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
         title="The Pines and the Mountains"
         date="April 2, 2022"
         excerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo."
         link="#"
      />
      <CardPrices
         className="flex flex-col items-center gap-4 md:flex-row lg:gap-6"
         imageSrc="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
         title="The Pines and the Mountains"
         date="April 2, 2022"
         excerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo."
         link="#"
      />
      <CardPrices
         className="flex flex-col items-center gap-4 md:flex-row lg:gap-6"
         imageSrc="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
         title="The Pines and the Mountains"
         date="April 2, 2022"
         excerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo."
         link="#"
      />
      <CardPrices
         className="flex flex-col items-center gap-4 md:flex-row lg:gap-6"
         imageSrc="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
         title="The Pines and the Mountains"
         date="April 2, 2022"
         excerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo."
         link="#"
      />
    </div>
  </div>
</section>
    )
}

export default PackagesCards
