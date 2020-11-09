console.log("JS Start");
$(function () {
  console.log("Binding Start");
  $("#load").click(sendAjex);
  $("#load1").click(loadDoc);
});
function sendAjex() {
  console.log("Ajex Request");
  //send request here
  $.get("Data file.txt", handleResponse);
  console.log("Request sent");
}
function handleResponse(response) {
  console.log("response received");
  $("#result").empty();
  $("#result").append(response);
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      loadContent(this);
    }
  };
  xhttp.open("GET", "data_file.xml", true);
  xhttp.send();
}

function loadContent(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table =
    "<tr><th>Name</th><th>Major</th><th>Standing</th><th>Exam1</th><th>Exam2</th></tr>";
  var x = xmlDoc.getElementsByTagName("record");
  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("major")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("standing")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("exam1")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("exam2")[0].childNodes[0].nodeValue +
      "</td><tr>";
  }
  document.getElementById("table").innerHTML = table;
}

console.log("JS Finished");
