// 특수한 프로퍼티
let user1: {
    id: number;
    name: string;
} = {
    id: 1,
    name: "가나다",
};

//선택적 프로퍼티(Optional Property)
let user2: {
    id: number;
    name: string;
} = {
    id: 2,
    name: "라마바",
};

// user2 = { // x 오류 발생
//     name: "홍길동",
// };

let user3: {
    id?: number;
    name: string;
} = {
    id: 3,
    name: "사아자",
};

// 읽기전용 프로퍼티
let user4: {
    id?: number;
    readonly name: string;
} = {
    id: 4,
    name: "차카타",
};

// user4.name = "dskfd"; // x 오류 발생