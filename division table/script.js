var x,y;
var tablica = document.getElementById("tablica");

for (x = 10; x <= 100; x= x+10) {
    var row = document.createElement("tr");
    var th = document.createElement("th");
    th.textContent = x;
    row.appendChild(th);
    
    for (y = 10; y <= 100; y = y +10) {
        var rezultat = x / y;
        var td = document.createElement("td");
        td.textContent = rezultat;
        row.appendChild(td);
    }
    tablica.appendChild(row);
}