import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Container} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import { listProducts } from '../actions/productAction'

const HomeScreen = () => {
  const dispatch = useDispatch()
  // const [products, setProducts] = useState([])

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])


  return (
    <>
        <h1>Latest Products</h1>
          {loading? <h2>Still loading</h2> : error ?  <h3>{error}</h3> : <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))} 
            </Row> }
            
    </> 
  )
}

export default HomeScreen;