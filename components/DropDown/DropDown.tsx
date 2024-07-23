import { useEffect } from 'react'
import { DropDownProps } from './DropDown.types'

const DropDown = (props: DropDownProps) => {
    const { options, setData } = props

    const onOptionChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setData(event.target.value)
    }

    useEffect(() => {
        setData(options[0])
    }, [])

    return (
        <select onChange={onOptionChangeHandler}>
            {options.map((option, index) => {
                return <option key={index}>{option}</option>
            })}
        </select>
    )
}

export default DropDown
