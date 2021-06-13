import React, { useState ,useEffect} from 'react';
import { Icon, Label, Menu, Table, Container } from 'semantic-ui-react'
import '../App.css';
import ProductService from '../services/productService';
export default function ProductList() {

    const [products, setProducts] = useState([]) //destructor
    useEffect(()=>{
        let productService = new ProductService()
        productService.getProducts().then(result=> setProducts(result.data.data))
    })
    return (
        <div>
            <Container className="table" style={{ marginTop: '10px' }}>
                <Table celled >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Urun Adı</Table.HeaderCell>
                            <Table.HeaderCell>Birim Fiyat</Table.HeaderCell>
                            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
                            <Table.HeaderCell>Açıklama</Table.HeaderCell>
                            <Table.HeaderCell>Kategori</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            products.map(product => (
                                <Table.Row key = {product.id}> 
                                    <Table.Cell>{product.productName}</Table.Cell>
                                    <Table.Cell>{product.unitPrice}</Table.Cell>
                                    <Table.Cell>{product.unitsInStock}</Table.Cell>
                                    <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                                    <Table.Cell>{product.category.categorName}</Table.Cell>

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