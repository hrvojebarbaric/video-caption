import { parseSrtToArray, srtToVtt, timestampToSeconds } from './helpers'

describe('srtToVtt', () => {
    test('converts SRT to VTT', () => {
        const srt = `1
00:00:00,000 --> 00:00:02,500
[JAZZ MUSIC PLAYING]

2
00:00:04,000 --> 00:00:06,500
[GROUND SHAKING AND BULLETS
 FIRING]`

        const expectedVtt = `WEBVTT

1
00:00:00.000 --> 00:00:02.500
[JAZZ MUSIC PLAYING]

2
00:00:04.000 --> 00:00:06.500
[GROUND SHAKING AND BULLETS
 FIRING]`

        expect(srtToVtt(srt).trim()).toBe(expectedVtt.trim())
    })
})

describe('parseSrtToArray', () => {
    test('parses SRT to array of objects', () => {
        const srt = `1
00:00:00,000 --> 00:00:02,000
Hello, world!

2
00:00:02,500 --> 00:00:04,000
Welcome to the test.`

        const expectedArray = [
            {
                startTime: '00:00:00,000',
                endTime: '00:00:02,000',
                text: 'Hello, world! ',
            },
            {
                startTime: '00:00:02,500',
                endTime: '00:00:04,000',
                text: 'Welcome to the test. ',
            },
        ]

        expect(parseSrtToArray(srt)).toEqual(expectedArray)
    })
})

describe('timestampToSeconds', () => {
    test('converts a typical timestamp to seconds', () => {
        const timestamp = '01:23:45,678'
        const expectedSeconds = 5025.678
        expect(timestampToSeconds(timestamp)).toBeCloseTo(expectedSeconds, 3)
    })

    test('handles timestamp with zero milliseconds', () => {
        const timestamp = '00:00:00,000'
        const expectedSeconds = 0
        expect(timestampToSeconds(timestamp)).toBe(expectedSeconds)
    })

    test('handles timestamp with maximum hours, minutes, and seconds', () => {
        const timestamp = '99:59:59,999'
        const expectedSeconds = 359999.999
        expect(timestampToSeconds(timestamp)).toBeCloseTo(expectedSeconds, 3)
    })

    test('handles timestamp with no milliseconds', () => {
        const timestamp = '01:23:45,000'
        const expectedSeconds = 5025
        expect(timestampToSeconds(timestamp)).toBe(expectedSeconds)
    })

    test('handles timestamp with varying milliseconds', () => {
        const timestamp = '00:01:00,123'
        const expectedSeconds = 60.123
        expect(timestampToSeconds(timestamp)).toBeCloseTo(expectedSeconds, 3)
    })
})
