export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return "aclin2";
  }
  if (query.toLowerCase().includes("name")) {
    return "albert";
  }
  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const parsedNumbers = numbers.map(Number);
      return Math.max(...parsedNumbers).toString();
    }
  }
  if(query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const parsedNumbers = numbers.map(Number);
      let sum = 0
      for (let i = 0; i<numbers.length ;i++){
        sum += parsedNumbers[i];
      }
      return sum.toString();
    }
  }
  if(query.toLowerCase().includes("square and a cube")){
    const numbers = query.match(/\d+/g);
    let numArr = [];
    if (numbers) {
      for (let i = 0; i<numbers.length ;i++){
        const parsedNumbers = numbers.map(Number);
        if (Math.sqrt(parsedNumbers[i]) % 1 === 0 && Math.cbrt(parsedNumbers[i]) % 1 === 0){
          numArr.push(parsedNumbers[i].toString());
        }
      }
    }
    return numArr.join(", ");
  }
  if(query.toLowerCase().includes("multiplied")){
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const parsedNumbers = numbers.map(Number);
      return (parsedNumbers[0] * parsedNumbers[1]).toString();
    }
  }

  if(query.toLowerCase().includes("minus")){
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const parsedNumbers = numbers.map(Number);
      return (parsedNumbers[0] - parsedNumbers[1]).toString();
    }
  }

  if(query.toLowerCase().includes("power")){
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const parsedNumbers = numbers.map(Number);
      return (Math.pow(parsedNumbers[0], parsedNumbers[1])).toString();
    }
  }

  if(query.toLowerCase().includes("primes")){

    const isPrime = (num: number) => {
      for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
      }
      return num > 1;
    }
    const numbers = query.match(/\d+/g);
    let numArr = [];
    if (numbers) {
      for (let i = 0; i<numbers.length ;i++){
        const parsedNumbers = numbers.map(Number);
        if (isPrime(parsedNumbers[i])){
          numArr.push(parsedNumbers[i].toString());
        }
      }
    }
    return numArr.join(", ");
  }





  return "";
}
