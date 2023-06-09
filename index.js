const html = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554, a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil. Aqui vão três dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905. É considerada oficialmente como uma cidade desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu Nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital russa fica situada às margens do Rio Moscou e, apesar de ser a cidade mais cosmopolita da Rússia, grande parte de sua história está preservada<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

// cidades
const cidade = html.split("*");
const cidades = `${cidade[1]} - ${cidade[3]} - ${cidade[5]}`
document.getElementById("cidades").innerHTML = cidades;

// roteiros A das cidades
const roteiro = html.split("<br>");

const roteiroSP = `<strong>• São Paulo</strong> - ${roteiro[3]}; ${roteiro[4]};`
document.getElementById("roteiroSP").innerHTML = roteiroSP;

const roteiroLV = `<strong>• Las Vegas</strong> - ${roteiro[12]}; ${roteiro[13]};`
document.getElementById("roteiroLV").innerHTML = roteiroLV;

const roteiroM = `<strong>• Moscou</strong> - ${roteiro[21]}; ${roteiro[22]};`
document.getElementById("roteiroM").innerHTML = roteiroM;


// Quantidade Locais SP
const locais = (`${roteiro[3].slice(21)}; ${roteiro[4]};`).split(";");
const resultLocaisSP = `Quantidades de locais no roteiro A de SP é: ${locais.length - 1}`
document.getElementById("qtdLocaisSP").innerHTML = resultLocaisSP;

// Quantidade Locais LV
const locaisLV = (`${roteiro[12].slice(21)}; ${roteiro[13]};`).split(";");
const resultLocaisLV = `Quantidades de locais no roteiro A de Las Vegas é: ${locaisLV.length - 1}`
document.getElementById("qtdLocaisLV").innerHTML = resultLocaisLV;

// Quantidade Locais Moscou
const locaisMoscou = (`${roteiro[21].slice(21)}; ${roteiro[22]};`).split(";");
const resultLocaisMoscou = `Quantidades de locais no roteiro A de Moscou é: ${locaisMoscou.length - 1}`
document.getElementById("qtdLocaisMoscou").innerHTML = resultLocaisMoscou;


// Pontos Turísticos SP 
const textTuristicoSP = `Pontos Turísticos do centro de São Paulo: ${roteiro[6]};`
document.getElementById("pontosTuristicosSP").innerHTML = textTuristicoSP;

// Pontos Turísticos LV 
const textTuristicoLV = `Pontos Turísticos do Centro de Los Angeles: ${roteiro[15].slice(2)}`
document.getElementById("pontosTuristicosLV").innerHTML = textTuristicoLV;