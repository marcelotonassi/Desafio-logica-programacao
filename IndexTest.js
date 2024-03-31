// Variáveis
let nome_Heroi = "SuperMarcelo";
let xp_Heroi = 7500; // Exemplo de experiência

// Estrutura de decisão
let nivel;

if (xp_Heroi < 1000) {
    nivel = "Ferro";
} else if (xp_Heroi >= 1001 && xp_Heroi <= 2000) {
    nivel = "Bronze";
} else if (xp_Heroi >= 2001 && xp_Heroi <= 5000) {
    nivel = "Prata";
} else if (xp_Heroi >= 5001 && xp_Heroi <= 7000) {
    nivel = "Ouro";
} else if (xp_Heroi >= 7001 && xp_Heroi <= 8000) {
    nivel = "Platina";
} else if (xp_Heroi >= 8001 && xp_Heroi <= 9000) {
    nivel = "Ascendente";
} else if (xp_Heroi >= 9001 && xp_Heroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída
console.log("O Herói de nome " + nome_Heroi + " está no nível de " + nivel);
