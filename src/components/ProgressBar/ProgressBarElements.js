import styled from 'styled-components'

export const ProgressBarPanel = styled.aside`
    z-index: 999;
    position: fixed;
    height: 100vh;
    width: 100vw;
    transition: 0.3s ease-in-out;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 0 0;
    pointer-events: none;
    transition: 1.5s ease-in-out;
    /* opacity: ${({ loaded }) => (!loaded ? '100%' : '0%')}; */
    
`
export const ContentWrapper = styled.div`
    position: relative;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledImage = styled.img`
    position: relative;
    max-width: 80%;
`

export const StyledBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 70px;

    progress {
        padding-top: 5px;
    }

    progress[value]{
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 30px;
    }

    progress[value]::-webkit-progress-bar{
        height: 60px;
        border-radius: 30px;
        background-color: #000;
    }
    
    @media screen and (max-width: 800){
        progress[value]::-webkit-progress-bar{
            height: 30px;
        }
        progress[value]::-webkit-progress-value{
        }
    }

    progress[value]::-webkit-progress-value{
        height: 60px;
        border-radius: 30px;
        background-color: #b00;
        
        @media screen and (max-width: 800){
            height: 30px;
        }
    }
`

export const StyledProgressText = styled.p`
    color: #666;
    font-size: 10px;

    @media screen and (max-width: 800){
        font-size: 8px;
    }

`

export const StyledProgressPercentage = styled.h1`
    text-align: center;
    padding: 0 10px;
    color: #888;
`

export const StyledProgressHeader = styled.h1`
    text-align: center;
    font-size: 60px;
    margin: 0 0 0 0;
    color: #bbb;
`
export const StyledProgressSubtitle = styled.h2`
    text-align: center;
    font-size: 20px;
    margin: 0 0 0 0;
    color: #888;
`

export const TextWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(30px);
`