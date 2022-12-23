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


const number = prompt("Veuillez saisir le nombre de noms souhaités"); // je declare la variable number qui stockera la valeur saisi par le user
const noms = []   // je declaration une variable noms de type tableau qui stockera les nom saisis par le user

for (let i = 0; i < number; i++) {      // je crée une boucle avec le nbre saisi dans number en nbre d'itération
    nom = prompt("entrer les noms");    // a chaque iteration je demande a saisir un nom 
    noms.push(nom);                     // on ajoute le contenu de la variable nom (saisi par user) dans le tableau noms
}

if (number > 3) {           // si le nombre de noms demandés est superieur a 3
    confirm("Vous avez saisi " + number + " noms : " + noms + " C'est beaucoup de noms !"); // on affiche ce message 
} else {confirm("Vous avez saisi " + number + " noms : " + noms ); } // sinon on affiche celui ci


function afficheNom(array) {                    // declaration de la fonction afficheNom avec en argument un tableau
    for (let i = 0; i < array.length; i++) {    // boucle de 0 jusqu'a la longeur du tableau
       console.log (array[i]);                  // affichage a chaque iteration de l'element du tableau

    }
}

afficheNom(noms); // appel de la fonction avec en argument le tableau noms 















