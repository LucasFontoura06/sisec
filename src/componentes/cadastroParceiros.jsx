// src/components/CadastroParceiro.js
import '../componentesCss/cadastroParceiros.css';  // Certifique-se de que o caminho está correto
import React, { useState } from 'react';

const CadastroParceiro = () => {
  const [nome, setNome] = useState('');
  const [segmento, setSegmento] = useState('');
  const [tipo, setTipo] = useState('');
  const [areaAtuacao, setAreaAtuacao] = useState('');
  const [dataCadastro, setDataCadastro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const parceiro = { nome, segmento, tipo, areaAtuacao, dataCadastro };
    console.log(parceiro);
    // Aqui você pode adicionar a lógica para enviar os dados para um backend, se necessário.
  };

  return (
    <form onSubmit={handleSubmit} className="cadastro-form">
      <h1 className="form-title">Cadastro de Parceiro</h1>
      <div className="form-group">
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Segmento:</label>
        <input type="text" value={segmento} onChange={(e) => setSegmento(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Tipo:</label>
        <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Área de Atuação:</label>
        <input type="text" value={areaAtuacao} onChange={(e) => setAreaAtuacao(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Data do Cadastro:</label>
        <input type="date" value={dataCadastro} onChange={(e) => setDataCadastro(e.target.value)} required />
      </div>
      <button type="submit" className="submit-button">Cadastrar Parceiro</button>
    </form>
  );
};

export default CadastroParceiro;
