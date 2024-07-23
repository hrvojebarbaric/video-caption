import styled from 'styled-components'

export const PageStyled = styled.main`
    display: flex;
    padding: 6rem;
    min-height: 100vh;
    background-color: #222;
    font-size: 10px;
    align-items: flex-start;
    align-content: flex-start;

    .videoWrapper {
        width: 70%;
        max-width: 720px;
        height: auto;

        .buttonsWrapper {
            display: flex;
            justify-content: center;
        }

        @media (max-width: 1180px) {
            width: 100%;
            max-width: none;
            margin: 0 20px;
        }
    }

    @media (max-width: 1180px) {
        flex-direction: column;
    }
`
