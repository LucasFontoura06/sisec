import React, { useState } from 'react';
import logradouroData from '../util/logradouroData';
import '../componentesCss/logradouro.css'; // Certifique-se de importar o arquivo CSS

const Logradouro = () => {
  const [selectedCode, setSelectedCode] = useState('');
  const [description, setDescription] = useState('');

  const handleSelectChange = (event) => {
    const selectedCode = event.target.value;
    setSelectedCode(selectedCode);

    const selectedLogradouro = logradouroData.find(item => item.codigo === selectedCode);
    setDescription(selectedLogradouro ? selectedLogradouro.descricao : '');
  };

  return (
    <div className="logradouro-container">
      <h1>Escolha um Logradouro</h1>
      <div className="logradouro-select-container">
        <select id="logradouro-select" value={selectedCode} onChange={handleSelectChange}>
          <option value="">Selecione</option>
          {logradouroData.map((item, index) => (
            <option key={index} value={item.codigo}>
              {item.descricao} {/* Exibir a descrição em vez do código */}
            </option>
          ))}
        </select>
      </div>
      {description && (
        <div className="descricao-container">
          <h2>Descrição</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Logradouro;
