var cidades = "São Paulo; Las Vegas; Moscou";
var cidadessele = cidades.split(";");

var roteiroASP = "Avenida Paulista; MASP; Parque Trianon; Rua Augusta";
var arrayRoteiroASP = roteiroASP.split(';')

var roteiroAMoscou = "Praça Vermelha; Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin";
var arrayRoteiroAmoscou = roteiroAMoscou.split(';')

var roteiroALAsvegas = "Boulevard South; Fonte do Bellagio; Principais Cassinos; Madame Tussauds";
var arrayRoteiroALS = roteiroALAsvegas.split(';')

var pontosturisticosSP = "Catedral da Sé; Pátio do Colégio; Rua Augusta";
var arrayPontosTuristicosSP = pontosturisticosSP.split(';')

var pontosturisticosDownTown = "Fremont; Las Vegas Art Museum; Museu Nacional do Crime Organizado;";
var arrayPontosTuristicosLV = pontosturisticosDownTown.split(";")

console.log(`Essas são as cidades avaliadas: ${cidadessele}`); // 1

console.log(`Roteiro A para a cidade de São Paulo: ${arrayRoteiroASP}`); // 2
console.log(`Veja também os pontos turisticos localizados no Centro de São Paulo: ${arrayPontosTuristicosSP}`);
console.log(`Roteiro A para a cidade de Moscou: ${arrayRoteiroAmoscou}`); // 2
console.log(`Roteiro A para a cidade de Las Vegas: ${arrayRoteiroALS}`); // 2
console.log(`Veja também os pontos turisticos localizados em Downtown - Los Angeles: ${arrayPontosTuristicosLV}`);

var textQuantLugaresSP = `Na cidade de São Paulo o roteiro A são citados ${arrayRoteiroASP.length - 1} locais.` // 2
var textQuantLugaresSP = `Na cidade de São Paulo o roteiro A são citados ${arrayRoteiroASP.length} locais.`
var textQuantLugaresSP = `Na cidade de São Paulo o roteiro A são citados ${arrayRoteiroASP.length} locais.`
console.log(textQuantLugaresSP, );
