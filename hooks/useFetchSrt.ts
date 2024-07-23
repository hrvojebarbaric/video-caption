import { srtToVtt, parseSrtToArray } from '@/utils/helpers'
import { Srt } from '@/utils/helpers.types'
import { useEffect, useState } from 'react'

const useFetchSrt = (srtPath: string) => {
    const [subtitles, setSubtitles] = useState('')
    const [transcription, setTranscription] = useState<Srt[]>()

    useEffect(() => {
        fetch(srtPath)
            .then((response) => response.text())
            .then((text) => {
                const vttSub = srtToVtt(text)
                setTranscription(parseSrtToArray(text))
                setSubtitles(URL.createObjectURL(new Blob([vttSub])))
            })
            .catch((error) => console.error('Error fetching SRT file:', error))
    }, [])

    return { subtitles, transcription }
}

export default useFetchSrt
