function findSum()
{
    var sum=0;
    for(var i=0;i<arguments.length;i++)
    {
        sum=sum + arguments[i];
    }
    return sum;
}

console.log("Sum of numbers (7,8):" + findSum(7,8)); //Passing 2 parameters
console.log("Sum of numbers (1,2,3):" + findSum(1,2,3)); //Passing 3 parameters
console.log("Sum of numbers (7,8,9,2,8):" + findSum(7,8,9,2,8)); //Passing 5 parameters
console.log("Sum of numbers (7,81,99,21,8,90,1):" + findSum(7,81,99,21,8,90,1)); //Passing 7 parameters
console.log("Sum of numbers (1,2,3,4,5,6,7,8,9,10):" + findSum(1,2,3,4,5,6,7,8,9,10)); //Passing 10 parameters

