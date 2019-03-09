window.addEventListener('load',init);
    var btnInscription;
    var btnConnexion;
    
function init() {
    btnInscription = document.getElementById("inscription");
    btnConnexion = document.getElementById("connexion");
    btnConnexion.addEventListener('click',changeConnexion);
    btnInscription.addEventListener('click',changeInscription);
}
function changeConnexion(){
    var zoneImput = document.getElementById("inputZone");
    var node = document.getElementById("titreForm")
    btnConnexion.classList.remove("inactif");
    btnInscription.classList.add("inactif");
    btnInscription.classList.remove("actif");
    btnConnexion.classList.add("actif");
    
    while (zoneImput.firstChild) {
   	 zoneImput.removeChild(zoneImput.firstChild);
    }
    node.innerHTML   = 'Connexion' 
    var inputUsername = document.createElement('input');            
    inputUsername.type = "text";    
    inputUsername.placeholder = "Pseudo ou email";
    inputUsername.className = "champ"
    inputUsername.required = true;
    inputUsername.name = "username";
    zoneImput.appendChild(inputUsername);
    var inputPswd = document.createElement('input');            
    inputPswd.type = "password";    
    inputPswd.placeholder = "Mot de passe";
    inputPswd.className = "champ"
    inputPswd.required = true;
    inputPswd.name = "password";
    zoneImput.appendChild(inputPswd);
    var btnValider = document.createElement('input');            
    btnValider.type = "submit";    
    btnValider.value = "Valider";
    zoneImput.appendChild(btnValider);
	
}
function changeInscription(){
    var zoneImput = document.getElementById("inputZone");
    var node = document.getElementById("titreForm")
    btnInscription.classList.remove("inactif");
    btnConnexion.classList.add("inactif");
    btnConnexion.classList.remove("actif");
    btnInscription.classList.add("actif");
    while (zoneImput.firstChild) {
   	 zoneImput.removeChild(zoneImput.firstChild);
    }
    node.innerHTML   = 'Inscription';

    var inputUsername = document.createElement('input');            
    inputUsername.type = "text";    
    inputUsername.placeholder = "Pseudo ou email";
    inputUsername.className = "champ";
    inputUsername.required = true;
    inputUsername.name = "username";
    zoneImput.appendChild(inputUsername);

    var inputEmail = document.createElement('input');            
    inputEmail.type = "email";    
    inputEmail.placeholder = "Email";
    inputEmail.className = "champ";
    inputEmail.required = true;
    inputEmail.name = "email";
    zoneImput.appendChild(inputEmail);

    var inputPswd = document.createElement('input');            
    inputPswd.type = "password";    
    inputPswd.placeholder = "Mot de passe";
    inputPswd.className = "champ";
    inputPswd.required = true;
    inputPswd.name = "password";
    zoneImput.appendChild(inputPswd);

    var inputPswdconf = document.createElement('input');            
    inputPswdconf.type = "password";    
    inputPswdconf.placeholder = "Verification du mot de passe";
    inputPswdconf.className = "champ";
    inputPswdconf.required = true;
    inputPswdconf.name = "password_confirm";
    zoneImput.appendChild(inputPswdconf);
    
    var btnValider = document.createElement('input');            
    btnValider.type = "submit";    
    btnValider.value = "Valider";
    zoneImput.appendChild(btnValider);
}