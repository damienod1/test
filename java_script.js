// JavaScript Document
window.addEventListener('load', buttons, false);
var people = new Array();

function buttons() {
    var addDetailBtn = document.getElementById("addContacts");
    addDetailBtn.addEventListener('click', getPersonalData, false);
	
	var sortFirstName = document.getElementById("sortFirstName");
	sortFirstName.addEventListener('click', sortName, false);

   // var firstNameSorter = document.getElementById("sortFirstName");
    //firstNameSorter.addEventListener('click', sortFirstName, false);

    var lastNameSorter = document.getElementById("sortLastName");
    lastNameSorter.addEventListener('click', sortLastName, false);

    var dateOfBirth = document.getElementById("sortDateOf");
    dateOfBirth.addEventListener('click', sortDateOfBirth, false);

    var telephoneSorter = document.getElementById("sortPhoneNo");
    telephoneSorter.addEventListener('click', sorttelephoneName, false);

    var emailSorter = document.getElementById("sortEMail");
    emailSorter.addEventListener('click', sortemailName, false);
}

function getPersonalData() {
    var myFirstName = document.getElementById("first_name").value;
    var myLastName = document.getElementById("last_name").value;
    var myDateOfBirth = document.getElementById("dateOfBirth").value;
    var mytelephone = document.getElementById("telephone").value;
    var myemail = document.getElementById("email").value;

    var myPerson = new Object();
    myPerson.firstName = myFirstName;
    myPerson.lastName = myLastName;
    myPerson.dateOfBirth = myDateOfBirth;
    myPerson.telephone = mytelephone;
    myPerson.email = myemail;
    people.push(myPerson);
    generateTable();
}

function generateTable() {

    var contacts = document.getElementById("table");
    contacts.innerHTML = "";

    for (a in people) {

        var newTableRow = document.createElement("tr");
        contacts.appendChild(newTableRow);

        var newInfo1 = document.createElement("td");
        var newInfo1Info = document.createTextNode(people[a].firstName);
        newInfo1.appendChild(newInfo1Info);
        contacts.appendChild(newInfo1);


        var newInfo2 = document.createElement("td");
        var newInfo2Info = document.createTextNode(people[a].lastName);
        newInfo2.appendChild(newInfo2Info);
        contacts.appendChild(newInfo2);

        var newInfo3 = document.createElement("td");
        var newInfo3Info = document.createTextNode(people[a].dateOfBirth);
        newInfo3.appendChild(newInfo3Info);
        contacts.appendChild(newInfo3);

        var newInfo4 = document.createElement("td");
        var newInfo4Info = document.createTextNode(people[a].telephone);
        newInfo4.appendChild(newInfo4Info);
        contacts.appendChild(newInfo4);

        var newInfo5 = document.createElement("td");
        var newInfo5Info = document.createTextNode(people[a].email);
        newInfo5.appendChild(newInfo5Info);
        contacts.appendChild(newInfo5);

 
         var newInfo6 = document.createElement("td");
         newInfo6.innerHTML = '<button id="delete">Delete Contacts</button>';
         contacts.appendChild(newInfo6);
 

    }


	function sortName ()
	{
		alert("Heloo");	
	}

   /* function sortFirstName() {
		
		alert("hello");
        people.sort(sortFunctionByFirstName);
        generateTable();
    }

    function sortFunctionByFirstName(a, b) {
        return a.firstName > b.firstName;
    }
*/
    /*function sortLastName() {
        people.sort(sortFunctionByLastName);
        generateTable();
    }

    function sortFunctionByLastName(a, b) {
        return a.lastName > b.lastName;
    }

    function sortDateOfBirth() {
        people.sort(sortFunctionByDateOf);
        generateTable();
    }

    function sortFunctionByDateOf(a, b) {
        return a.dateOfBirth > b.dateOfBirth;
    }

    function sortTelephone() {
        people.sort(sortFunctionByTelephone);
        generateTable();
    }

    function sortFunctionByTelephone(a, b) {
        return a.telephone > b.telephone;
    }

    function sortEmail() {
        people.sort(sortFunctionByEmail);
        generateTable();
    }

    function sortFunctionByEmail(a, b) {
        return a.email > b.email;
    }
}*/
}