const logradouroData = [
    {"codigo": "A", "descricao": "Área"},
    {"codigo": "AC", "descricao": "Acesso"},
    {"codigo": "ACA", "descricao": "Acampamento"},
    {"codigo": "ACL", "descricao": "Acesso Local"},
    {"codigo": "AD", "descricao": "Adro"},
    {"codigo": "AE", "descricao": "Área Especial"},
    {"codigo": "AER", "descricao": "Aeroporto"},
    {"codigo": "AL", "descricao": "Alameda"},
    {"codigo": "AMD", "descricao": "Avenida Marginal Direita"},
    {"codigo": "AME", "descricao": "Avenida Marginal Esquerda"},
    {"codigo": "AN", "descricao": "Anel Viário"},
    {"codigo": "ANT", "descricao": "Antiga Estrada"},
    {"codigo": "ART", "descricao": "Artéria"},
    {"codigo": "AT", "descricao": "Alto"},
    {"codigo": "ATL", "descricao": "Atalho"},
    {"codigo": "A V", "descricao": "Área Verde"},
    {"codigo": "AV", "descricao": "Avenida"},
    {"codigo": "AVC", "descricao": "Avenida Contorno"},
    {"codigo": "AVM", "descricao": "Avenida Marginal"},
    {"codigo": "AVV", "descricao": "Avenida Velha"},
    {"codigo": "BAL", "descricao": "Balneário"},
    {"codigo": "BC", "descricao": "Beco"},
    {"codigo": "BCO", "descricao": "Buraco"},
    {"codigo": "BEL", "descricao": "Belvedere"},
    {"codigo": "BL", "descricao": "Bloco"},
    {"codigo": "BLO", "descricao": "Balão"},
    {"codigo": "BLS", "descricao": "Blocos"},
    {"codigo": "BLV", "descricao": "Bulevar"},
    {"codigo": "BSQ", "descricao": "Bosque"},
    {"codigo": "BVD", "descricao": "Boulevard"},
    {"codigo": "BX", "descricao": "Baixa"},
    {"codigo": "C", "descricao": "Cais"},
    {"codigo": "CAL", "descricao": "Calçada"},
    {"codigo": "CAM", "descricao": "Caminho"},
    {"codigo": "CAN", "descricao": "Canal"},
    {"codigo": "CH", "descricao": "Chácara"},
    {"codigo": "CHA", "descricao": "Chapadão"},
    {"codigo": "CIC", "descricao": "Ciclovia"},
    {"codigo": "CIR", "descricao": "Circular"},
    {"codigo": "CJ", "descricao": "Conjunto"},
    {"codigo": "CJM", "descricao": "Conjunto Mutirão"},
    {"codigo": "CMP", "descricao": "Complexo Viário"},
    {"codigo": "COL", "descricao": "Colônia"},
    {"codigo": "COM", "descricao": "Comunidade"},
    {"codigo": "CON", "descricao": "Condomínio"},
    {"codigo": "COR", "descricao": "Corredor"},
    {"codigo": "CPO", "descricao": "Campo"},
    {"codigo": "CRG", "descricao": "Córrego"},
    {"codigo": "CTN", "descricao": "Contorno"},
    {"codigo": "DSC", "descricao": "Descida"},
    {"codigo": "DSV", "descricao": "Desvio"},
    {"codigo": "DT", "descricao": "Distrito"},
    {"codigo": "EB", "descricao": "Entre Bloco"},
    {"codigo": "EIM", "descricao": "Estrada Intermunicipal"},
    {"codigo": "ENS", "descricao": "Enseada"},
    {"codigo": "ENT", "descricao": "Entrada Particular"},
    {"codigo": "EQ", "descricao": "Entre Quadra"},
    {"codigo": "ESC", "descricao": "Escada"},
    {"codigo": "ESD", "descricao": "Escadaria"},
    {"codigo": "ESE", "descricao": "Estrada Estadual"},
    {"codigo": "ESI", "descricao": "Estrada Vicinal"},
    {"codigo": "ESL", "descricao": "Estrada de Ligação"},
    {"codigo": "ESM", "descricao": "Estrada Municipal"},
    {"codigo": "ESP", "descricao": "Esplanada"},
    {"codigo": "ESS", "descricao": "Estrada de Servidão"},
    {"codigo": "EST", "descricao": "Estrada"},
    {"codigo": "ESV", "descricao": "Estrada Velha"},
    {"codigo": "ETA", "descricao": "Estrada Antiga"},
    {"codigo": "ETC", "descricao": "Estação"},
    {"codigo": "ETD", "descricao": "Estádio"},
    {"codigo": "ETN", "descricao": "Estância"},
    {"codigo": "ETP", "descricao": "Estrada Particular"},
    {"codigo": "ETT", "descricao": "Estacionamento"},
    {"codigo": "EVA", "descricao": "Evangélica"},
    {"codigo": "EVD", "descricao": "Elevada"},
    {"codigo": "EX", "descricao": "Eixo Industrial"},
    {"codigo": "FAV", "descricao": "Favela"},
    {"codigo": "FAZ", "descricao": "Fazenda"},
    {"codigo": "FER", "descricao": "Ferrovia"},
    {"codigo": "FNT", "descricao": "Fonte"},
    {"codigo": "FRA", "descricao": "Feira"},
    {"codigo": "FTE", "descricao": "Forte"},
    {"codigo": "GAL", "descricao": "Galeria"},
    {"codigo": "GJA", "descricao": "Granja"},
    {"codigo": "HAB", "descricao": "Núcleo Habitacional"},
    {"codigo": "IA", "descricao": "Ilha"},
    {"codigo": "IND", "descricao": "Indeterminado"},
    {"codigo": "IOA", "descricao": "Ilhota"},
    {"codigo": "JD", "descricao": "Jardim"},
    {"codigo": "JDE", "descricao": "Jardinete"},
    {"codigo": "LD", "descricao": "Ladeira"},
    {"codigo": "LGA", "descricao": "Lagoa"},
    {"codigo": "LGO", "descricao": "Lago"},
    {"codigo": "LOT", "descricao": "Loteamento"},
    {"codigo": "LRG", "descricao": "Largo"},
    {"codigo": "LT", "descricao": "Lote"},
    {"codigo": "MER", "descricao": "Mercado"},
    {"codigo": "MNA", "descricao": "Marina"},
    {"codigo": "MOD", "descricao": "Modulo"},
    {"codigo": "MRG", "descricao": "Projeção"},
    {"codigo": "MRO", "descricao": "Morro"},
    {"codigo": "MTE", "descricao": "Monte"},
    {"codigo": "NUC", "descricao": "Núcleo"},
    {"codigo": "NUR", "descricao": "Núcleo Rural"},
    {"codigo": "OUT", "descricao": "Outeiro"},
    {"codigo": "PAR", "descricao": "Paralela"},
    {"codigo": "PAS", "descricao": "Passeio"},
    {"codigo": "PAT", "descricao": "Pátio"},
    {"codigo": "PC", "descricao": "Praça"},
    {"codigo": "PCE", "descricao": "Praça de Esportes"},
    {"codigo": "PDA", "descricao": "Parada"},
    {"codigo": "PDO", "descricao": "Paradouro"},
    {"codigo": "PNT", "descricao": "Ponta"},
    {"codigo": "PR", "descricao": "Praia"},
    {"codigo": "PRL", "descricao": "Prolongamento"},
    {"codigo": "PRM", "descricao": "Parque Municipal"},
    {"codigo": "PRQ", "descricao": "Parque"},
    {"codigo": "PRR", "descricao": "Parque Residencial"},
    {"codigo": "PSA", "descricao": "Passarela"},
    {"codigo": "PSG", "descricao": "Passagem"},
    {"codigo": "PSP", "descricao": "Passagem de Pedestre"},
    {"codigo": "PSS", "descricao": "Passagem Subterrânea"},
    {"codigo": "PTE", "descricao": "Ponte"},
    {"codigo": "PTO", "descricao": "Porto"},
    {"codigo": "Q", "descricao": "Quadra"},
    {"codigo": "QTA", "descricao": "Quinta"},
    {"codigo": "QTS", "descricao": "Quintas"},
    {"codigo": "R", "descricao": "Rua"},
    {"codigo": "R I", "descricao": "Rua Integração"},
    {"codigo": "R L", "descricao": "Rua de Ligação"},
    {"codigo": "R P", "descricao": "Rua Particular"},
    {"codigo": "R V", "descricao": "Rua Velha"},
    {"codigo": "R. T", "descricao": "Rua de Pedestre"},
    {"codigo": "RAI", "descricao": "Ramal Interno"},
    {"codigo": "RAM", "descricao": "Ramal"},
    {"codigo": "REC", "descricao": "Recanto"},
    {"codigo": "REG", "descricao": "Região"},
    {"codigo": "RES", "descricao": "Residencial"},
    {"codigo": "RET", "descricao": "Retorno"},
    {"codigo": "RHA", "descricao": "Rodo Anel"},
    {"codigo": "RIV", "descricao": "Riviera"},
    {"codigo": "RLA", "descricao": "Ruela"},
    {"codigo": "ROD", "descricao": "Rodovia"},
    {"codigo": "ROT", "descricao": "Rotatória"},
    {"codigo": "RTN", "descricao": "Retiro"},
    {"codigo": "RUA", "descricao": "Rua"},
    {"codigo": "SC", "descricao": "Sítio"},
    {"codigo": "SDA", "descricao": "Servidão"},
    {"codigo": "SET", "descricao": "Setor"},
    {"codigo": "SIT", "descricao": "Sítio"},
    {"codigo": "SLD", "descricao": "Salão"},
    {"codigo": "SNT", "descricao": "Santuário"},
    {"codigo": "SQD", "descricao": "Sociedade"},
    {"codigo": "SQU", "descricao": "Subquadra"},
    {"codigo": "ST", "descricao": "Setor"},
    {"codigo": "STL", "descricao": "Setor Leste"},
    {"codigo": "STM", "descricao": "Setor Militar Urbano"},
    {"codigo": "STN", "descricao": "Setor Norte"},
    {"codigo": "STO", "descricao": "Setor Oeste"},
    {"codigo": "STO", "descricao": "Setor Oeste"},
    {"codigo": "STR", "descricao": "Setor Residencial"},
    {"codigo": "STS", "descricao": "Setor Sul"},
    {"codigo": "SVD", "descricao": "Servidão"},
    {"codigo": "TER", "descricao": "Terminal"},
    {"codigo": "TV", "descricao": "Travessa"},
    {"codigo": "TVA", "descricao": "Travessa Particular"},
    {"codigo": "TVE", "descricao": "Travessa"},
    {"codigo": "TVL", "descricao": "Travessa de Ligação"},
    {"codigo": "TVN", "descricao": "Travessa Nova"},
    {"codigo": "UN", "descricao": "Unidade"},
    {"codigo": "VAL", "descricao": "Vale"},
    {"codigo": "VAP", "descricao": "Vala"},
    {"codigo": "VAR", "descricao": "Variante"},
    {"codigo": "VER", "descricao": "Vereda"},
    {"codigo": "VIA", "descricao": "Via"},
    {"codigo": "VIC", "descricao": "Vila"},
    {"codigo": "VIL", "descricao": "Vila"},
    {"codigo": "VL", "descricao": "Vila"},
    {"codigo": "VLA", "descricao": "Viela"},
    {"codigo": "VLE", "descricao": "Vale"},
    {"codigo": "VLT", "descricao": "Viaduto"},
    {"codigo": "VPA", "descricao": "Via de Pedestre"},
    {"codigo": "ZIG", "descricao": "Zigue-Zague"}
];

export default logradouroData;
