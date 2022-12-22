/*--------------DAY 0--------------*/

/*--------------- Hello World ---------------*/
function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log(parameterVariable);
}


/*----------------- Data Types ---------------------*/

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    console.log(parseInt(firstInteger) + parseInt(secondInteger));
    console.log(parseFloat(firstDecimal) + parseFloat(secondDecimal));
    console.log(firstString + secondString);
}


/*------------------DAY 1---------------------*/

/*-------------- Arithmetic Operators--------------*/
function getArea(length, width) {
    let area;
    area = length * width;
    
    return area;
}
function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2*(length + width);
    
    return perimeter;
}
/*-------------- Functions--------------*/
function factorial(n){
    let result = 1;
    for(let i = n; i > 0; i--){
        result *= i;
    }
    return result;
}

/*------------------DAY 2---------------------*/

/*------------Conditional Statements: If-Else--------------*/

function getGrade(score) {
    let grade;
    if(score > 25) grade = 'A';
    else if(score > 20) grade = 'B';
    else if(score > 15) grade = 'C';
    else if(score > 10) grade = 'D';
    else if(score > 5) grade = 'E';
    else grade = 'F';
    
    
    return grade;
}


/*---------Day 2: Conditional Statements: Switch-----------*/

function getLetter(s) {
    let letter ;
    let a = s[0];
    switch (true) {
        case (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u'):
            letter = 'A';
            break;
        case (a == 'b' || a == 'c' || a == 'd' || a == 'f' || a == 'g'):
            letter = 'B';
            break;
        case (a == 'h' || a == 'j' || a == 'k' || a == 'l' || a == 'm'):
            letter = 'C';
            break;
        default:
            letter = 'D';
    }
    return letter;
}

/*--------------LOOPS--------------*/

function vowelsAndConsonants(s) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < s.length; i++){
        for(let j = 0 ; j < 5; j++){
            if(s[i] == vowel[j])
                console.log(s[i]);
        }
    }
    let a = 0
    for(let i = 0 ;i < s.length; i++){
        a = 0;
        for(let j = 0 ; j < 5; j++){
            if(s[i] != vowel[j])
                a++;
        }
        if(a == 5)
            console.log(s[i]);
    }
}

/*----------------DAY 3---------------------*/

/*----------------ARRAYS--------------------*/

function getSecondLargest(nums) {
    for(let i = 0; i < nums.length; i++)
       for(let j = 0; j < (nums.length - i -1); j++)
           if(nums[j] > nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j+1] = temp;
            }
    let max = nums[nums.length - 1]
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] != max){
            return nums[i];
        }
    }
    
}


/*-----------Try, Catch, and Finally------------*/

function reverseString(s) {
    let a;
    try {
        a = s.split('');  
    }
    catch (e) {
        console.log('s.split is not a function');
        console.log(s);
        return;
    }
    for(let i = 0; i < a.length / 2 ; i++){
        let temp = a[i];
        a[i] = a[a.length - i - 1];
        a[a.length - i - 1] = temp;
    }
    console.log(a.join(''));
}


/*---------------------THROW-------------*/

function isPositive(a) {
    if(a == '0') throw Error("Zero Error");
    if(a < 0) throw Error("Negative Error");
    return 'YES';
}

/*---------------------DAY 4---------------------*/

/*----------------Create a Rectangle Object------------------*/

function Rectangle(a, b) {
    let Rectangle = {
        length : a,
        width : b,
        perimeter : 2*(a+b),
        area : a*b
    }
    return Rectangle;
}

/*-----------------------Count Objects----------------------*/

function getCount(objects) {
    let a = 0;
    for(let i = 0; i < objects.length; i++){
        if(objects[i].x == objects[i].y) a++;
    }
    return a;
}