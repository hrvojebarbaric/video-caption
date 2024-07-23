import { SetStateAction } from 'react'

export type DropDownProps = {
    options: string[]
    setData: (value: SetStateAction<string>) => void
}
