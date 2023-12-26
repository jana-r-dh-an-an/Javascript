// 1.Write a function to generate random color codes (hex codes eg #00000, #00FF00)

//              function generateColor() {}
//              const color1 = generateColor();
//              const color2 = generateColor();

// SOLUTION:1


function hashCode(str) {
    let hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }
  
  function pickColor(str) {
    return `hsl(${hashCode(str) % 360}, 100%, 80%)`;
  }
  
  one.style.backgroundColor = pickColor(one.innerText)
  two.style.backgroundColor = pickColor(two.innerText)
  three.style.backgroundColor = pickColor(three.innerText)
  four.style.backgroundColor = pickColor(four.innerText)
  //--------------------------------------------------------




  
//  2. Normalize (Flatten) given (Nested) array
//   [1, [2, 3], [4, [5, 6]], 7]
  
//   Output : [1, 2, 3, 4, 5, 6, 7]
  
  
//   ANSWER  🙂:)
//   ______________________________________________________________________
  
//   SOLUTION:1
  
  const a1=[1,[2,3],[4,[5,6]],7];
  const b1=a1.flat();
  const c1=b1.flat();
  console.log(c1)
//              ______________________________________________
  
  
//   SOLUTION:2
  
  const a2=[1,[2,3],[4,[5,6]],7];
  const b2=[].concat(...a2);
  const c2=b2.flat();
  console.log(c2)
//   ______________________________________________
  
//   SOLUTION:3
  
  const a3=[1,[2,3],[4,[5,6]],7];
  const b3 = [].concat.apply([], a3);
  const c3=b3.flat();
  console.log(c3)
  
//   ______________________________________________
  
//   SOLUTION:4
  
  const a4=[1,[2,3],[4,[5,6]],7];
  const b4 = a4.reduce((actual, currentVal) => {
      return actual.concat(currentVal)
  }, []);
  const c4=b4.flat();
  console.log(c4);




//  3. Remove Duplicates
// [1, 2, 3, 4, 5, 2, 2, 3]

// Output: [1, 2, 3, 4, 5]

// ANSWER  🙂:)
// ______________________________________________________________________

// SOLUTION:1

const aa1= [1, 2, 3, 4, 5, 6, 7,2,2,3];
function removeDuplicates(aa1) {
    return aa1.filter((item,
        index) => aa1.indexOf(item) === index);
}
console.log(removeDuplicates(aa1));

//            ______________________________________________

// SOLUTION:2

const aa2= [1, 2, 3, 4, 5, 6, 7,2,2,3];
function removeDuplicates(aa2) {
    let removedDup = [];
    aa2.forEach(ele => {
        if (!removedDup.includes(ele)) {
            removedDup.push(ele);
        }
    });
    return removedDup;
}
console.log(removeDuplicates(aa2));

//            ______________________________________________


// SOLUTION:3

const aa3= [1, 2, 3, 4, 5, 6, 7,2,2,3];
function removeDuplicates(aa3) {
    return [...new Set(aa3)];
}
console.log(removeDuplicates(aa3)); 
// ______________________________________________
// SOLUTION:4

const aa4= [1, 2, 3, 4, 5, 6, 7,2,2,3];
function removeDuplicates(aa4) {
    return [...new Set(aa4)];
}
console.log(removeDuplicates(aa4));
//  ______________________________________________



// 4.Count occurrences 

// [1, 2, 3, 4, 5, 2, 2, 3]
// Output
//    1 -> count 1
//     2 -> count 3


// ANSWER  🙂:)
// ______________________________________________________________________

// SOLUTION:1
const ab1= [1, 2, 3, 4, 5, 6, 7,2,2,3,4];
const count1 = {};
ab1.forEach(ele => {
if (count1[ele]) {
count1[ele] += 1;
} else {
count1[ele] = 1;
}
});
console.log(count1)

// ______________________________________________

// SOLUTION:2

const a= [1, 2, 3, 4, 5, 6, 7,2,2,3,4];
let count = a.reduce(function (value1, value2) {
return (
value1[value2] ? ++value1[value2] :(value1[value2] = 1),
value1
);
}, {});

console.log(count);


  