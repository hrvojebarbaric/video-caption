import { Srt } from '@/utils/helpers.types'
import { SetStateAction } from 'react'

export type TranscriptionProps = {
    title: string
    content: Srt[] | undefined
    currentTime: number
    setVideoSetTo: (value: SetStateAction<number | undefined>) => void
}
