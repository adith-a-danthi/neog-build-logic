/* 
    1. Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
    Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....
*/

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
      const fizz = i % 3 === 0 ? "Fizz" : "";
      const buzz = i % 5 === 0 ? "Buzz" : "";
      console.log(fizz || buzz ? fizz + buzz : i);
    }
  };
  fizzBuzz();
  
  /*
      2. Print the following star pattern :-
      *
      * *
      * * *
      * * * *
      * * * * *
  */
  
  const starPattern = () => {
    for (let i = 1; i <= 5; i++) {
      let star = "*".repeat(i);
      console.log(star);
    }
  };
  starPattern();
  
  // 3. Write a program to take a number input from user and print multiplication table 12 times for that number.
  const tablesToTwelve = (num) => {
    for (let i = 1; i <= 12; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  };
  tablesToTwelve(12);
  
  // 4. Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
  const fibonacci = (number) => {
    let fibo = [0, 1];
    for (let i = 2; i < number; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
  };
  console.log(fibonacci(10));
  
  // 5. Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120
  const factorial = (num) => (num <= 0 ? 1 : num * factorial(num - 1));
  console.log(factorial(5));
  
  // 6. Write a Program to take a number input from user and find if the number is Prime or not.
  const isPrime = (num) => {
    for (let i = 2; i < num / 2; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  console.log(isPrime(5));
  
  // 7. Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
  const isWeekDay = (day) => !["Saturday", "Sunday"].includes(day);
  console.log(isWeekDay("Tuesday"));
  