import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import api from'./api';

function App() {
  
    const [nome, setNome] = useState()
    const [cpf, setCpf] = useState()
    const [dataNasc, setDataNasc] = useState()
    const [salarioBruto, setSalarioBruto] = useState()
    const [qntDependente, setQntDependente] = useState()
    const [empregado, setEmpregado] = useState()
    const [tempoEmprego, setTempoEmprego] = useState()
    const [serasa, setSerasa] = useState()
    const [limite, getLimite] = useState()
    const [Resultado, getResultado] = useState();
    const [Menssagem, getMensagem] = useState();


    async function handleSubmit(event){
      event.preventDefault();

      const data = {
        nome,
        cpf,
        dataNasc,
        salarioBruto,
        qntDependente,
        empregado,
        tempoEmprego,
        serasa
      }
      try{
        const response = await api.post('analise', data);
        const Menssagem = response.data.message
        const Resultado = response.data.valorLimite;
        getLimite(Resultado);
        getMensagem(Menssagem)
        
      
      }
      catch(err){
        alert('Erro veja oque errou');
      }
    
    }


    return(
      <div className="container">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
            placeholder="Nome" id="nome" onChange={event => setNome(event.target.value)} value={nome}></input>
            
            <label>Cpf:</label>
            <input
            placeholder="Cpf" id="cpf" onChange={event => setCpf(event.target.value)} value={cpf}></input>

            <label>dataNasc:</label>
            <input
            placeholder="Data de Nascimento" id="dataNasc" onChange={event => setDataNasc(event.target.value)} value={dataNasc}></input>
            
            <label>salarioBruto:</label>
            <input
            placeholder="Salario Bruto" id="salarioBruto" onChange={event => setSalarioBruto(event.target.value)} value={salarioBruto}></input>

            <label>qntDependente:</label>
            <input
            placeholder="Quantidade de Dependentes" id="qntDependentes" onChange={event => setQntDependente(event.target.value)} value={qntDependente}></input>

            <label>empregado:</label>
            <input
            placeholder="Empregado S ou N" id="empregado" onChange={event => setEmpregado(event.target.value)} value={empregado}></input>

            <label>tempoEmprego:</label>
            <input
            placeholder="Tempo de Emprego em Meses" id="tempoEmprego" onChange={event => setTempoEmprego(event.target.value)} value={tempoEmprego}></input>

            <label>serasa:</label>
            <input
            placeholder="Alguma Restrição no Serasa S ou N" id="serasa" onChange={event => setSerasa(event.target.value)} value={serasa}></input>

            <button className="btn" type="submit">Analisar</button>
            
          </form>
          <div className="result">
            <p>{Menssagem}</p>
            {
              limite<0 &&
              <p>{limite}</p>
            }
          </div>
        </div>
      </div>
    );
  
}

export default App;
