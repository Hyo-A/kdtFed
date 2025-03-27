"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user9 = {
    name: "Hyoa",
    role: Role.ADMIN,
};
const user10 = {
    name: "Mandu",
    role: Role.USER,
};
const user11 = {
    name: "Duyung",
    role: Role.GUEST,
};
console.log(user9, user11, user10);
