import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelection, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { listProductDetail } from '../actions/productAction'


const ProductScreen = ({ match }) => {
    const  { id } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector(state => state.productDetail)
    const { loading, error, product } = productDetail


    useEffect(() => {
        dispatch(listProductDetail(id))
      }, [dispatch, match])


  return (
    <>
        <Link className='btn btn-light my-3' to='/'>
            Back
        </Link>
        {loading ? <Loader /> ? error : <Message variant='danger'>{error}</Message> : 
            <Row>
            <Col sm={6}>
                <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
                {/* <Image src={product.image} alt={product.name}></Image> */}
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>{product.name}</h2>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>

            <Col>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>

                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>

                                <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className='col-12' type='button' disabled={product.countInStock===0}>
                                Add to Cart
                            </Button>
                        </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        }
        
    </>
  )
}

export default ProductScreen