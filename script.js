// Funktion, um Erfahrungspunkte hinzuzufügen
function addExperiencePoints() {
    
}

// Funktion, um Erfahrungspunkte abzuziehen basierend auf den Werten
function subtractExperiencePoints() {
    var experience = parseInt(document.getElementById("experience").value);
    var pointsToSubtract = 0;
    
    // Hier prüfen wir, welche Werte erhöht oder verringert werden und ziehen die Punkte entsprechend ab
    var strength = parseInt(document.getElementById("strength").value);
    if (strength > 0) {
        pointsToSubtract += strength * 2;
    }

    var dexterity = parseInt(document.getElementById("dexterity").value);
    if (dexterity > 0) {
        pointsToSubtract += dexterity * 2;
    }

    var intelligence = parseInt(document.getElementById("intelligence").value);
    if (intelligence > 0) {
        pointsToSubtract += intelligence * 2;
    }

    var perception = parseInt(document.getElementById("perception").value);
    if (perception > 0) {
        pointsToSubtract += perception * 2;
    }

    var charisma = parseInt(document.getElementById("charisma").value);
    if (charisma > 0) {
        pointsToSubtract += charisma * 2;
    }

    experience -= pointsToSubtract;
    // Verhindern, dass Erfahrungspunkte unter 0 gehen
    experience = Math.max(0, experience);
    document.getElementById("experience").value = experience;
}

// Funktion zum Speichern der Daten in einer Textdatei
function saveToFile() {
    var data = {
        strength: document.getElementById("strength").value,
        dexterity: document.getElementById("dexterity").value,
        intelligence: document.getElementById("intelligence").value,
        perception: document.getElementById("perception").value,
        charisma: document.getElementById("charisma").value,
        experience: document.getElementById("experience").value
    };

    var jsonData = JSON.stringify(data);
    var blob = new Blob([jsonData], { type: "application/json" });

    // Erzeuge einen Blob-URL für die Daten
    var url = window.URL.createObjectURL(blob);

    // Erzeuge einen <a> Link
    var a = document.createElement("a");
    a.href = url;
    a.download = "character_data.json";

    // Füge den Link zum Dokument hinzu
    document.body.appendChild(a);

    // Klicke auf den Link, um den Download auszulösen
    a.click();

    // Entferne den Link aus dem Dokument
    document.body.removeChild(a);

    // Entferne den Blob-URL, um Speicher zu sparen
    window.URL.revokeObjectURL(url);
}

// Funktion zum Laden der Daten aus einer Textdatei
function loadFromFile(event) {
    var input = event.target;
    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function() {
        var jsonData = reader.result;
        var data = JSON.parse(jsonData);

        // Setze die Werte in die Eingabefelder zurück
        document.getElementById("strength").value = data.strength;
        document.getElementById("dexterity").value = data.dexterity;
        document.getElementById("intelligence").value = data.intelligence;
        document.getElementById("perception").value = data.perception;
        document.getElementById("charisma").value = data.charisma;
        document.getElementById("experience").value = data.experience;
    };

    reader.readAsText(file);
}

// Füge Event-Listener zu den Speichern- und Laden-Buttons hinzu
document.getElementById("saveButton").addEventListener("click", saveToFile);
document.getElementById("loadButton").addEventListener("change", loadFromFile);

