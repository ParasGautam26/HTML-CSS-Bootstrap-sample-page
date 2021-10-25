// Function to add enrolled student data into the table
function addRow() {

    // Declaration of student object
    let student = {
        name: document.getElementById('name').value,
        gender: getGender(),
        skills: getSkills(),
        email: document.getElementById('email').value,
        website: document.getElementById('website').value,
        imageUrl: document.getElementById('imageLink').value
    }

    // Conditions for missing values 
    if (student.name.length <= 0) {
        alert("Enter name");
    }
    if (student.email.length <= 0) {
        alert("Enter email");
    }
    if (student.website.length <= 0) {
        alert("Enter website");
    }
    if (student.imageUrl.length <= 0) {
        alert("Enter Image link");
    }

    // Section to add a row into the table and student attributes into the table
    if (student.name.length > 0 && student.email.length > 0 && student.website.length > 0 && student.imageUrl.length > 0) {
        let tbodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];
        let rw = tbodyRef.insertRow(0);
        let cl1 = rw.insertCell(0);
        let cl2 = rw.insertCell(1);
        cl1.innerHTML = `${student.name}<br>${student.gender}<br>${student.email}<br><a target="_blank" href="${student.website}">${student.website}</a>
                        <br>${student.skills}<br>`;
        cl2.innerHTML = `<a href="${student.imageUrl}" target="_blank"><img onerror="loadDefaultImage(this)" class="img-fluid" alt="${student.name}'s Picture" src="${student.imageUrl}"><a>`;
        rw.classList.add('fade-in');
    }
}

// Function to clear up the form 
function clearTable() {
    document.getElementById("form").reset();
}

// Function to get the value from radio buttons
function getGender() {
    var radios = document.getElementsByName('gender');
    for (var radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return alert('Gender not selcted !');
}

// Function to get values from checkboxes
function getSkills() {

    var witem = "";

    var chks = document.getElementsByName("skills");
    for (var chk of chks) {
        if (chk.checked) {
            witem = witem + chk.value + ",";
        }
    }

    var res = "";
    for (let i = 0; i < witem.length - 1; i++) {
        res += witem[i];
    }
    if (res.length > 0) {
        return res;
    }
    return alert("Choose at least one skill");
}