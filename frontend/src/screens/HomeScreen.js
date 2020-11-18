import React, { useEffect, useState } from 'react'

import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

export default function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('')
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const stringSplit = (keyword) => {
    let splitStr = keyword.toLowerCase().split(' ')
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    return splitStr.join(' ')
  }

  return (
    <div>
      <ul className='filter'>
        <li>
          <input
            name='searchKeyword'
            placeholder='Search Products'
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </li>
      </ul>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <div className='row center'>
          {products
            .filter((item) => item.name.includes(stringSplit(searchKeyword)))
            .map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
        </div>
      )}
    </div>
  )
}
