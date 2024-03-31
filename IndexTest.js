let herois = [
    { nome: "Superman", xp: 7500 },
    { nome: "Batman", xp: 1500 },
    { nome: "Mulher Maravilha", xp: 3000 },
    { nome: "Mulher Gato", xp: 5000 }
];

// Ordenar o array de heróis com base na experiência (XP)
herois.sort((a, b) => a.xp - b.xp);

// Loop para cada herói
for (let i = 0; i < herois.length; i++) {
    let nomeHeroi = herois[i].nome;
    let xpHeroi = herois[i].xp;
    let nivel;

    // Estrutura de decisão para determinar o nível do herói
    if (xpHeroi < 1000) {
        nivel = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivel = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivel = "Prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        nivel = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivel = "Platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivel = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Saída para cada herói
    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel + " e é a Posição "+ (i + 1) +" na lista" );
}