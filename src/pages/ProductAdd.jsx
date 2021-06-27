import React from 'react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaioTextInput'
import { Formik, Form,Field ,ErrorMessage} from 'formik'
import * as Yup from 'yup'//dogrulama yapmamızı saglayan bir yapı
import {FormField , Button ,Label } from 'semantic-ui-react'
export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Urun adı zorunlu"),
        unitPrice: Yup.number().required("Urun adı zorunlu"),

    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit = {(values)=> {
                    console.log(values)
                }}
            >
                <Form className = "ui form">
                <KodlamaIoTextInput name = "productName" placeholder = "Ürün Adı "/>
                <KodlamaIoTextInput name = "unitPrice" placeholder = "Ürün Fiyatı "/>    
                    <Button color = "green" type = "submit" >Ekle </Button>
                </Form>

            </Formik>
        </div>
    )
}
//redux-thunk - asenkron islemler