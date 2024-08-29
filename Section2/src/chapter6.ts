// any
let anyVar: any = 10;

anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
// let num: number = 10; // x

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // x 오류 발생

if (typeof unknownVar === "number") {
    num = unknownVar;
}