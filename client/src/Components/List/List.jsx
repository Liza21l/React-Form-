import Item from "./Item";
import s from './list.module.scss'
import FormEdit from '../formEdit/formEdit'

const List = (props) => {
    const ProductCollection = props.products.map(item => {
        if (item.status === "open"){
        return (
            <Item
            changeStatusProduct = {props.changeStatusProduct}
            deleteProductItem = {props.deleteProductItem}
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            />
        )
    } else {
        return ( <FormEdit 
        key={item.id}
        id = {item.id}
        saveChangeProduct={props.saveChangeProduct}
        />)
    
    }})
    return (
        <ul className={s.list}>
            {ProductCollection}
        </ul>
    )
}

export default List