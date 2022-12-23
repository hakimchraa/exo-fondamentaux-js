// Enoncé 2 :

// Objectif :

//     Mettre en pratique la définition de variables, les boucles, les fonctions, les conditions et les opérations de concaténation de chaînes de caractères.

// Consignes :

//     Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10. Si l'utilisateur saisit un nombre qui n'est pas compris dans cet intervalle, le programme doit afficher un message d'erreur et redemander à l'utilisateur de saisir un nombre jusqu'à ce qu'il saisisse un nombre valide.
//     Utilisez une boucle for pour afficher la table de multiplication du nombre saisi. Par exemple, si l'utilisateur saisit 5, le programme doit afficher :



// ```
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30 
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50
// ```

//     Écrivez une fonction qui prend en paramètre un entier et affiche sa table de multiplication de 1 à 10.
//     Appelez la fonction avec le nombre saisi par l'utilisateur en argument.

// Commentaires :

//     Commentez votre code pour expliquer ce qu'il fait, ce qu'il produit et à quoi il sert.


let number = 0;     // creation de la variable number
do {
    number = prompt("saisissez un chiffre entre 0 et 10"); // boucle tant que avec une premier execution du prompt et une condition 
    if (number < 1 || number > 10) {                        // a remplir pour sortir de la boucle qui est nombre compris entre
        alert("le nombre doit etre compris entre 1 et 10"); // 1 et 10 
    }
}
while (number > 10)


let result = 0;                     // creation variable resultat
for (let i = 1; i <= 10; i++) {     // boucle de 1 a 10 
    result=number*i ;               // mutiplication a chaque iteration de number par l'indice qui est incrementé 
    console.log(`${number} * ${i} = ${result}`); // affichage du resultation 
}
