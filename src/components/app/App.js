import './app.scss';
import Header from "../header/Header";

import Footer from "../footer/Footer";
import Main from "../main/Main";


function App(props) {


  return (
    <div className='container'>
      <Header title = 'Recipe search'/>
        <Main />
        <Footer />
    </div>
  );
}

export default App;
