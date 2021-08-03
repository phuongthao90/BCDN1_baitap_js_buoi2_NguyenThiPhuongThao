// BÀI TẬP JAVASCRIPT BUỔI 1 //ADD BÀI TẬP JAVASCRIPT BUỔI 2
/**
 * BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
 * Viết chương trình tính tiền lương nhân viên
 * Lương 1 ngày: 100.000
 * Cho người dùng nhập vào số ngày làm
 * Công thức tính lương: Lương 1 ngày* số ngày làm */

// MÔ HÌNH 3 KHỐI: 
/** 
 * KHỐI 1: INPUT
 * 1. Lương 1 ngày
 * 2. Số ngày làm
 * 
 * KHỐI 2: Các bước xử lý
 * 1. Tạo biến Lương 1 ngày (luongNgay) và số ngày làm việc (ngayLam)
 * 2. Tạo biến Lương nhân viên (luongNV)
 * 3. Xử lý tính Lương = Lương 1 ngày * số ngày làm
 * 4. In kết quả ra console
 * 
 * KHỐI 3: OUTPUT
 * 1. Lương nhân viên
*/

// BÀI TẬP 1 - BUỔI 1
// const luongNgay = 100000;
// var ngayLam = 25;
// var luongNV = luongNgay*ngayLam;
// console.log("Lương nhân viên là: " + luongNV);


// BÀI TẬP 1 - BUỔi 2
const luongNgay = 100000;
document.getElementById("btn-calSalary").onclick = function () {
    var ngayLam = document.getElementById("totalDay").value;
    console.log(ngayLam);

    var luongNV = luongNgay * ngayLam;
    console.log(luongNV);

    document.getElementById("totalSalary").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(luongNV);
}


// Bài 2: TÍNH GIÁ TRỊ TRUNG BÌNH
/**Viết chương trình nhập vào 5 số thực
 * Tính giá trị trung bình của 5 số này và xuất ra màn hình
 * 
 * MÔ HÌNH 3 KHỐI: 
 * 
 * KHỐI 1: INPUT
 * 1. 5 số thực
 * 
 * KHỐI 2: XỬ LÝ
 * 1. Tạo 5 biến cho 5 số thực (n1, n2, n3, n4, n5)
 * 2. Tạo biến giá trị trung bình của 5 số thực (average)
 * 3. Tính giá trị trung bình average = (n1+n2+n3+n4+n5)/5
 * 4. In kết quả ra console
 * 
 * KHỐI 3: OUTPUT
 * Giá trị trung bình 
 */
// BÀI TẬP 2 - BUỔI 1
// var n1 = 5;
// var n2 = 6;
// var n3 = 1;
// var n4 = 8;
// var n5 = 9;
// var average = (n1+n2+n3+n4+n5)/5;
//  console.log("Giá trị trung bình là: " + average);

//  BÀI TẬP 2 - BUỔI 2
document.getElementById("btnAverage").onclick = function () {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);
    var n5 = parseFloat(document.getElementById("n5").value);
    console.log(n1, n2, n3, n4, n5);

    var average = (n1 + n2 + n3 + n4 + n5) / 5;
    console.log(average);
    document.getElementById("averageNum").innerHTML = average;
}



//  BÀI 3: QUY ĐỔI TIỀN
/**
 * Giá USD hiện nay đang là 23,500 vnd
 * Viết chương trình quy đổi từ USD sang VND
 * Cho người dùng nhập vào số tiền USD
 * Tính và xuất ra số tiền sau quy đổi VND
 * 
 * 
 * MÔ HÌNH 3 KHỐI: 
 * 
 * Khối 1: INUT
 * 1.Số tiền USD muốn quy đổi
 * 
 * KHối 2: XỬ LÝ
 * 1. Tạo biến giá USD hiện nay (exRateUSD)
 * 2. Tạo biến số tiền USD muốn quy đổi ra VND (currencyUSD) 
 * 3. Tạo biến giá trị VND sau khi quy đổi (currencyVND)
 * 4. Tính currencyVND = currencyUSD*exRateUSD
 * In kết quả ra console
 * 
 * KHỐI 3: OUTPUT
 * Giá trị tiền VND sau khi quy đổi
 */

// BÀI TẬP 3 - BUỔI 1
// const exRateUSD = 23500;
// var currencyUSD = 5;
// var currencyVND = exRateUSD*currencyUSD;
// console.log("Giá trị tiền VND là: " + currencyVND +"VND");

// BÀI TẬP 3 - BUỔI 2
const exRateUSD = 23500;
document.getElementById("btnCalVND").onclick = function () {
    var currencyUSD = document.getElementById("curUSD").value;
    var currencyVND = exRateUSD * currencyUSD;
    console.log("Giá trị tiền VND là: " + currencyVND + "vnd");

    document.getElementById("btnCurVND").innerHTML = String(new Intl.NumberFormat('vn-VN').format(currencyVND) + " vnd");
}



// BÀI 4: TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
/** Viết chương trình nhập vào 2 chiều dài và chiều rộng 
 * của hình chữ nhật. 
 * Tính và xuất ra diện tích, chu vi của hình chữ nhật đó
 * 
 * MÔ HÌNH 3 KHỐI:
 * 
 * KHỐI 1: INPUT
 * 1. Chiều dài HCN
 * 2. Chiều rộng HCN
 * 
 * 
 * KHỐI 2: XỬ LÝ
 * 1. Tạo biến chiểu rộng và chiều dài HCN (a,b)
 * 2. Tạo biến diện tích (S)
 * 3. Tạo biến Chu vi (P)
 * 4. Tính diện tích S=a*b
 * 5. Tính Chu vi P = (a+b)*2
 * In kết quả ra console
 * 
 * 
 * KHỐI 3: OUTPUT
 * 1. Diện tích S
 * 2. Chu vi P
 */

// BÀI 4 - BUỔi 1
// var a = 5;
// var b = 6;
// var S = a*b;
// var P = (a+b)*2;
// console.log("Diện tích hình chữ nhật là: " + S);
// console.log("Chu vi hình chữ nhật là: " + P);

// BÀI 4 - BUỔI 2
document.getElementById("btnPS").onclick = function () {
    var length = parseFloat(document.getElementById("chieuDai").value);
    console.log(length);

    var width = parseFloat(document.getElementById("chieuRong").value);
    console.log(width);

    var S = length * width;
    var P = (length + width) * 2;
    console.log("Diện tích hình chữ nhật là: " + S);
    console.log("Chu vi hình chữ nhật là: " + P);
    document.getElementById("dienTich").innerHTML = String("Diện Tích: " + S);
    document.getElementById("chuVi").innerHTML = String("Chu Vi: " + P);
}



// BÀI 5: TÍNH TỔNG 2 KÝ SỐ
/**
 * Viết chương trình nhập vào 1 số có 2 chữ số. Tính tổng 2 ký số của số vừa nhập
 * 
 * MÔ HÌNH 3 KHỐI
 * 
 * KHỐI 1: INPUT
 * 1. Số có 2 chữ số
 * 
 * 
 * KHỐI 2: XỬ LÝ
 * 1. Tạo biến số có 2 chữ số (nn)
 * 2. Tạo biến ký số hàng chục (nChuc)
 * 3. Tạo biến ký số hàng đơn vị (nDonvi)
 * 4. Tạo biến tổng 2 ký số (sum)
 * 5. Tính tổng 2 ký số sum = nChuc+nDonvi
 * 6. In kết quả ra console
 * 
 * 
 * KHỐI 3: OUTPUT
 * 1. Tổng 2 ký số
 */


// BÀI 5 - BUỔI 1
// var nn = 27;
// var nChuc = Math.floor(nn / 10);
// var nDonvi = nn % 10;
// var sum = nChuc + nDonvi;
// console.log("Tổng 2 ký số là " + sum);

// BÀI 5 - BUỔI 2
document.getElementById("sumCal").onclick = function(){
    var nn = parseFloat(document.getElementById("Num").value);
    console.log(nn);
    var nChuc = Math.floor(nn / 10);
    var nDonvi = nn % 10;
    var sum = nChuc + nDonvi;
    console.log("Tổng 2 ký số là " + sum);

    if (nn>=10){

    document.getElementById("sumNum").innerHTML = String("Tổng 2 ký số của số " + nn + " " + "là " + sum);
    } else{
        document.getElementById("sumNum").innerHTML = String("Vui lòng nhập số nguyên dương có 2 chữ số");
    }
}




