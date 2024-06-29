import { useContext, useEffect, useState } from "react"
import VideoComponent from "../../components/videoComponent"
import { ContainerHome, ContainerPage, ContainerVideos } from "./styles"
import { UserContext } from "../../context/userContext"
import Categorias from "../../components/categorias"
import Shorts from "../../components/shorts"
import Header from "../../components/header"
import Menu from "../../components/menu"
import MenuUser from "../../components/usermenu"
import moment from "moment"
import { useCategoryContext } from "../../context/categoriesSearch"
import axios from "axios"

function Home() {
    interface Videos {
        id: string;
        snippet: {
          title: string;
          thumbnails: {
            high: {
              url: string
            }
            maxres: {
              url: string;
            }
          }
          channelTitle: string;
          publishedAt: string;
        },
        statistics: {
          viewCount: string;
        }
      }

    const {openMenu} = useContext(UserContext)
    const API_KEY = "AIzaSyCRxUQzXp2eGRUggsowbgR-c3FX9Yg-LVE";
    const [videos, setVideo] = useState([])
    const {categoryId} = useCategoryContext()

    useEffect(() => {
        load()
    }, [categoryId])

    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`

    async function load() {
        try {
            const resposta = await axios.get(url)
            setVideo(resposta.data.items)
        } catch (erro) {
            console.log(erro);
            
        }
    }

    function formatViewCount(viewCount: number): string {
        if (viewCount >= 1000000) {
          return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`;
        } else if (viewCount >= 1000) {
          return `${(viewCount / 1000).toFixed(0)} mil visualizações`;
        } else {
          return `${viewCount} visualizações`;
        }
      }
    
      function getPublishedTime(publishedAt: string) {
        const now = moment();
        const publishedTime = moment(publishedAt);
        const diffDays = now.diff(publishedTime, 'days');
    
        if (diffDays <= 0) {
          return 'hoje';
        } else if (diffDays === 1) {
          return 'há 1 dia';
        } else if (diffDays <= 7) {
          return `há ${diffDays} dias`;
        } else if (diffDays <= 30) {
          const diffWeeks = Math.floor(diffDays / 7);
          if (diffWeeks === 1) {
            return 'há 1 semana';
          } else {
            return `há ${diffWeeks} semanas`;
          }
        } else if (diffDays <= 365) {
          const diffMonths = Math.floor(diffDays / 30);
          if (diffMonths === 1) {
            return 'há 1 mês';
          } else {
            return `há ${diffMonths} meses`;
          }
        } else {
          const diffYears = Math.floor(diffDays / 365);
          if (diffYears === 1) {
            return 'há 1 ano';
          } else {
            return `há ${diffYears} anos`;
          }
        }
      }

    
    return (
        <>
        <Header />
        <MenuUser />
        <ContainerPage>
        
        <Menu />
        <ContainerHome>
            <Categorias />
            <ContainerVideos openMenu={openMenu}>
                {videos.map((item : Videos) => ( 
                    <VideoComponent title={item.snippet.title}
                    thumbnail={item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url}
                    channelImage={item.snippet.channelTitle.charAt(0).toUpperCase()}
                    channelName={item.snippet.channelTitle}
                    details={`${formatViewCount(Number(item.statistics.viewCount))} - ${getPublishedTime(item.snippet.publishedAt)}`}
                    key={item.id}
                    />

                ))}
            </ContainerVideos>
            <Shorts />
            <ContainerVideos openMenu={openMenu}>
                
            </ContainerVideos>
        </ContainerHome>
        </ContainerPage>
        </>
    )
}

export default Home