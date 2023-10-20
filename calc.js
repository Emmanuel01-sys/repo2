let str; //get the argument to pass to the calculator function as a Javascript string

try {
  calculator(str);
} catch (e) {
  //notify user of an error
}

//function to remove duplicate operators. It returns an array of arrays containing numbers and operators
function rmvDuplicateOperators(str) {
      let inputArr = [];
      for(let i = 0; i < str.length; i++){
        let temp = [];//temporarily store numbers before reading an operator
        for(let j = i; j < str.length; j++) {
          if(str[j] == '*' || str[j] == '+' || str[j] == '/' || str[j] == '-') {
            inputArr.push(temp.length>0?Number(temp.join('')):0,str[j]); //directly push operator and temp
            temp = [];
            for(let k = j+1; k < str.length; k++) {//ignore any operator that is consecutive to another operator
              if(str[k] == '*' || str[k] == '+' || str[k] == '/' || str[k] == '-') j = k;
              else {
                j = k;
                break;
              }
            }
            i = j-1;
            break;
          } else {
            temp.push(str[j]);
            i = j;
          }
        }
        if(temp.length>0)inputArr.push(Number(temp.join('')));//convert to number then push it to input Arr
        temp = [];
      }
      return inputArr;
    }

//function that does the calculation. It accepts the array returned from rmvDuplicateOperators(str) and reduces it to a single value
function calculate (arr) {
  //Because of the BODMAS rule of Mathematics, begin by checking for Divisions, then Multiplications, then Additions, then Substractions
      for(let i = 0; i < arr.length; i++){
        switch(arr[i]) {
          case '/':
            let multi = (arr[i-1])/(arr[i+1]);
            arr.splice(i-1,3,multi);
            i = 0;
            break;
        }
      }
      for (let i =0; i < arr.length; i++ ) {
        switch(arr[i]) {
          case '*':
              let add = (arr[i-1])*(arr[i+1]);
            arr.splice(i-1,3,add);
            i = 0;
            break;
        }
      }
      for (let i =0; i < arr.length; i++ ) {
        switch(arr[i]) {
          case '+':
              let add = (arr[i-1])+(arr[i+1]);
            arr.splice(i-1,3,add);
            i = 0;
            break;
        }
      }
      for (let i =0; i < arr.length; i++ ) {
        switch(arr[i]) {
          case '-':
              let add = (arr[i-1])-(arr[i+1]);
            arr.splice(i-1,3,add);
            i = 0;
            break;
        }
      }
      return arr;
    }

//Define a function that handles sin, cos, tan, sqrt and cbrt
function sscct (str) {
      let inputArr = [];
        for(let i = str.length-1; i >=0; i--) {
            if(/[^0-9\.]/g.test(str[i])) break;
            else inputArr.push(str[i]);
        }
        let x = Number(inputArr.reverse().join(''));
        if(str.indexOf("sin") != -1) return Math.sin(x);
        if(str.indexOf("cos") != -1) return Math.cos(x);
        if(str.indexOf("tan") != -1) return Math.tan(x);
        if(str.indexOf("sqrt") != -1) return Math.sqrt(x);
        if(str.indexOf("cbrt") != -1) return Math.cbrt(x);
    }

//finally define a function that controls the functions. we call it calculator.It also helps in handling brackets
function calculator (str) {
      let inputArr = Array.from(str);
        if(str.indexOf('(') !== -1) {
            let start = inputArr.join("").lastIndexOf('(');
            if(inputArr.join("").indexOf(')') == -1) return "Error!";
            else {
              let end = inputArr.join("").indexOf(')', start);
            let res = calculate(rmvDuplicateOperators(str.substring(start+1,end)));
            inputArr.splice(start,(end-start)+1,res.toString());
            console.log(inputArr)
            return calculator(inputArr.join(""));
            }
        } else if(str.indexOf('sin') != -1||
        str.indexOf('cos') != -1||
        str.indexOf('tan') != -1||
        str.indexOf('sqrt') != -1||
        str.indexOf('cbrt') != -1) return sscct(str);
        else return calculate(rmvDuplicateOperators(str));
    }
