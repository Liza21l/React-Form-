import {useForm} from "react-hook-form"
import s from "./formEdit.module.scss"

const FormEdit= (props) => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log(data)
        props.saveChangeProduct({
            id: props.id,
            ...data
        })
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Edit card</h2>
            <input
                className={s.form_input }
                type="text"
                placeholder='write name product'
                {...register('name', {minLength: 5, max: 50})}
            />
            <input
                className={s.form_input}
                type="number"
                placeholder='write price product'
                {...register('price', {min: 1,})}
            />
            <button type="submit">Save</button>
        </form>
    )
}

export default FormEdit