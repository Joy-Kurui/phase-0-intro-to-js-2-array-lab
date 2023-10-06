// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push('Ralph');
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function  appendCat(name){
    const newArray = [...cats, name];
    return newArray;
}
appendCat("Broom");

function prependCat(name){
    const newArray2 = [name, ...cats];
    return newArray2;
}
function removeLastCat(){
    const newArray3 = cats.slice(0, -1);
    return newArray3;
}
removeLastCat();

function removeFirstCat(){
    const newArray4 = cats.slice(1);
    return newArray4;
}
removeFirstCat();