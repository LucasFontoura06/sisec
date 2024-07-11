// Importando React e useState para o componente funcional e estado
import React, { useState } from 'react'
// Importando o arquivo de estilo CSS
import '../componentesCss/cidadeMunicipio.css'
// Importando todas as bandeiras do arquivo flags
import * as flags from '../assets/bandeiras/flags'

// Definindo o componente UfDropdown
const CidadeMunicipio = () => {
  // Definindo estados para UF selecionada, dropdown de UF aberto/fechado, cidade selecionada e dropdown de cidade aberto/fechado
  const [selectedUf, setSelectedUf] = useState('')
  const [ufDropdownOpen, setUfDropdownOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState('')
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false)

  // Lista de UFs com sigla, nome e bandeira correspondente
  const ufs = [
    { sigla: 'AC', nome: 'Acre', bandeira: flags.acFlag },
    { sigla: 'AL', nome: 'Alagoas', bandeira: flags.alFlag },
    { sigla: 'AP', nome: 'Amapá', bandeira: flags.apFlag },
    { sigla: 'AM', nome: 'Amazonas', bandeira: flags.amFlag },
    { sigla: 'BA', nome: 'Bahia', bandeira: flags.baFlag },
    { sigla: 'CE', nome: 'Ceará', bandeira: flags.ceFlag },
    { sigla: 'DF', nome: 'Distrito Federal', bandeira: flags.dfFlag },
    { sigla: 'ES', nome: 'Espírito Santo', bandeira: flags.esFlag },
    { sigla: 'GO', nome: 'Goiás', bandeira: flags.goFlag },
    { sigla: 'MA', nome: 'Maranhão', bandeira: flags.maFlag },
    { sigla: 'MT', nome: 'Mato Grosso', bandeira: flags.mtFlag },
    { sigla: 'MS', nome: 'Mato Grosso do Sul', bandeira: flags.msFlag },
    { sigla: 'MG', nome: 'Minas Gerais', bandeira: flags.mgFlag },
    { sigla: 'PA', nome: 'Pará', bandeira: flags.paFlag },
    { sigla: 'PB', nome: 'Paraíba', bandeira: flags.pbFlag },
    { sigla: 'PR', nome: 'Paraná', bandeira: flags.prFlag },
    { sigla: 'PE', nome: 'Pernambuco', bandeira: flags.peFlag },
    { sigla: 'PI', nome: 'Piauí', bandeira: flags.piFlag },
    { sigla: 'RJ', nome: 'Rio de Janeiro', bandeira: flags.rjFlag },
    { sigla: 'RN', nome: 'Rio Grande do Norte', bandeira: flags.rnFlag },
    { sigla: 'RS', nome: 'Rio Grande do Sul', bandeira: flags.rsFlag },
    { sigla: 'RO', nome: 'Rondônia', bandeira: flags.roFlag },
    { sigla: 'RR', nome: 'Roraima', bandeira: flags.rrFlag },
    { sigla: 'SC', nome: 'Santa Catarina', bandeira: flags.scFlag },
    { sigla: 'SP', nome: 'São Paulo', bandeira: flags.spFlag },
    { sigla: 'SE', nome: 'Sergipe', bandeira: flags.seFlag },
    { sigla: 'TO', nome: 'Tocantins', bandeira: flags.toFlag }
  ]

  // Lista de cidades para cada UF
  const cities = {
    AC: ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira'],
    AL: ['Maceió', 'Arapiraca', 'Palmeira dos Índios'],
    AP: ['Macapá', 'Santana', 'Laranjal do Jari'],
    AM: ['Manaus', 'Parintins', 'Itacoatiara'],
    BA: ['Salvador', 'Feira de Santana', 'Vitória da Conquista'],
    CE: ['Fortaleza', 'Caucaia', 'Juazeiro do Norte'],
    DF: ['Brasília'],
    ES: ['Vitória', 'Vila Velha', 'Serra'],
    GO: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis'],
    MA: ['São Luís', 'Imperatriz', 'Caxias'],
    MT: ['Cuiabá', 'Várzea Grande', 'Rondonópolis'],
    MS: ['Campo Grande', 'Dourados', 'Três Lagoas'],
    MG: ['Belo Horizonte', 'Uberlândia', 'Contagem'],
    PA: ['Belém', 'Ananindeua', 'Santarém'],
    PB: ['João Pessoa', 'Campina Grande', 'Santa Rita'],
    PR: ['Curitiba', 'Londrina', 'Maringá'],
    PE: ['Recife', 'Jaboatão dos Guararapes', 'Olinda'],
    PI: ['Teresina', 'Parnaíba', 'Picos'],
    RJ: ['Rio de Janeiro', 'Niterói', 'Duque de Caxias'],
    RN: ['Natal', 'Mossoró', 'Parnamirim'],
    RS: ['Porto Alegre', 'Caxias do Sul', 'Pelotas'],
    RO: ['Porto Velho', 'Ji-Paraná', 'Ariquemes'],
    RR: ['Boa Vista', 'Rorainópolis', 'Caracaraí'],
    SC: ['Florianópolis', 'Joinville', 'Blumenau'],
    SP: ['São Paulo', 'Campinas', 'Santos'],
    SE: ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto'],
    TO: ['Palmas', 'Araguaína', 'Gurupi']
  }

  // Função para lidar com a mudança de UF selecionada
  const handleUfChange = (ufSigla) => {
    setSelectedUf(ufSigla) // Atualiza a UF selecionada
    setSelectedCity('') // Reseta a cidade selecionada
    setUfDropdownOpen(false) // Fecha o dropdown de UFs
    setCityDropdownOpen(false) // Fecha o dropdown de cidades
  }

  // Função para lidar com a mudança de cidade selecionada
  const handleCityChange = (city) => {
    setSelectedCity(city) // Atualiza a cidade selecionada
    setCityDropdownOpen(false) // Fecha o dropdown de cidades
  }

  // Função para alternar a visibilidade do dropdown de UFs
  const toggleUfDropdown = () => {
    setUfDropdownOpen(!ufDropdownOpen)
  }

  // Função para alternar a visibilidade do dropdown de cidades
  const toggleCityDropdown = () => {
    setCityDropdownOpen(!cityDropdownOpen)
  }

  return (
    <div className="dropdown-container">
        <h1>Escolha o Estado e a Cidade</h1>
      {/* Dropdown para selecionar UF */}
      <div className="custom-dropdown-container">
        <div className={`selected-uf ${ufDropdownOpen ? 'open' : ''}`} onClick={toggleUfDropdown}>
          {selectedUf ? (
            <>
              <img src={ufs.find(uf => uf.sigla === selectedUf)?.bandeira} alt={`Bandeira ${selectedUf}`} className="selected-flag" />
              <span className="selected-uf-name">{selectedUf}</span>
            </>
          ) : (
            <span>Selecione uma UF</span>
          )}
        </div>
        {ufDropdownOpen && (
          <div className="dropdown-options">
            {ufs.map((uf) => (
              <div key={uf.sigla} className="dropdown-option" onClick={() => handleUfChange(uf.sigla)}>
                <img src={uf.bandeira} alt={`Bandeira ${uf.nome}`} className="option-flag" />
                <span>{uf.sigla}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dropdown para selecionar Cidade */}
      <div className="custom-dropdown-container">
        <div className={`selected-city ${cityDropdownOpen ? 'open' : ''}`} onClick={toggleCityDropdown}>
          {selectedCity ? (
            <span className="selected-city-name">{selectedCity}</span>
          ) : (
            <span>Selecione uma Cidade</span>
          )}
        </div>
        {cityDropdownOpen && (
          <div className="dropdown-options">
            {(selectedUf ? cities[selectedUf] : []).map((city) => (
              <div key={city} className="dropdown-option" onClick={() => handleCityChange(city)}>
                <span>{city}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CidadeMunicipio
