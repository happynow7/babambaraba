/**
 * 대수 타입
 */

/**
 * 1. 합집합 = Union 타입
 */

// |로 추가할 수 있는 값은 무한대로 가능
let a: string | number | boolean;
a = 1;
a = "hello";

a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: "",
};

let union2: Union1 = {
    name: "",
    language: "",
};

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
};

// let union4: Union1 = {
//   name: "",
// };

/**
 * 2. 교집합 타입 = Intersection 타입
 */

let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
};