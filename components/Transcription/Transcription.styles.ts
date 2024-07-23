import styled from 'styled-components'

type Props = {
    $fontSize: string
    $fontColor: string
}

export const TranscriptionStyled = styled.div<Props>`
    width: 30%;
    max-width: 400px;
    margin: 0 20px;
    padding: 20px;
    background-color: #eee;
    border-radius: 5px;
    color: ${(props) => props.$fontColor};
    font-size: ${(props) => props.$fontSize};

    .transcriptionTitle {
        margin-bottom: 10px;
    }

    .settingsWrapper {
        display: flex;
        margin-top: 10px;

        .dropDownWrapper {
            margin-right: 10px;
        }
    }

    .transcription {
        width: 100%;
        height: 400px;
        overflow: auto;

        .transcriptionUnorderedList {
            list-style-type: none;
            font-weight: bold;

            li {
                padding: 5px;
                cursor: pointer;
            }

            .activeTranscription {
                background-color: #d4d4ff;
                border-radius: 5px;
            }

            .time {
                margin-right: 10px;
            }
        }
    }

    @media (max-width: 1180px) {
        width: 100%;
        max-width: none;
    }
`
