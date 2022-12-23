// # Définition de variables

// 1. Créez une variable appelée `nom` et affectez-lui la valeur "John".
// 2. Affichez la valeur de la variable `nom` dans la console en utilisant la fonction console.log().
// 3. Modifiez la valeur de la variable `nom` pour qu'elle soit "Jane" sans modifier le code précédent.
// 4. Affichez à nouveau la valeur de la variable nom dans la console.

let nom = "john"; // creer une variable nom avec comme valeur john
console.log(nom); // affiche le contenu de la variable nom 
nom = "Jane";     // affectation de la valeur Jane à la variable nom
console.log(nom); // affiche le contenu de la variable nom 


// # Boucles

// 1. Créez une boucle for qui s'arrête si l'index dépasse 10, le resultat de la boucle doit correspondre aux nombres de 1 à 10 inclus (attention le premier nombre affiché doit être le 1 et non le 0).
// 2. Dans la boucle, utilisez la fonction console.log() pour afficher chaque nombre du tableau.


for (let i = 1; i <= 10; i++) {     // boucle qui répéte 10 fois les instructions entre accolade
    console.log(i)  // affiche la valeur de i a chaque itération de boucle
}

// # console.log()

// 1. Utilisez la fonction console.log() pour afficher le message "Bonjour tout le monde!" dans la console.
// 2. Utilisez la fonction console.log() pour afficher le résultat de l'expression mathématique "3 + 4" dans la console.
// 3. Utilisez la fonction console.log() pour afficher la valeur de la variable `nom`, qui contient la chaîne de caractères du premier exercice.

console.log("Bonjour tout le monde!"); //affiche la chaine de caractére entrée en parametre
console.log(3 + 4);                       //affiche le resultat de l'expression mathrmatique entrée en parametre
console.log(nom);                       //affiche le contenu de la variable nom


// # Concaténation de chaînes de caractères

// 1. Définissez une variable appelée `firstName` et affectez-lui la valeur "John".
// 2. Définissez une variable appelée `lastNAme` et affectez-lui la valeur "Doe".
// 3. Utilisez la concaténation de chaînes de caractères pour créer une nouvelle chaîne de caractères qui contient le prénom et le nom séparés par un espace. Par exemple, si prenom vaut "John" et nom vaut "Doe", la chaîne de caractères créée devrait être "John Doe".
// 4. Affichez la chaîne de caractères créée dans la console en utilisant la fonction console.log().

// Attention, veillez à bien utiliser les reverse quotes.

let [firstName, lastName] = ["John", "Doe"];  // creation des variables
console.log(`Bienvenue ${firstName} ${lastName} !`); // affiche le contenu des variables via la quote inverse

// # Conditions

// 1. Définissez une variable appelée `age` et affectez-lui la valeur de votre âge.
// 2. Utilisez une conditionnelle if pour vérifier si l'âge est supérieur ou égal à 18. Si c'est le cas, utilisez la fonction console.log() pour afficher le message "Vous êtes majeur". Sinon, utilisez la fonction console.log() pour afficher le message "Vous êtes mineur".

let age = 47;                          // declaration de la variable age
if (age >= 18) {                        // condition si age >= 18
    console.log("vous etes majeur")    // affiche message majeur
} else {                                // sinon
    console.log("vous etes mineur")    // affiche message mineur

}

// ## Avancé

// # Création et parcours d'un tableau

// 1. Créez un tableau appelé `couleurs` qui contient les éléments suivants : "rouge", "vert", "bleu", "jaune", "orange".
// 2. Utilisez une boucle for pour parcourir le tableau couleurs et afficher chaque élément dans la console en utilisant la fonction console.log().

let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"];   // declaration variable de type tableau 
for (let i = 0; i < couleurs.length; i++) {                     // on repete les instructions entre accolades tant que i est < que le nbre d'element du tableau
    console.log(couleurs[i]);                                   // on affiche l'element du tableau couleur a chaque iteration
}


// # Utilisation de Array.push() et Array.pop()

// 1. Créez un tableau appelé `numbers` qui contient les nombres suivants : 1, 2, 3, 4, 5.
// 2. Utilisez la méthode push() pour ajouter le nombre 6 au tableau numbers.
// 3. Utilisez la méthode pop() pour retirer le dernier élément du tableau numbers.
// 4. Affichez le contenu du tableau numbers dans la console en utilisant la fonction console.log().

let numbers = [1, 2, 3, 4, 5];  // on crée le tableau de nombre
numbers.push(6);                // on ajoute un element nombre a la fin du tableau via la methode push
console.log(numbers)            // on affiche le tableau
numbers.pop();                  // on retire le dernier element du tableau via la methode pop
console.log(numbers)            // on affiche le tableau



// # Fonctions

// 1. Écrivez une fonction qui prend en argument un entier et renvoie `true` si l'entier est pair, `false` sinon. 
// Vous pouvez utiliser l'opérateur modulo `%` pour vérifier si un nombre est divisible par deux.

function pair(entier) {         // declaration de la fonction pair avec en argument un entier
    if (entier % 2 == 0) {    // condition si le resultat du modulo par 2  de l'entier est egal a 0 
        return true;                // alors c'est un nombre pair donc on renvoi true
    }
    return false;                   // sinon on renvoi false 
}

// 2. Écrivez une fonction qui prend en argument un tableau d'entiers et renvoie la somme de tous les éléments du tableau. 
// Vous pouvez utiliser une boucle `for` pour parcourir le tableau et ajouter chaque élément à une variable qui tiendra la somme.


function sum(numbers) {                 // declaration de la fonction sum avec un tableau en argument
    let result = 0;                     // declaration de la variable result 

    for (let i = 0; i < numbers.length; i++) {  // boucle de 0 a la longueur du tableau
        result += numbers[i];                   // additionne a chaque iteration les nombres du tableau dans la variable result
    }

    return result;                              // puis renvoi le resultat
}

console.log(sum([15, 8, 1, 14]))                  // appel de la fonction 


// 3. Écrivez une fonction qui prend en argument une chaîne de caractères et renvoie la chaîne de caractères inversée. 
// Par exemple, si la chaîne passée en argument est "bonjour", la fonction doit renvoyer "ruojnob". 
// Vous pouvez utiliser la méthode `split()` pour séparer la chaîne en un tableau de caractères, 
// la méthode `reverse()` pour inverser l'ordre des éléments du tableau, et la méthode `join()` pour reconstruire la chaîne de caractères à partir du tableau inversé

function reverseString(string) {                    // declaration de la fonction avec string en argument
    return Array.from(string).reverse().join("");   // on cree un tableau a partir de la chaine , on fait un reverse et on 
}                                                   // retire les separateurs pour joindre les caracteres pour l'affichage

console.log(reverseString("Bonjour"))               // appel de la fonction