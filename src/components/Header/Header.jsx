import './header.css';
import Container from '../../components/Container/Container.jsx';
import SonomaLogo from '../../assets/sonomalogo.svg';
import LocationIcon from '../../assets/location.svg';
import Searchicon from '../../assets/search.svg';

const Header = () => {

    return (
    
        <header>
            <div className='promotionContainer'>
                <Container>
                    <div className='promotion'>
                        <p>Entrega em <span>60 minutos</span> para SP - Capital</p>
                        <p>Ofertas de <span>até 35%</span> de desconto</p>
                        <p>Sua <span>compra seguro</span> com a gente!</p>
                    </div>
                </Container>
            </div>

                <div className='menuContent'>
                    <Container >
                        <div className="flexdirection">
                            <img src={SonomaLogo} alt="Logo da empresa no header" />
                            <div className='location'>
                                <img src={LocationIcon} height='24px' alt="Loco do botão de localização" />
                                <p>Selecione sua <span>Localização</span></p>
                            </div>
                            <div className='searchBar'>
                                <input type="search" placeholder='Pesquisar' name="Search" id="serach" />
                                <button><img src={Searchicon} alt="ícone de pesquisar" /></button>
                            </div>
                        </div>
                    </Container>
                </div>
            
        </header> 
   
    );

};

export default Header;