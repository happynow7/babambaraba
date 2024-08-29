// enum 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 0 = 관리자
    language: Language.korean,
};
const user2 = {
    name: "양혜인",
    role: Role.USER, // 1 = 일반 유저
    language: Language.english,
};
const user3 = {
    name: "가나다",
    role: Role.GUEST, // 2 = 게스트
};
console.log(user1, user2, user3);
export {};
