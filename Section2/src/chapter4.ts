// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

// type User = {}

function test() {
    type User = string;
}

let user: User = {
    id: 1,
    name: "양혜인",
    nickname: "happynow7",
    birth: "2001.12.01",
    bio: "안녕하세요",
    location: "경기도",
};

let user2: User = {
    id: 2,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
};

// type CountryNumberCodes = { // x 오류 발생
//     [key: string]: number;
//     Korea: string;
// };

// let countryNumberAndStringCodes: CountryNumberCodes = {
//   Korea: "ko",
// };