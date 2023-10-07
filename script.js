//elements
var xp = document.getElementById("experience"); 
var health = document.getElementById("health");
var defense = document.getElementById("defense");
var attack = document.getElementById("attack");
var strength = document.getElementById("strength");
var dexterity = document.getElementById("dexterity");
var intelligence = document.getElementById("intelligence");
var perception = document.getElementById("perception");
var charisma = document.getElementById("charisma");

//previous values
var php = 10;
var pdef = 0;
var patt = 0;
var pstr = 0;
var pdex = 0;
var pint = 0;
var pcha = 0;
var pper = 0;

health.addEventListener("change", function() {
    changed(php, health.value, 1);
});
defense.addEventListener("change", function() {
    changed(pdef, defense.value, 4);
});
attack.addEventListener("change", function() {
    changed(patt, attack.value, 4);
});
strength.addEventListener("change", function() {
    changed(pstr, strength.value, 2);
});
dexterity.addEventListener("change", function() {
    changed(pdex, dexterity.value, 2);
});
intelligence.addEventListener("change", function() {
    changed(pint, intelligence.value, 2);
});
perception.addEventListener("change", function() {
    changed(pper, perception.value, 2);
});
charisma.addEventListener("change", function() {
    changed(pcha, charisma.value, 2);
});

function saved()
{
	php = parseInt(health.value);
    pdef = parseInt(defense.value);
    patt = parseInt(attack.value);
    pstr = parseInt(strength.value);
    pdex = parseInt(dexterity.value);
    pint = parseInt(intelligence.value);
    pper = parseInt(perception.value);
    pcha = parseInt(charisma.value);
}

function changed(oldv, newv, changeval) {
	if(parseInt(newv) > parseInt(oldv)){
		xp.value = parseInt(xp.value)-parseInt(changeval);
	}
	else if(parseInt(newv) < parseInt(oldv)){
		xp.value = parseInt(xp.value)+parseInt(changeval);
	}
}

let saveFile = () => {
            // Get the data from each element on the form.
            const name = document.getElementById("name");
			const race = document.getElementById("race");
			const alignment = document.getElementById("alignment");
			
			const xp = document.getElementById("xp");
			
			const spab = document.getElementById("spab");
			const inv = document.getElementById("inv");
			const other = document.getElementById("other");

            // This variable stores all the data.
            let data = "name:" + name.value + "\r\nrace:" + race.value + "\r\nalignment:" + alignment.value + "\r\nxp:" + xp.value + "\r\nhp:" + health.value + "\r\ndef:" + defense.value + "\r\natt:" + attack.value + 
			"\r\nstr:" + strength.value + "\r\ndex:" + dexterity.value + "\r\nint:" + intelligence.value + "\r\nper:" + perception.value + "\r\ncha:" + charisma.value + 
			"\r\nab:" + spab.value + "\r\ninv:" + inv.value + "\r\nother:" + other.value;
			
            console.log(data); //printing form data into the console
            // Convert the text to BLOB.
            const textToBLOB = new Blob([data], { type: "text/plain" });
            var filename = new Date();
            var month =new Date(); //months from 1-12
            month = month.getMonth();

            var day = new Date();
            var day = day.getUTCDate();

            var year = new Date();
            var year = year.getUTCFullYear();

            newdate = year + "/" + month + "/" + day;
            const sFileName = filename; // The file to save the data.

            let newLink = document.createElement("a");
            newLink.download = "charakter " + newdate;

            if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            } else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
            }

            newLink.click();
        };
