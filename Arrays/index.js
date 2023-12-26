//Learning of Array

//at() finds index position Instance methods
const names=["jana","sathish","Kokila","Kiran","Ruban"]
let index=2;
console.log(names.at(index));

const names1=["jana","sathish","Kokila","Kiran","Ruban"]

console.log(names1.at(0));


//concat()
// The concat() method concatenates (joins) two or more arrays.

// The concat() method returns a new array, containing the joined arrays.

// The concat() method does not change the existing arrays

const name=["jana","Kokila","Sathish"]
const name1=["Srini","jothi"]
const name2=["ruban","afroz"]
const allnames=name.concat(name1,name2)
// console.log(name.concat(name1,name2)
console.log(allnames);




//The constructor property returns the function that created the Array prototype.

// For JavaScript arrays the constructor property returns:

const marks=[1,2,3,4,54,6,4,2,2];
let allMarks=marks.constructor;
console.log(allMarks);


// The copyWithin() method copies array elements to another position in the array.

// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.

const familyNames=["jana","kokila","sathish","chinna","Ruban","kiran"]
let overWritting=familyNames.copyWithin(2,0);
// let overWritting=familyNames.copyWithin(2,0,2);
console.log(overWritting);








// The entries() method returns an Array Iterator object with key/value pairs:

// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]

// The entries() method does not change the original array.

const myNames=["jana","sathish","Kokila"];
let added=myNames.entries();
for(let x of added){
console.log(x[0],x[1]);
}





// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array

const learn=[34,67,33,56,7];
let changed=learn.every(nothing);
console.log(changed);

function nothing(age){
   return age>18;
    
}






// The fill() method fills specified elements in an array with a value.

// The fill() method overwrites the original array.

// Start and end position can be specified. If not, all elements will be filled.

// array.fill(value, start, end)

const allFruits=["mango","Orange","papaya","grape"]

// let changedFruits=allFruits.fill("jana");//it overwrites all the index beacuase thee index is not specified
// console.log(changedFruits);//(4) ['jana', 'jana', 'jana', 'jana']


// let changingAllFruits=allFruits.fill("jana",2,3)//it will change the 3 index position name has changed
// console.log(changingAllFruits);//(4) ['mango', 'Orange', 'jana', 'grape']



let changingAllFruits=allFruits.fill("jana",2,4)//it will change the 3 and 4 index position name has changed
console.log(changingAllFruits);// ['mango', 'Orange', 'jana', 'jana']







// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.


const voters=[1,2,3,65,57,33,76,34,67,23,4,24];
let filterAll=voters.filter(filteringAges);
console.log(filterAll);

function filteringAges(ages){
    return ages>18;

}