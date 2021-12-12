document.querySelector('#rwComment').style.display = "";
document.querySelector('.hiring').style.display = "none";
document.querySelector('#rwQuestion').style.display = "none";
function validateForm() {
    var name = document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject = document.getElementById('address').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Address cannot be empty";
        return false;
    }
    var message = document.getElementById('city').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "City cannot be empty";
        return false;
    }
    var message = document.getElementById('postalcode').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Postal code cannot be empty";
        return false;
    }

    var comment = document.getElementById('comment').value || "";
    if (document.querySelector('#rwComment').style.display == "" && comment == "") {
        document.querySelector('.status').innerHTML = "Comment cannot be empty";
        return false;
    }

    var question = document.getElementById('question').value || "";
    if (document.querySelector('#rwQuestion').style.display == "" && question == "") {
        document.querySelector('.status').innerHTML = "Question cannot be empty";
        return false;
    }

    var rate = document.getElementById('rate').value || "";
    if (document.querySelector('.hiring').style.display == "" && rate == "") {
        document.querySelector('.status').innerHTML = "Rate cannot be empty";
        return false;
    }


    document.querySelector('.status').innerHTML = "Sending...";
    document.getElementById("contact-form").submit();
}

function radiobutton_Clicked(id) {
    document.querySelector('#rwComment').style.display = "None";
    document.querySelector('.hiring').style.display = "none";
    document.querySelector('#rwQuestion').style.display = "none";


    if (id == "btnradio1") {
        document.querySelector('#rwComment').style.display = "";
        return false;
    }
    if (id == "btnradio2") {
        document.querySelector('#rwQuestion').style.display = "";
        return false;
    }
    if (id == "btnradio3") {
        document.querySelector('.hiring').style.display = "";
        return false;
    }

}
