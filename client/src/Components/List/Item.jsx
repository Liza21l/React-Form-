import s from "./list.module.scss"

const Item = (props) => {
    const onDelete = () => {
        props.deleteProductItem(props.id)
    }
    const onEdit = () => {
        props.changeStatusProduct(props.id)
    }
    return (
        <div className={s.list}>
            <li className={s.list_item}>
                <p className={s.list_name}>{props.name}</p>
                <p className={s.list_price}>{props.price}$</p>
                <p>{props.description}</p>
                <button className={s.btnDelete} onClick={onDelete}>Delete</button>
                <button className={s.btnDelete_btnEdit} onClick={onEdit}>Edit</button>
            </li>
       </div>
   )
}

export default Item
