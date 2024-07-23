import { SetStateAction } from 'react'

export type VideoProps = {
    videoPath: string
    track: {
        src: string
        kind: string
        srcLang: string
        label: string
    }[]
    setCurrentTime: (value: SetStateAction<number>) => void
    videoSetTo?: number
}
