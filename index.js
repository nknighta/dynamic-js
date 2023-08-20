let date = new Date();
let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

const dispdate = currentMonth + "/" + currentDay + "/" + currentYear;

const getdate = (year,day, month, hour, min,sec) => {
    let date = new Date();
    year = date.getFullYear();
    day = date.getDate();
    month = date.getMonth() + 1;
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    hour = hour > 10 ? hour : "0" + hour;
    min = min > 10 ? min : "0" + min;
    sec = sec > 10 ? sec : "0" + sec;
    return year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec;
}

const dispdatetest = getdate();
const datetest = document.getElementById('testdate');
datetest.innerHTML = dispdatetest; 

let disptitle = document.getElementById('pagetitle');
disptitle.innerHTML = dispdate + " | Tables";

// テーブル要素を取得
const table = document.getElementById('outertable');

// 追加前の配列
let data = [];

for (let i = 0; i < data.length; i++) {
    let row = table.insertRow();
    for (let j = 0; j < data[i].length; j++) {
        let cell = row.insertCell(j);
        cell.innerHTML = data[i][j];
    }
}

let btn = document.getElementById('addbtn').addEventListener('click', addDataArray,{once: true}); 

function addDataArray() {
    data.push(["test1", "test2", "test3"]);
    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow();
        for (let j = 0; j < data[i].length; j++) {
            let cell = row.insertCell(j);
            cell.innerHTML = data[i][j];
        }
    }
}