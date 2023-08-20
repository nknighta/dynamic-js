let date = new Date();
let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

const dispdate = currentMonth + "/" + currentDay + "/" + currentYear;

let disptitle = document.getElementById('pagetitle');
disptitle.innerHTML = dispdate + " | Tables";

// テーブル要素を取得
const table = document.getElementById('outertable');

let data = [
    ["test1", "test2", "test3", "test3"],
    ["test1", "test2", "test3"]
    // 他のデータ
];

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


const ctrlsec = date.getSeconds();
const statusdisp = document.getElementById('statuswait');
function gettime() {
    statusdisp.style.color = "green";
};

function downMenuhandler() {

}