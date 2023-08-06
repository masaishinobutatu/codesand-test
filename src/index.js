// const val4 = {
//   name: "otoha",
//   age: 1,
// };

// val4.name = "あさみ";
// val4.addres = "日本";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列

// const name = "おとは";
// const age = 1;

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func２です"));

// const func3 = (num1, num2) => {
//   return num1 + num2
// };
// console.log(func3(10,20));

//分割代入
// const myProfile = {
//   name: "おと",
//   age: 1,
// };

// const { name, age } = myProfile;
// const message1 = `名前は${name}です。年齢は${age}です`;
// console.log(message1);

// const myProfile = ["おと", "1"];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です`;
// console.log(message4);

//デフォルト値、引数

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello();

//スプレッド構文...

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//mapやfilterを使った配列の処理
const nameArr = ["田中", "山田", "おとは"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です`);
//}

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// nameArr.map((name) => console.log(`${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "おとは") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

//三項演算子

//ある条件？条件がtrueの時：条件がfalse
// const val1 = 1 < 0 ? `trueです` : `falseです`;
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNam =
//   typeof num === `number` ? num.toLocaleString() : `数値を入力してください`;
// console.log(formattedNam);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `１００を超えています！` : `許容範囲内です`;
// }
// console.log(checkSum(50, 40));

// 論理演算子の本当の意味を知ろう　&& ||]

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2){
//  console.log("１か２はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("１も２もtrueになります");

// const num = 100;
// const fee = num || "金額が未設定です";
// console.log(fee);

// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
