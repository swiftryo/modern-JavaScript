// const,let等の変数宣言

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "変数の上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数の上書き";
// console.log(val2);

// // letは再宣言不可能

// let val2 = "let変数の再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能

// // val3 = "const変数の上書き";

// const val3 = "const変数再宣言";

// constで定義したオブジェクトはプロパティの変更が可能

// const val4 = {
//   name: "名前",
//   age: 23
// };

// val4.name = "名前名前";
// val4.address = "ja";

// console.log(val4);

// 配列も追加、変更可能
// 主にconstを使用する
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列

// const name = "名前";
// const age = 12;
// // 私の名前は名前です。年齢は12歳です。

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";

// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

// アロー関数
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

// 分割代入

// const myProfile = {
//   name: "名前",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;

// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢${age}です`;

// console.log(message2);

// const myProfile = ["名前", 23];
// const myProfile3 = `私は${myProfile[0]}です。年齢は${myProfile[1]}だよ`;

// console.log(myProfile3);

// const [name, age] = myProfile;
// const message4 = `私は${name}です。年齢は${age}だよ！`;
// console.log(message4);

// デフォルト値

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("名前");

// スプレット構文  ...

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

// map filterを使った配列の処理

// const nameArr = ["田中", "岡本", "山田"];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(`${index + 1}番目は${nameArr[index]}`);
// // }

// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nameArr2);

// // nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 1;
// // });
// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "山田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// 三項演算子

// ある条件を書いて ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattendNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattendNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内";
// };

// console.log(checkSum(10, 60));

// 論理演算子の本当の意味  && ||

// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("１か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("１も2もtrueになります");
// }

//  ||　は左側がfalseなら右側を返す
// const num = 20;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は　左側がtrueなら右側を返す
// const num3 = 1;
// const fee3 = num3 && "なにか設定されました";
// console.log(fee3);
