/1st Program /

let arr = [1, 2, 3, 4, 5, 6];
let add = 0;
let product = 1;
let i;
for (i = 0; i < arr.length; i ++)
{
add += arr[i];
product *= arr[i];
}
console.log(`sum is : ${add} Product is : ${product}`);


/2nd program/
function Barath(arr)
{
    let res=arr.filter((item,temp,array)=> array.indexOf(item)!==temp);
    return res;
}
console.log(Barath([1,4,4,5,7,7,6]));

/3rd program/
function merge(array1,array2)
{
var array3=[];
var temp = array1.concat(array2);
var leng = temp.length;
var assoc = {};
while ( leng--) {
var item = temp[leng];
if(!assoc[item])
{
array3.unshift(item);
assoc[item]=true;
}
}
return array3;
}
var array1 = [1,2,4,3];
var array2 = [2,34,67,76,6,10];
console.log(merge(array1,array2));

/4th program/
const number=[2,11,45,78,94,66]
let even=number.filter((value)=> 
{
    return value%2==0;
});
console.log('Even numbers',even);

/7th program/
let age=[
    {name:'Barath',age:21},
    {name:'Bhavi',age:27},
    {name:'Anu',age:56},
    {name:'Moorthy',age:73},
    {name:'John',age:65},
]
let above18=age.filter((vote)=> {
    return vote.age>=18;
});
console.log(above18)

/8th program/
function reverse(str)
{
    let org="";
    for(let i= str.length-1; i>=0;i--)
    {
        org+=str[i];
        }
        return org;
    }
    const String=prompt(`Enter a String: `);
    const result=reverse(String);
    console.log(result);

/9th program/
function insertobject(arr,obj)
{
    arr.push(obj);
    console.log(arr);
}
let array=[1,2,3];
let object= {x: 12, y: 8};
insertobject(array,object);

/10th program/
let add=0;
const 