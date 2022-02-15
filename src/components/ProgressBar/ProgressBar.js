import React from 'react'
import { useProgress } from '@react-three/drei'
import { ContentWrapper, ProgressBarPanel, StyledBarWrapper, StyledImage, StyledProgressHeader, StyledProgressPercentage, StyledProgressSubtitle, StyledProgressText, TextWrapper } from './ProgressBarElements'
const ProgressBar = () => {
    const { active, progress, errors, item, loaded, total } = useProgress()

    return (
        <>
            <ProgressBarPanel>
                <ContentWrapper>
                    <TextWrapper>
                        <StyledProgressHeader>Henry Jones</StyledProgressHeader>
                        <StyledProgressSubtitle>Loading Three.js Homepage</StyledProgressSubtitle>
                    </TextWrapper>
                    <StyledImage src="/images/avatar.gif" alt="my head... spinning"/>
                    <StyledBarWrapper>                
                        <progress value= {progress} max ={100}/>
                        <StyledProgressPercentage>{Math.ceil(progress)}%</StyledProgressPercentage>
                    </StyledBarWrapper>
                    <StyledProgressText>Loading: {item}</StyledProgressText>
                </ContentWrapper>
            </ProgressBarPanel>
        </>
    )
}

export default ProgressBar
