import styled from "styled-components";
import { Banner, Title, YourVideosContainer } from "./styles";

interface Props {
    title: string,
    description: string,
    banner: any
}


function YourVideosCards(props : Props) {
    
    return (
        <YourVideosContainer>
            <Banner alt="thumbnail" src={props.banner}/>
            <Title>{props.title}</Title>
            <Title>{props.description}</Title>
        </YourVideosContainer>
    )
}

export default YourVideosCards