'use client'
import { useState } from 'react'
import useFetchSrt from '@/hooks/useFetchSrt'
import Video from '@/components/Video/Video'
import Transcription from '@/components/Transcription/Transcription'
import Button from '@/components/Button/Button'
import { PageStyled } from './page.styles'

const Home = () => {
    const [currentTime, setCurrentTime] = useState(0)
    const [videoSetTo, setVideoSetTo] = useState<number>()
    const [isFirstVideo, setIsFirstVideo] = useState(true)

    const firstVideoSrt = useFetchSrt('/video1/captions.srt')
    const secondVideoSrt = useFetchSrt('/video2/captions.srt')

    const videoSubtitles = isFirstVideo ? firstVideoSrt : secondVideoSrt
    const videoPath = isFirstVideo ? '/video1/clip.mp4' : '/video2/clip.mp4'

    const track = [{ src: videoSubtitles.subtitles, kind: 'subtitles', srcLang: 'en', label: 'English' }]

    return (
        <PageStyled>
            <div className="videoWrapper">
                <Video key={videoPath} videoPath={videoPath} track={track} setCurrentTime={setCurrentTime} videoSetTo={videoSetTo} />
                <div className="buttonsWrapper">
                    <Button buttonText={'Clip 1'} onClick={() => setIsFirstVideo(true)} />
                    <Button buttonText={'Clip 2'} onClick={() => setIsFirstVideo(false)} />
                </div>
            </div>
            <Transcription title={'Transkript'} content={videoSubtitles.transcription} currentTime={currentTime} setVideoSetTo={setVideoSetTo} />
        </PageStyled>
    )
}

export default Home
