import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Inscricoes from "./pages/inscricoes";
import ShortsPage from "./pages/shorts";
import { UserStorage } from "./context/loginContext";
import Login from "./components/login";
import { UserDropMenu } from "./context/dropMenuContext";
import Cadastro from "./pages/CreateUser";
import { UserCreateStorage } from "./context/createUserContext";
import VideosUser from "./pages/videosUser";
import Search from "./pages/search";
import { CategoryProvider } from "./context/categoriesSearch";





function App() {
  
  return (
    <CategoryProvider>
    <UserCreateStorage >
    <UserStorage>
      <UserDropMenu>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shorts" element={<ShortsPage/>} />
            <Route path="/inscricoes" element={<Inscricoes/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/seus-videos/" element={<VideosUser />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
      </UserDropMenu>
    </UserStorage>  
    </UserCreateStorage>
    </CategoryProvider>
  );
}

export default App;
