import React, { useState, useEffect } from 'react'
import '../componentesCss/totalUsuarios.css'

const TotalUsuarios = () => {
  // useState para manter o estado do total de usuários
  // Recupera o valor salvo do localStorage ao carregar o componente
  const [totalUsuarios, setTotalUsuarios] = useState(() => {
    const savedTotal = localStorage.getItem('totalUsuarios')
    return savedTotal ? parseInt(savedTotal, 10) : 0
  })

  // Função para lidar com a mudança no input
  const handleChange = (event) => {
    const value = event.target.value
    // Verifica se o valor é um número válido e maior ou igual a 0
    if (!isNaN(value) && value >= 0) {
      setTotalUsuarios(parseInt(value, 10))
    }
  }

  // Função para salvar o total de usuários no localStorage e console
  const handleSave = () => {
    localStorage.setItem('totalUsuarios', totalUsuarios) // Salva no localStorage
    console.log('Total de usuários:', totalUsuarios) // Salva no console
    alert('Total de usuários salvo com sucesso!') // Exibe um alerta
  }

  return (
    
    <div className="dropdown-container">
        <h1>Total de Usuários Enviados</h1>
      <div className="custom-dropdown-container">
        <input
          id="totalUsuariosInput"
          type="number"
          value={totalUsuarios}
          onChange={handleChange} // Chama handleChange ao mudar o input
          min="0"
          className="input-field"
        />
        <button onClick={handleSave} className="save-button">Salvar</button> {/* Chama handleSave ao clicar no botão */}
      </div>
    </div>
  )
}

export default TotalUsuarios
