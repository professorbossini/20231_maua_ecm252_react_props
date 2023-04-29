import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'

const App = () => {
  const textoOK = 'Já chegou!'
  const textoNOK = 'Não chegou ainda!'
  const funcaoOK = () => alert('Agradecemos a confirmação')
  const funcaoNOK = () => alert('Verificaremos o ocorrido')
  const componenteFeedback = <Feedback textoOK={textoOK} textoNOK={textoNOK} funcaoOK={funcaoOK} funcaoNOK={funcaoNOK} />
  return (
    <div className='container border rounded mt-2'>
    {/* .row.border-bottom.my-2 */}
    <div className="row border-bottom my-2">
      <div className="col-12">
        {/* h1.display-5.text-center{Seus pedidos} */}
        <h1 className="display-5 text-center">Seus pedidos</h1>
      </div>
    </div>
    <div className="row">
      {/* .col-12.col-md-6.col-lg-4.my-2 */}
        <div className="col-12 col-lg-6 col-xxl-4 my-2">
          <Cartao cabecalho="22/04/2021">
            <Pedido 
              icone="fa-solid fa-hard-drive fa-2x"
              titulo="SSD"
              descricao="SSD Kingston A400 - SATA"
            />
            {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4 my-2">
          <Cartao cabecalho='23/04/2022'>
            <Pedido 
              icone="fa-solid fa-book fa-2x"
              titulo="Livro"
              descricao="Concrete Mathematics - Donald Knuth"
            />
            {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4 my-2">
          <Cartao cabecalho='22/03/2023'>
          <Pedido 
            icone="fa-solid fa-laptop fa-2x"
            titulo="Notebook"
            descricao="Notebook Dell 8Gb - i5"
          />
          {componenteFeedback}
          </Cartao>
        </div>

      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)