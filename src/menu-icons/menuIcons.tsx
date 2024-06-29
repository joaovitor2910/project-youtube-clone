import houseIcon from '../menu-icons/pagina-inicial.png'
import shortsIcon from '../menu-icons/youtube-shorts-logo-15252.png'
import inscricao from '../menu-icons/youtube-videos-7639.png'
import seuCanal from '../menu-icons/meucanal-icon.png'
import iconHistoric from '../menu-icons/historico-icon.png'
import seusvideos from '../menu-icons/seus-videos.png'
import assistirDepois from '../menu-icons/relogio.png'
import gostei from '../menu-icons/gostar.png'
import canal from '../menu-icons/conta.png'
import listaIcon from '../menu-icons/lista-de-itens.png'
import emAlta from '../menu-icons/fogo.png'
import shopping from '../menu-icons/shopping.png'
import musica from '../menu-icons/musica.png'
import filmes from '../menu-icons/filmes.png'
import aovivo from '../menu-icons/ao-vivo.png'
import jogos from '../menu-icons/jogar.png'
import noticias from '../menu-icons/jornal.png'
import esportes from '../menu-icons/trofeu.png'
import cursos from '../menu-icons/lampada.png'
import podcast from '../menu-icons/podcast.png'
import ytPremium from '../menu-icons/yt-premium.png'
import ytStudio from '../menu-icons/yt-studio.png'
import ytMusic from '../menu-icons/yt-premium.png'
import ytKids from '../menu-icons/yt-kids.png'
import configIcon from '../menu-icons/config.png'
import bandeira from '../menu-icons/bandeiras.png'
import ajuda from '../menu-icons/ajuda.png'
import feedback from '../menu-icons/feedback.png'



export const menuIcons = 
[{nome: 'Inicio', icon:houseIcon, link: '/'},
{nome: 'Shorts', icon:shortsIcon, link:'/shorts'},
{nome: 'Inscrições', icon:inscricao, link:'/inscricoes'},

]

export const voceMenu = 
[
{nome: 'Seu canal', icon:seuCanal, link:'/'},
{nome: 'Histórico', icon:iconHistoric, link:'/'},
{nome: 'Seus vídeos', icon:seusvideos, link:'/seus-videos'},
{nome: 'Assistir mais tarde', icon:assistirDepois, link:'/'},
{nome: 'Vídeos com "Gostei"', icon:gostei, link:'/'},
]

export const inscricoesMenu = [
    {nome: 'Canal 1', icon:canal},
    {nome: 'Canal 2', icon:canal},
    {nome: 'Canal 3', icon:canal},
    {nome: 'Canal 4', icon:canal},
    {nome: 'Todas as inscrições', icon:listaIcon}
]

export const explorarMenu = [
    {nome: 'Em alta', icon:emAlta},
    {nome: 'Shopping', icon:shopping},
    {nome: 'Música', icon:musica},
    {nome: 'Filmes', icon:filmes},
    {nome: 'Ao vivo', icon:aovivo},
    {nome: 'Jogos', icon:jogos},
    {nome: 'Notícias', icon:noticias},
    {nome: 'Esportes', icon:esportes},
    {nome: 'Cursos', icon:cursos},
    {nome: 'Podcasts', icon:podcast},
]

export const maisMenu = [
    {nome: 'YouTube Premium', icon:ytPremium},
    {nome: 'YouTube Studio', icon:ytStudio},
    {nome: 'YouTube Music', icon:ytMusic},
    {nome: 'YouTube Kids', icon:ytKids},

]

export const lastMenu = [
    {nome: 'Configurações', icon:configIcon},
    {nome: 'Histórico de denúncias', icon:bandeira},
    {nome: 'Ajuda', icon:ajuda},
    {nome: 'Enviar feedback', icon: feedback},

]

