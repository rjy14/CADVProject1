function toggleRole(){
	var currLabel = document.getElementById("loginLabelID").innerHTML;
	if (currLabel == "Username") document.getElementById("loginLabelID").innerHTML = "Company Email";
	else document.getElementById("loginLabelID").innerHTML = "Username";	
}

function setNavBar() {
if (sessionStorage.getItem("Username") == null) {
	document.getElementById("navUser").innerHTML = '<a class="nav-link" href="#" data-toggle="modal" data-target="#loginForm"><span class="fa fa-fw fa-user"></span></a>'
} else if (sessionStorage.getItem("Username") != null) {
	document.getElementById("navUser").innerHTML = '<a class="nav-link" href="user.html"><span class=""fa fa-fw fa-user"></span> welcome back </a>'
}
}
	function login() {
	if (document.getElementById("loginLabelID").innerHTML == "Username") {
		user_login();
	}
}
function fillProfile(){
    if (sessionStorage.getItem("Username") != null){
        var jsonData = JSON.parse(sessionStorage.getItem("user"));
        document.getElementById("Username").value = jsonData.Username;
        document.getElementById("Address").value = jsonData.Address;
        document.getElementById("Email").value = jsonData.Email;
        document.getElementById("Name").value = jsonData.Name;
        document.getElementById("password").value = jsonData.password;
    }
}

function logOut(){
	sessionStorage.removeItem("Username");
  window.location.href = "index.html";
}

