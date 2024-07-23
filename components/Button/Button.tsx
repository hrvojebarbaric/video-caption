import { ButtonProps } from './Button.types'
import { ButtunStyled } from './Button.styles'

const Button = (props: ButtonProps) => {
    const { buttonText, onClick } = props
    return <ButtunStyled onClick={onClick}>{buttonText}</ButtunStyled>
}

export default Button
