// Enoncé 1 :

// Objectif :

//     Mettre en pratique la définition de variables, les boucles, les fonctions, les conditions et les opérations de concaténation de chaînes de caractères.

// Consignes :

//     Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre de noms.
//     Utilisez une boucle pour demander à l'utilisateur de saisir chaque nom. Les noms saisis doivent être stockés dans un tableau.
//     Concaténez plusieurs chaînes de caractères pour construire un message de confirmation contenant le nombre de noms saisis et la liste de ces noms. Si le nombre de noms est supérieur à 3, ajoutez une info supplémentaire au message (par exemple : "C'est beaucoup de noms !").
//     Affichez le message de confirmation dans la console.
//     Écrivez une fonction qui prend en paramètre un tableau de noms et qui affiche chacun de ces noms dans la console.
//     Appelez la fonction avec le tableau de noms en argument.

// Commentaires :

//     Commentez votre code pour expliquer ce qu'il fait, ce qu'il produit et à quoi il sert.



// Exemple de message de confirmation :
// "Vous avez saisi 4 noms : Marie, Pierre, Paul, Jacques. C'est beaucoup de noms !"


let number = prompt("Veuillez saisir le nombre de noms souhaités"); // je declare la variable number qui stockera la valeur saisi par le user
let noms = []   // je declaration une variable noms de type tableau qui stockera les nom saisis par le user

for (let i = 0; i < number; i++) {      // je crée une boucle avec le nbre saisi dans number en nbre d'itération
    nom = prompt("entrer les noms");    // a chaque iteration je demande a saisir un nom 
    noms.push(nom);                     // on ajoute le contenu de la variable nom (saisi par user) dans le tableau noms
}

if (number > 3) {           // si le nombre de noms demandés est superieur a 3
    confirm("Vous avez saisi " + number + " noms : " + noms + " C'est beaucoup de noms !"); // on affiche ce message 
} else {confirm("Vous avez saisi " + number + " noms : " + noms ); } // sinon on affiche celui ci


function afficheNom(array) {
    for (let i = 0; i < array.length; i++) {
       console.log (array[i]);
        
    }
}

afficheNom(noms); // appel de la fonction avec en parametre le tableau noms 














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