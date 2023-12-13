import "./about.css"
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
export function About() {
  return (
    <div className="container-about">
      <Navbar />
      <div className="content-about">
        <div className="div-paragraph">
        <h2>Olá Viajante!</h2>
          <p>Seja bem-vindo ao Blog dos Viajantes! Este blog é para os
          apaixonados por viajar. Sempre sonhamos em conhecer o mundo e aprender
          sobre diferentes culturas. Para nós, viajar é mais do que apenas
          visitar lugares novos. É uma oportunidade de expandir nossa mente,
          crescer como pessoas e nos conectar com outros seres humanos.
          Acreditamos que viajar é essencial para uma vida plena e feliz. É uma
          forma de nos tornarmos mais tolerantes, abertos e curiosos. É uma
          forma de nos conectarmos com a nossa própria essência e com o mundo ao
          nosso redor. Nesse blog, compartilhamos nossas experiências de viagem
          com você. Aqui, você encontrará dicas de viagem, relatos de viagens,
          informações sobre destinos turísticos e muito mais. Nosso objetivo é
          inspirar você a viajar mais e explorar o mundo. Queremos que você se
          sinta motivado a conhecer novos lugares e viver novas aventuras.
          Acreditamos que o mundo é um lugar maravilhoso e que todos deveriam
          ter a oportunidade de conhecê-lo. Esperamos que o nosso blog ajude
          você a realizar esse sonho. "A viagem mais longa que alguém pode fazer
          é a viagem de dentro para fora." - George Bernard Shaw Essa frase, de
          George Bernard Shaw, é uma das nossas favoritas. Ela resume
          perfeitamente o que nós acreditamos sobre a importância da viagem.
          Viajar não é apenas sobre visitar lugares novos. É sobre explorar
          nosso próprio mundo interior. É sobre nos conhecermos melhor e
          encontrar nosso lugar no mundo. Espero que você encontre inspiração no
          nosso blog para viajar mais e se conhecer melhor.</p>
         
        </div>
      </div>
      <footer className="footer-div">
        <Footer></Footer>
      </footer>
    </div>
  );
}
