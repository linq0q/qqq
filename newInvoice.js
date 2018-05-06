var documentId = 123456;
var invoiceAmount = 66666;
var terms = "Net 10 - Total 30";
var createdBy = "Qiao";
var invoiceNumber = 99999


function getDocumentData() {
	var rightNow = new Date();
	document.getElementById("documentId").innerHTML = "Invoice number: " + documentId;
	document.getElementById("documentDate").innerHTML = "Invoice Date: " + rightNow;
	document.getElementById("invoiceAmount").innerHTML = "Total Amount Due: " + "$" + invoiceAmount;
	document.getElementById("terms").innerHTML = "Terms: " + terms;
	document.getElementById("createdBy").innerHTML = createdBy + ": #" + invoiceNumber;
};
