// 블록 스코프(es6)
var users = [
  {
    no: 1,
    name: "마이콜",
    email: "bjda312@sdadkjakld",
  },
  {
    no: 2,
    name: "dadsa",
    email: "asddasd12@sdadkjakld",
  },
];

// 객체분해(es6)
function print(_ref) {
  var { no, name, email } = _ref;
  // 템플릿 문자열(es6)
  console.log(`${no}: ${name}: ${email}`);
}

// for ~ of(es6)
for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  print(user);
}
