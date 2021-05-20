const convertFahrToCelsius=(fahr)=>{
    if(typeof(fahr)==="number"|| typeof(fahr)==="string"){
        let celsius=(Number(fahr)-32)*(5/9)
        if(isNaN(celsius)){
            return `It's not a Number`;
        }else{
            return `${celsius.toFixed(4)}°C`
        }
    }
    else if(Array.isArray(fahr)){
         return `${fahr} is not a valid number but a/an array.`
    }
    else{
         return `${fahr} is not a valid number but a/an ${typeof(fahr)}.`
    }
}
console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius("0"))
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({"temp": "0"}))

const checkYuGiOh=(n)=>{
    const arr=[]
    let res;
    let no=Number(n);
    if(isNaN(no)){
         console.log(`invalid parameter: "${n}"`);
     }else{
         for(i=1;i<=no;i++){
               if(i%2===0 && i%3===0 && i%5===0){
                  res="yu-gi-oh"
                  arr.push(res)
               }
               else if(i%2===0 && i%3===0){
                  res="yu-gi"
                  arr.push(res)
               }
               else if(i%3===0 && i%5===0){
                  res="gi-oh"
                  arr.push(res)
               }
               else if(i%2===0 && i%5===0){
                  res="yu-oh"
                  arr.push(res)
               }
               else if(i%2===0){
                  res="yu"
                  arr.push(res)
               }
               else if(i%3===0){
                  res="gi"
                  arr.push(res)
               }
               else if(i%5===0){
                  res="oh"
                  arr.push(res)
               }
               else{
                  res=i
                  arr.push(res)
               }
        
        }
         return arr
    }
}
console.log(checkYuGiOh("10"))
console.log(checkYuGiOh("5"))
console.log(checkYuGiOh("fizzbuzz is meh"))