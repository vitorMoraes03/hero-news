import { Routes, Route } from "react-router-dom";
import { HeroForm } from "./components/HeroForm";
import { HeroView } from "./components/HeroView";
import { HeroEdit } from "./components/HeroEdit";
import { NavBar } from "./components/NavBar";
import { HeroPage } from "./pages/HeroPage";

function App() {



  return (
    <div className="">
      <NavBar />

      <Routes >
        <Route path="/home" element={<HeroPage />} />{/*home - exibição dos anuncios*/}
        <Route path="/criar-anuncio" element={<HeroForm />} />{/*criação do formulário*/}
        <Route path="/ver-anuncio" element={<HeroView />} />{/*visualização do formulário*/}
        <Route path="/editar-anuncio" element={<HeroEdit />} />{/*edição do formulário*/}
        <Route path="*" />
      </Routes>
      {/* <SideBarShop /> Se a gnt conseguir chegar*/}
    </div>
  );
}

export default App;
