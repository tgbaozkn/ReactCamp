import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Icon, Label, Menu, Table, Container ,Button} from 'semantic-ui-react'
import '../App.css';
import ProductService from '../services/productService';
import {useDispatch} from "react-redux";
import { AddToCart,RemoveFromCart} from '../store/actions/cartActions';
import {toast } from "react-toastify";
export default function ProductList() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]) //destructor
    useEffect(()=>{
        let productService = new ProductService()
        productService.getProducts().then(result=> setProducts(result.data.data))
    },[])
    const handleAddToCart = (product)=>{
        dispatch(AddToCart(product));
        toast.success(`${product.productName} is added!` );
    }
    const handleDeletefromCart=(product)=>{
        dispatch(RemoveFromCart(product));
        toast.danger(`${product.productName} is removed!`);
    }
    return (
        <div>
            <Container className="table" style={{ marginTop: '10px' }}>
                <Table celled >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name of product</Table.HeaderCell>
                            <Table.HeaderCell>Unit Price</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Category</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            products.map(product => (
                                <Table.Row key = {product.id}> 
                                    <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
                                    <Table.Cell>{product.unitPrice}</Table.Cell>
                                    <Table.Cell>{product.unitsInStock}</Table.Cell>
                                    <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                                    <Table.Cell>{product.category?.categoryName}</Table.Cell>
                                    <Table.Cell><Button onClick={()=>handleAddToCart(product)}>Add Cart</Button></Table.Cell>

                                </Table.Row>
                            ))
                        }

                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </Container>
        </div>


    );
}