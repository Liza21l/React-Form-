import s from './FormCreate.module.scss'
import {useForm} from "react-hook-form"

const FormCreate = (props) => {
    const {register, handleSubmit, reset} = useForm()

    const onSubmit = (data) => {
        props.setNewProducts(data)
        reset()
    }
    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>Form create product</h2>
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
            <textarea 
                className={s.form_description}
                placeholder='Write description'
                {...register('description')}
            ></textarea>
            <button type="submit">Create</button>
        </form>
    )
}

export default FormCreate