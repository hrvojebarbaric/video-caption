import styled from 'styled-components'

export const VideoStyled = styled.video`
    width: 100%;
    max-width: 720px;
    object-fit: contain;
    height: 420px;

    source {
        height: 100%;
        display: block;
    }

    @media (max-width: 1180px) {
        max-width: none;
    }
`
