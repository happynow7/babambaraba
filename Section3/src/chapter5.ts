/**
 * 타입 추론
 */

// 타입 넓히기
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "양혜인",
    profile: {
        nickname: "happynow7",
    },
    urls: ["https://github.com/happynow7"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = "hello";

let arr = [1, "string"];