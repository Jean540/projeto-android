import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      
      <header>
        <h1>Curiosidades de Tecnologia</h1>
        
        <p>Tudo aquilo que você sempre quis saber sobre o mundo Tech, em um único lugar</p>
        
        <nav>
          <a href="#">Home</a>
          <a href="#">Noticias</a>
          <a href="#">Curiosiades</a>
          <a href="#">Fale conosto</a>
        </nav>
      </header>
      
      <main>  
        <article>
          <h2>História do Mascote do Android</h2>
          
          <p>Provavelmente você sabe que o sistema operacional <strong>Android</strong>, mantido pelo Google é um dos mais utilizados para dispositivos móveis em todo o mundo. Mas tavez você não saiba que o seu simpático mascote tem um nome e uma história muito curiosa? Pois acompanhe esse artigo para aprender muita coisa sobre esse robozinho.</p>
          
          <h3>A primeira versão</h3>
          
          <p>A primeira tentativa de criar um mascote surgiu em 2007 e veio de um desenvolvedor chamado <a className='Referencias' href="">Dan Morrill</a>. Ele conta que abriu o <a className='Referencias' href="">Inkscape</a> (software livre para vetorização de imagens) e criou sua própria versão de robô. O objetivo era apenas personificar o sistema apenas para a a sua equipe, não existia nenhuma solicitação da empresa para a criação de um mascote.</p>
          
          <img src="imagens/dan-droids.png" alt="Primeiro mascote do Android"></img>

          <p>Essa primeira versão bizarra até foi batizada em homenagem ao seu criador: seriam os Dandroids.</p>
          
          <h3>Surge um novo mascote</h3>
          
          <p>A ideia de ter um mascote foi amadurecendo e a missão foi passada para uma profissional da área. A ilustradora Russa <a className='Referencias' href="">Irina Blok</a>, também funcionária do Google, ficou com a missão de representar o pequeno robô de uma maneira mais agradável.</p>
          
          <img src="imagens/irina-blok.jpg" alt="Irina Blok, criadora do Bugdroid"></img>
        
          <p>A ideia principal da Irina era representar tudo graficamente com poucos traços e de forma mais chapada. O desenho também deveria gerar identificação rápida com quem o olha. Surgiu então o Bugdroid, o novo mascote do Android.</p>

          <img class="pequena" src="imagens/bugdroid.png" alt="Bugdroid"></img>

          <p>A principal inspiração para os traços do novo <strong>Bugdroid</strong> veio daqueles bonequinhos que ilustram portas de banheiro para indicar o gênero de cada porta. Conta a lenda que a artista estava criando em sua mesa no escritório do <strong>Google</strong> e olhou para o lado dos banheiros e a identificação foi imediata: simples, limpo, objetivo.</p>
      
          <div className='Video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/l2UDgpLz20M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <aside>
            <h4>Quer aprender mais?</h4>
            
            <p>Outro assunto curioso em relação ao Android é que cada versão sempre foi nomeada em homenagem a um doce, em ordem alfabética a partir da versão 1.5 até a 9.0.</p>
            
            <ul>
              <li>1.5 - <abbr title="Cupcake">Cupcake</abbr></li>
              <li>1.6 - <abbr title="Donut">Donut</abbr></li>
              <li>3.0 - <abbr title="Eclair">Eclair</abbr></li>
              <li>2.2 - <abbr title="Froyo">Froyo</abbr></li>
              <li>2.3 - <abbr title="Gingerbread">Gingerbread</abbr></li>
              <li>3.0 - <abbr title="Honeycomb">Honeycomb</abbr></li>
              <li>4.0 - <abbr title="Ice Cream Sandwich">Ice Cream Sandwich</abbr></li>
              <li>4.1 - <abbr title="Jelly Bean">Jelly Bean</abbr></li>
              <li>4.4 - <abbr title="KitKat">KitKat</abbr></li>
              <li>5.0 - <abbr title="Lolipop">Lolipop</abbr></li>
              <li>6.0 - <abbr title="Marshmallow">Marshmallow</abbr></li>
              <li>7.0 - <abbr title="Nougat">Nougat</abbr></li>
              <li>8.0 - <abbr title="Oreo">Oreo</abbr></li>
              <li>9.0 - <abbr title="Pie">Pie</abbr></li>
            </ul>
           
            <p>Infelizmente, o <strong>Android Q</strong> não existiu, pois o Google resolveu pôr fim a essa divertida prática e começou a usar numerações, o que deu origem ao Android 10.</p>
            
            <p>Acesse aqui o site <a className='Referencias' href="">Android History</a> para conhecer a sequência das versões "adocicadas" e o que cada uma trouxe para o sistema Android.</p>
          </aside>
          
          <p>Então é isso! Espero que você tenha gostado do nosso artigo com essa curiosidade sobre o sistema <strong>Android</strong> e seu simpático mascote.</p>
       </article>
      </main>

      <footer>Site criado por <a href="">Jean Martins Araujo</a> para o <a href="">CursoemVideo</a>.</footer>
    </body>
  )
}

export default App
