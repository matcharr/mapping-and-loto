const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


console.log("Sors-moi la liste des titres des livres du CDI\n");
//mapping by title
const filtered = books.map((obj) => ({
    title: obj.title,
}));
console.log(filtered);

console.log("\n\nEst-ce que tous les livres ont été au moins empruntés une fois ?\n");
//filtred by rented
const filtered2 = books.map(function(obj) {
    return { rented: (obj.rented > 0) ? "yes" : "no" };
});
console.log(filtered2);

console.log("\n\nQuel est livre le plus emprunté ?\n");
// sort by most rented to less rented
const filtered3 = books.sort((a, b) => parseFloat(b.rented) - parseFloat(a.rented));
console.log(filtered3[0]);

console.log("\n\nQuel est le livre le moins emprunté ?\n");
// sort by less rented to most rented
const filtered4 = books.sort((a, b) => parseFloat(a.rented) - parseFloat(b.rented));
console.log(filtered4[0]);

console.log("\n\nSupprime le livre avec l'ID: 133712 \n");
// remove first book id
const filtered5 = books.filter(function(el) { return el.id != 133712; });
console.log(filtered5);