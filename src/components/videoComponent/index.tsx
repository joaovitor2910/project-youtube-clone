import { useContext, useEffect, useState } from "react"
import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles"
import axios from "axios";
import { CategoryProvider, useCategoryContext } from "../../context/categoriesSearch";
import moment from "moment";

interface Props {
  title: string
  thumbnail: string
  channelImage: string
  channelName: string
  details: string
}

function VideoComponent(props: Props) {
  
    return (
        <Container>
            <ImageBanner alt="thumbnail" src={props.thumbnail} />
            <TitleContainer>
              <ChannelImage>
                {props.channelImage}
              </ChannelImage>
                <TextContainer>
                  <Title>{props.title}</Title>
                  <TextCard>{props.channelName}</TextCard>
                  <TextCard>{props.details}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent