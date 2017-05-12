///*
//    multiplication table
//    
// */
//var multiplicationTable = "<table>";
//
//for (var i = 1; i <= 15; i++) // i = 2
//{
//    multiplicationTable += "<tr>";
//    
//    for (var j = 1; j <= 10; j++) //j =11
//        multiplicationTable += "<td>" + i * j + "</td>";
//    
//    multiplicationTable += "</tr>";
//}
//
//multiplicationTable += "</table>";
//
//var result = document.getElementById("result");
//
//result.innerHTML = multiplicationTable;

var aNumber = 4;
var myTable = "<table>";
for (var i = 1; i <= 15; i++)
{
    myTable += "<tr>";
    myTable += "<td>" + " " + aNumber + "%" + i + " = " + aNumber%i  + "</td>";
    myTable += "</tr>";
    
    }
myTable += "</table>";
var result = document.getElementById("result1");
result.innerHTML = myTable;
// multiplication
//===========================================================================
var aNumber2 = 8;
var myTable2 = "<table>";
for (var i = 1; i <= 10; i++)
{
    myTable2 += "<tr>";
    myTable2 += "<td>" + " " + aNumber2 + "/" + i + " = " + aNumber2/i  + "</td>";
    myTable2 += "</tr>";
    
    }
myTable2 += "</table>";
var result2 = document.getElementById("result2");
result2.innerHTML = myTable2;
//===========================================================================



