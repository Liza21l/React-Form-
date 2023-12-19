import FormCreate from "./Components/Sign in/CreateForm"
import { useState } from "react"
import {nanoid} from "nanoid"
import List from "./Components/List/List"
const App = () => {
    const [products, setProducts] = useState( 
        JSON.parse(localStorage.getItem('products'))?
        JSON.parse(localStorage.getItem('products')):
        [
           
        ]
    )


    const setNewProducts = (productCandidate) => {
        setProducts([
            ...products,
            {
                id: nanoid(),
                ...productCandidate,
                status: "open"
            }
        ])
        localStorage.setItem('products', JSON.stringify(products))
    }
    const deleteProductItem = (idCandidate) => {
        const newList = products.filter(item => item.id !== idCandidate)
        setProducts([...newList])
        localStorage.setItem('products', JSON.stringify(newList))
    }

    const changeStatusProduct = (idCandidate) => {
        console.log(idCandidate)
        const newList = products.map(item => {
            if (item.id === idCandidate) {
                item.status = "edit"
            }
            return item
        })
        setProducts([...newList])
    }

    const saveChangeProduct = (newInfo) => {
        const newList = products.map(item => {
            if (item.id === newInfo.id) {
                item = {
                    ...item,
                    ...newInfo,
                    status: "open"
                }
            }
            return item
        })
        setProducts([...newList])
    }

    return (
        <>
            <FormCreate
            setNewProducts={setNewProducts}
            />
            <List products={products}
            deleteProductItem = {deleteProductItem}
            changeStatusProduct = {changeStatusProduct}
            saveChangeProduct ={saveChangeProduct}
            />
        </>
    )
}

export default App