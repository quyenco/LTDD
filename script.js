// Coding Challenge #1

const mark = [78, 1.69];
        const join = [95, 1.88];

        function bmi(arr) {
            return arr[0] / (arr[1] * arr[1])
        }
        BMIMark = bmi(mark);
        BMIJoin = bmi(join);

        var markHigherBMI = BMIMark > BMIJoin
        console.log(markHigherBMI);

// Coding Challenge #2
// 1
console.log(markHigherBMI?"Mark's BMI is higher than John's!":"John's BMI is higher than Mark's!")
// 2.
console.log(markHigherBMI?`Mark's BMI (${BMIMark}) is higher than John's (${BMIJoin})!`:`John's (${BMIJoin}) BMI is higher than Mark's (${BMIMark})!`)

// Coding Challenge #3
const Dolphins1 = [96,108,89];
const Koalas1 = [88,91,101];
const Dolphins2 = [97,112,101];
const Koalas2 = [109,95,123];
const Dolphins3 = [97,112,101];
const Koalas3 = [109,95,106];

//1. Tính trung bình
console.log("Tính trung bình của từng đội");

var avt = function AVT(arr) {
    const reducer = (total, curr) => total + curr;

    return arr.reduce(reducer,)
}
console.log("Data 1");
console.log("Trung bình của đội Dolphin: "+avt(Dolphins1)/Dolphins1.length);
console.log("Trung bình của đội Koalas: "+avt(Koalas1)/Koalas1.length);
console.log("Data 2");
console.log("Trung bình của đội Dolphin: "+avt(Dolphins2)/Dolphins2.length);
console.log("Trung bình của đội Koalas: "+avt(Koalas2)/Koalas2.length);
console.log("Data 3");
console.log("Trung bình của đội Dolphin: "+avt(Dolphins3)/Dolphins3.length);
console.log("Trung bình của đội Koalas: "+avt(Koalas3)/Koalas3.length);

// 2.
avtDolphins1 = avt(Dolphins3)/Dolphins3.length;
avtKoalas1 = avt(Koalas3)/Koalas3.length;

console.log(avtDolphins1>avtKoalas1?"Dolphin win!":(avtDolphins1>avtKoalas1?"Koalas win!":"2 teams draw"));

// 3.
if(avtDolphins1>avtKoalas1 && avtDolphins1>=100) console.log("Dolphins Win"); 
else if(avtDolphins1<avtKoalas1 && avtKoalas1>=100) console.log("Koalas win!");
else console.log("No team wins the trophy");
// 4.
if(avtDolphins1>avtKoalas1 && avtDolphins1>=100) console.log("Dolphins Win"); 
else if(avtDolphins1<avtKoalas1 && avtKoalas1>=100) console.log("Koalas win!");
else if(avtDolphins1==avtKoalas1 && avtDolphins1>=100 && avtKoalas1>=100) console.log("2 đội đều có tiền thường");
else console.log("No team wins the trophy");

// Coding Challenge #4
// Steven muốn xây dựng một công cụ tính tiền boa rất đơn giản 
// mỗi khi anh ấy đi ăn ở nhà hàng. Ở đất nước của anh ấy, người 
// ta thường boa 15% nếu giá trị hóa đơn nằm trong khoảng từ 50 đến
// 300. Nếu giá trị khác, tiền boa là 20%
const bill = 275;

// 1
var tip;
tip = (bill>=50 && bill <=300)?0.15*bill:0.2*bill;
console.log("tien boa: "+tip);

// 2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

// Coding Challenge #5
// 1. tao ham tinh trung binh cong
function calcAverage(arr) {
    return (arr[0]+arr[1]+arr[2])/3;
}
// 2. 
// const DolphinC5 = [44, 23,71]
// const KoalasC5 = [65,54,49]
const DolphinC5 = [85,54,41]
const KoalasC5 = [23,34,27]
var avgDolphinsC5 = calcAverage(DolphinC5);
var avgKoalasC5 = calcAverage(KoalasC5);
console.log(avgDolphinsC5);
console.log(avgKoalasC5);
// 3. 
function checkWinner(avgD, avgK) {
    return avgD>=avgK*2?`Dolphins win (${avgD} vs. ${avgK})`:
            avgK>=avgD*2?`Koalas win (${avgK} vs. ${avgD})`:
            `No team win`
}
// 4.
console.log(checkWinner(avgDolphinsC5,avgKoalasC5));
// 5.
function checkWinner(avgD, avgK) {
    return avgD==avgK?`Ignore draws this time`:
            avgD>=avgK*2?`Dolphins win (${avgD} vs. ${avgK})`:
            avgK>=avgD*2?`Koalas win (${avgK} vs. ${avgD})`:
            `No team win`
}

// Coding Challenge #6
// 1
var bill2 = 100;
function calcTip(bill) {
    return (bill>=50 && bill <=300)?0.15*bill:0.2*bill;
}
console.log(`The bill was ${bill2}, the tip was ${calcTip(bill2)}, and the total value ${bill2+calcTip(bill2)}`);

// 2. tao mang bill
const arrBill = [125,555,44]
// 3. tao mang tip
var arrtip =[];
arrBill.forEach(function(value){
    arrtip.push(calcTip(value));
});
console.log("Mang tien boa: "+arrtip);
// 4. tao mang arrtotal
var arrtotal = [];
for(var i=0; i<arrBill.length;i++){
    arrtotal.push(arrtip[i]+arrBill[i])
}
console.log('Mang tong tien: '+arrtotal);

// Coding Challenge #7
// 1. tạo đối tượng 
var Mark = {
    fullName:'Mark Miller',
    weight :78,
    height:1.69
}
var John = {
    fullName: 'John Smith',
    weight :92,
    height:1.95
}
// 2.Tạo phương hức calcBMI
function calcBMI(obj) {
    return obj.weight/(obj.height*obj.height)
}
Mark.BMI = calcBMI(Mark);
John.BMI= calcBMI(John);
console.log(Mark);
console.log(John)
// 3. so sanh bmi của ai cao hơn
console.log(John.BMI>Mark.BMI?`John's BMI (${John.BMI}) is higher than Mark's (${Mark.BMI})!`:
John.BMI<Mark.BMI?`Mark's BMI (${Mark.BMI}) is higher than Jonh's (${John.BMI})!`:
'BMI của Jonh và Mark bằng nhau');

// Coding Challenge #8
// 1. tạo mảng
const arrBillC8 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// 2. tao mang tip,tao mang arrtotal
var arrtip =[];
arrBillC8.forEach(function(value){
    arrtip.push(calcTip(value));
});
console.log("Mang tien boa cau 8: "+arrtip);
var arrtotal = [];
for(var i=0; i<arrBillC8.length;i++){
    arrtotal.push(arrtip[i]+arrBillC8[i])
}
console.log('Mang tong tien cau 8: '+arrtotal);

// 4. viết hàm calcAverage
var sum =0;
function calcAverageC8(arr) {
    arr.forEach(value => {
        sum+=value;
    });
    return sum/arr.length;
}
console.log('Trung bình cộng của mảng hóa đơn: '+calcAverageC8(arrBillC8));

// Coding Challenge #9
// 1. tạo hàm printForecast
const arrtemperatures1 =[17, 21, 23];
const arrtemperatures2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
    var logs = "...";
    for(var i=0; i<arr.length; i++){
        logs+= arr[i]+'oC in '+(i+1)+' days ... '
    }
   console.log(logs);
}
 printForecast(arrtemperatures1);
 printForecast(arrtemperatures2);



// Coding Challenge #1
// Tạm dừng trò chơi




// Cấu trúc dữ liệu, toán tử hiện đại và chuỗi
// Thử thách viết mã số 1
// Đá bóng

// var players1 =[];
// var players2 =[];



// Working With Arrays
// Coding Challenge #1
// Tuổi của chó
var dogsJulia = [3, 5, 2, 12, 7];
var dogsKate = [4, 1, 15, 8, 3]
function checkDogs(dogsJulia, dogsKate) {
    // 1
    // xóa con chó đầu và 2 con cuối mảng của Julia
    dogsJulia = dogsJulia.slice(1,dogsJulia.length-2)
    // 2
    // gộp 2 mảng của Julia và Kate
    var dogsJuliaAndKate = dogsJulia.concat(dogsKate)
    // 3 log ra 
    for(var i=0; i<dogsJuliaAndKate.length; i++){
        console.log(dogsJuliaAndKate[i]>=3?`Con cho so ${(i+1)} la cho truong thanh và ${dogsJuliaAndKate[i]} tuoi`:
        `Con cho so ${(i+1)} van la cho con và ${dogsJuliaAndKate[i]} tuoi`);
    }
}
// 4
checkDogs(dogsJulia, dogsKate)

//  Coding Challenge #2
// 1
function calcAverageHumanAge(arrAgeDogs) {
    var humanAges = arrAgeDogs.map((DogAge)=>{
        return DogAge<=2?(2*DogAge):(16+DogAge*4)
    })
    return humanAges;
}
console.log(calcAverageHumanAge(dogsJulia));
// 2. bỏ những con cho dưới 18 tuổi
var AdultDogs = calcAverageHumanAge(dogsJulia).filter(item=>item>=18)
console.log(AdultDogs);
// 3 tính tuổi trung bình của những con chó trưởng thành
function calcAverageDogsAge(arr) {
    var sum =0;
    arr.forEach(value => {
        sum+=value;
    });
    return sum/arr.length;
}
console.log('Tuổi thọ trung bình của chó trưởng thành: '+calcAverageDogsAge(AdultDogs));

// Coding Challenge #3
