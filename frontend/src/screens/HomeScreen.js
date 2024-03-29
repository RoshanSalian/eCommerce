import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Container} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
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
          {loading? <Loader /> : error ?  <Message variant='danger'>{error}</Message> : <Row>
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