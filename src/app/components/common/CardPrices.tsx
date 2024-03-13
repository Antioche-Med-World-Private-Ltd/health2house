import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function CardPrices({ imageSrc, title, excerpt, link, backgroundImage }:any) {
    return (
        <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
      <Link href={link} className="group relative block h-48 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
        <Image
          src={imageSrc}
          loading="lazy"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          width={302}
          height={356}
        />
      </Link>

      <div className="flex flex-col gap-2">

        <h2 className="text-xl font-bold text-gray-800">
          <Link href={link} className="transition duration-100 hover:text-rose-500 active:text-rose-600">{title}</Link>
        </h2>

        <p className="text-gray-500">{excerpt}</p>

        <div>
          <Link href={link} className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">
            See all prices
          </Link>
        </div>
      </div>
    </article>
    )
}

export default CardPrices
