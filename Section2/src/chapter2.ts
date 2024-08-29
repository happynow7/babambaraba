// 배열
// 배열 타입 정의
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "Yang"];
let boolArr: Array<boolean> = [true, false, true];

// 다양한 타입 요소를 갖는 배열 타입 정의
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

let tup3: [number, number] = [1, 2];
tup3.push(1);
tup3.push(1);
tup3.push(1);
tup3.push(1);

const users: [string, number][] = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "최아무개"], // x
];