// Iteration 1: Names and Input
let hacker1;
hacker1 = "El nombre del conductor es XXXX"
console.log(hacker1);
let hacker2 = "yyyy"
hacker2 = "El nombre del navegante es YYYY"
console.log(hacker2);

// Iteration 2: Conditionals
const frase1 = "El conductor tiene el nombre más largo";
const frase2 = "Parece que el navegante tiene el nombre más largo, tiene XX caracteres.";
const frase3 = "¡Vaya, ambos tienen nombres igual de largos, XX caracteres!.";

if (hacker1 > hacker2) {
    console.log("El conductor tiene el nombre más largo");
} else if (hacker1 < hacker2) {
    console.log("Parece que el navegante tiene el nombre más largo, tiene XX caracteres.");
} else if (hacker1) {
    console.log();
} else {
    console.log("¡Vaya, ambos tienen nombres igual de largos, XX caracteres!.");
};

//iteration 3: Loops

let palabra1 = "El nombre del conductor va primero.";
let palabra2 = "Yo, el navegador va primero definitivamente.";
let palabra3 = "¿Qué? ¿Los dos tienen el mismo nombre?";

for (let i = 0; i < palabra1.length; i++){
    console.log(palabra1[i].toUpperCase());
};

for (let i = 0; i < palabra2.length; i++){
    console.log(palabra2[i].toUpperCase());

};
for (let i = 0; i < palabra3.length; i++){
    console.log(palabra3[i].toUpperCase());

};

for (let i = palabra1.length - 1; i >= 0; i--){
    console.log(palabra1[i].toUpperCase());
};
for (let i = palabra2.length - 1; i >= 0; i--){
    console.log(palabra2[i].toUpperCase());

};
for (let i = palabra3.length - 1; i >= 0; i--){
    console.log(palabra3[i].toUpperCase());
}

//bono 1
let lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed pharetra ante. Aenean eget ligula nec enim cursus mollis vitae vitae velit. Vivamus rhoncus varius viverra. Praesent a eros iaculis nulla mattis dignissim in vitae tortor. Integer sed rhoncus quam, nec sagittis eros. Etiam dapibus quam quis arcu tincidunt, ut finibus nisi suscipit. Vivamus sit amet sodales justo. Aliquam sit amet neque ex. Nullam rhoncus dui ex, ut ullamcorper ipsum tristique non. Nunc feugiat diam vel nisl mattis facilisis. Suspendisse luctus, quam eu gravida egestas, elit eros dignissim lacus, gravida accumsan massa eros et quam. In pretium et nibh ac malesuada.";

let lorem2 = "Donec a nisl pulvinar, fringilla erat vel, malesuada nunc. Aenean porta mauris porttitor, suscipit lacus sit amet, dapibus magna. Nunc dapibus mollis tortor ut elementum. Suspendisse vitae tempor magna, quis pulvinar lacus. Sed neque ipsum, consectetur a est mattis, porttitor cursus lectus. Sed nec dictum mi. Cras in augue elit. Nam vel ipsum et purus finibus commodo. Nam non venenatis dui. Nulla pulvinar, justo eget venenatis aliquam, sapien massa iaculis orci, non ultrices quam tortor ac diam."; 

let lorem3 = "Aliquam luctus nisl lacinia, ultricies neque eget, aliquet massa. Aenean consectetur tellus et lacus iaculis, et aliquam metus faucibus. Integer semper vitae velit id interdum. Ut vitae ligula ut mauris auctor feugiat eu ut lorem. Etiam dui metus, feugiat ut posuere sit amet, rutrum ac libero. Fusce at posuere est. Mauris lobortis urna vel lacus convallis tristique. Mauris et massa ornare ligula pharetra hendrerit a quis urna. Vivamus dignissim aliquet tempus. Vestibulum laoreet nisl sit amet nulla bibendum, eu dictum sem condimentum. Proin tincidunt lobortis condimentum."; 

console.log(lorem1.length);
console.log(lorem2.length);
console.log(lorem3.length);

//bonoo 2

function palindrome(str) {
    // Paso 1: Convierte la cadena a minúsculas y elimina caracteres no alfanuméricos.
    var re = /[\\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');

    // Paso 2: Comprueba si la cadena invertida es igual a la original.
    var reversedStr = lowRegStr.split('').reverse().join('');
    return reversedStr === lowRegStr;
}
console.log(palindrome("Amor Roma"));
console.log(palindrome("Un hombre un plan un canal Panamá"));
console.log(palindrome("Racing  Car"));

let esPalindromo = " amor roma"
for (let i = 0; i < esPalindromo.length; i++){
    console.log(esPalindromo[i]);
};
