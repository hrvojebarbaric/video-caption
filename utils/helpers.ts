import { Srt } from '@/utils/helpers.types'
import { numberRegex, textRegex, timeRegex } from './regex'

export const srtToVtt = (srt: string) => {
    let vtt = 'WEBVTT\n\n'
    const lines = srt.split(/\r?\n/)

    lines.forEach((line) => {
        if (timeRegex.test(line)) {
            vtt += line.replaceAll(',', '.') + '\n'
        } else {
            vtt += line + '\n'
        }
    })

    return vtt
}

export const parseSrtToArray = (srt: string) => {
    const srtArray: Srt[] = []
    const srtBlocks = srt.split(/\r?\n/)

    let startTime: string = ''
    let endTime: string = ''
    let text: string = ''

    for (let i = 0; i <= srtBlocks.length; i++) {
        const block = srtBlocks[i]

        if (timeRegex.test(block)) {
            const times = block.split(' --> ')
            startTime = times[0].trim()
            endTime = times[1].trim()
        }

        if (textRegex.test(block) && block) {
            text += `${block} `
        }

        if ((numberRegex.test(block) && startTime) || (i === srtBlocks.length && startTime)) {
            srtArray.push({
                startTime: startTime,
                endTime: endTime,
                text: text,
            })
            text = ''
        }
    }

    return srtArray
}

export const timestampToSeconds = (timestamp: string) => {
    let [time, milliseconds] = timestamp.split(',')
    let [hours, minutes, seconds] = time.split(':').map(Number)

    let totalSeconds = hours * 3600 + minutes * 60 + seconds + Number(milliseconds) / 1000

    return totalSeconds
}
