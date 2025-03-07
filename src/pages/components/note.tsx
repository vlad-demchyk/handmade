// generics
function echo<t>(argument: t): t {
  // повертає тей же тип що і був йому переданий (generics)
  return argument;
}
const users = [
  { name: "john", age: 25 },
  { name: "john2", age: 215 },
  { name: "john3", age: 225 },
];
function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
  return array.map((item) => item[key]);
}

// визначення параметрів змінних
const stringValue: string = "hello";
const numberValue: number = 3;
const stringArray: string[] = ["apple", "banana", "cherry"];
const user: { name: string; age: number; isActive: boolean } = {
  name: "John",
  age: 30,
  isActive: true,
};

//в випадку коли багато параметрів визначаються через type
type Guest = { name: string; age: number; isActive: boolean };
const guest: Guest = { name: "Michele", age: 11, isActive: false };

//визначення типу для аргументів функції та що вона повертає
function add(a: number, b: number): number {
  return a + b;
}
const multiply = (numberOne: number, numberTwo: number): number =>
  numberOne * numberTwo; 

// при наданні значенню змінноі - typescript автоматично витягує тип і зберігає його

//якщо функція не повертає нічого, а просто виконує якусь дію називають типом void
function shpwMessage(message?:string): void {
    console.log(message)
  }


//функція яка приймає довольну кількість неокреслених параметрів
function sumAllNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}