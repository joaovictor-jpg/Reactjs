import './App.css';
import Header from './componentes/header/header';
import Sidebar from './componentes/sidebar/sidebar';
import Footer from './componentes/footer/footer';
import Main from './componentes/main/main';

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
