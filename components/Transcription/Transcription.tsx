import { timestampToSeconds } from '@/utils/helpers'
import { TranscriptionProps } from './Transcription.types'
import { TranscriptionStyled } from './Transcription.styles'
import { useState } from 'react'
import DropDown from '../DropDown/DropDown'

const Transcription = (props: TranscriptionProps) => {
    const { title, content, currentTime, setVideoSetTo } = props

    const [fontSize, setFontSize] = useState('')
    const [fontColor, setFontColor] = useState('')

    const currentTimeCompare = Number(currentTime.toFixed(2))

    return (
        <TranscriptionStyled $fontColor={fontColor} $fontSize={fontSize}>
            <h3 className="transcriptionTitle">{title}</h3>
            <div className="transcription">
                <ul className="transcriptionUnorderedList">
                    {content?.map((item, index) => {
                        const activeItem = timestampToSeconds(item.startTime) <= currentTimeCompare && timestampToSeconds(item.endTime) >= currentTimeCompare

                        return (
                            <li
                                key={index}
                                className={activeItem ? 'activeTranscription' : ''}
                                onClick={() => setVideoSetTo((prev) => (prev = timestampToSeconds(item.startTime) + 0.01))}
                            >
                                <p>
                                    <span className="time">{item.startTime.split(',')[0].substring(3)}</span>
                                    {item.text}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="settingsWrapper">
                <div className="dropDownWrapper">
                    <h3>Font size</h3>
                    <DropDown options={['10px', '12px', '14px']} setData={setFontSize} />
                </div>
                <div className="dropDownWrapper">
                    <h3>Font color</h3>
                    <DropDown options={['black', 'red', 'blue']} setData={setFontColor} />
                </div>
            </div>
        </TranscriptionStyled>
    )
}

export default Transcription
