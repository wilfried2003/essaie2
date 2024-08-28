

function submitId() {
    var name = document.getElementById('nom').value.toLowerCase();
    var prenom = document.getElementById('prenom').value.toLowerCase();

    // Combinaison aléatoire du nom et prénom
    var idArray = (name + prenom).split('');
    idArray.sort(function() { return 0.5 - Math.random(); });
    var Id = idArray.join('');

    // Afficher le message dans la div
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = 'Votre ID est : ' + Id;
    messageDiv.style.fontSize = '1.2em';
    messageDiv.style.marginTop = '20px';
    messageDiv.style.color = 'white';
    messageDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    messageDiv.style.padding = '10px';
    messageDiv.style.borderRadius = '5px';
    
}
