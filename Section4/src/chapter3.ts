/**
 * 함수 오버로딩
 * JS에서는 지원 X TS에서는 지원 O
 */

// 버전들 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
}

// func();
func(1);
// func(1, 2);
func(1, 2, 3);