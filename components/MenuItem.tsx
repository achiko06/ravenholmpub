import React from 'react'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { NextPage } from 'next'
import { Food } from '@/types'

const inter = Inter({ subsets: ['latin'] })

interface IProps {
  item: Food;
}

const MenuItem: NextPage<IProps> = ({ item: { name, price, description }}) => {
  return (
    <Link
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      className=""
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="">
        {name} <span>{price}</span>
      </h2>
      <p className="">
       {description}
      </p>
    </Link>
  )
}

export default MenuItem