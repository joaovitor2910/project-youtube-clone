import { BackgroundShorts, ContainerGrid, ContainerShorts, TitleIcon, TitleShorts, Titleh3, VideoShorts } from "./styles"
import ShortsIconRed from '../../assets/shorts-red.png'
import { TextCard, Title } from "../videoComponent/styles"

function Shorts() {
    return(
        <ContainerShorts>
            <TitleShorts>
                <TitleIcon src={ShortsIconRed}/>
                <Titleh3>Shorts</Titleh3>
            </TitleShorts>
            <ContainerGrid>
                <VideoShorts>
                    <BackgroundShorts></BackgroundShorts>
                    <Title>PC DE ATÉ 2000 MIL!</Title>
                    <TextCard>200 mil visualizações</TextCard>
                </VideoShorts>
                <VideoShorts>
                    <BackgroundShorts></BackgroundShorts>
                    <Title>PC DE ATÉ 2000 MIL!</Title>
                    <TextCard>200 mil visualizações</TextCard>
                </VideoShorts>
                <VideoShorts>
                    <BackgroundShorts></BackgroundShorts>
                    <Title>PC DE ATÉ 2000 MIL!</Title>
                    <TextCard>200 mil visualizações</TextCard>
                </VideoShorts>
                <VideoShorts>
                    <BackgroundShorts></BackgroundShorts>
                    <Title>PC DE ATÉ 2000 MIL!</Title>
                    <TextCard>200 mil visualizações</TextCard>
                </VideoShorts>
                <VideoShorts>
                    <BackgroundShorts></BackgroundShorts>
                    <Title>PC DE ATÉ 2000 MIL!</Title>
                    <TextCard>200 mil visualizações</TextCard>
                </VideoShorts>
            </ContainerGrid>
        </ContainerShorts>
    )
}

export default Shorts