import { useEffect, useRef } from 'react'
import { VideoProps } from './Video.types'
import { VideoStyled } from './Video.styles'

const Video = (props: VideoProps) => {
    const { videoPath, track, setCurrentTime, videoSetTo } = props
    const videoRef = useRef<HTMLVideoElement>(null)

    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current?.currentTime as number)
    }

    useEffect(() => {
        if (videoRef.current && videoSetTo) videoRef.current.currentTime = videoSetTo
    }, [videoSetTo])

    return (
        <VideoStyled ref={videoRef} controls preload="none" onTimeUpdate={handleTimeUpdate}>
            <source src={videoPath} type="video/mp4" />
            {track.map((subtitle, index) => (
                <track key={index} {...subtitle} />
            ))}
            Your browser does not support the video tag.
        </VideoStyled>
    )
}

export default Video
