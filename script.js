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

function save()
{
	php = parseInt(health.value);
    pdef = parseInt(defense.value);
    patt = parseInt(attack.value);
    pstr = parseInt(strength.value);
    pdex = parseInt(dexterity.value);
    pint = parseInt(intelligence.value);
    pper = parseInt(perception.value);
    pcha = parseInt(charisma.value);
	console.log("Werte gespeichert");
}

function changed(oldv, newv, changeval) {
	console.log(oldv + " " + newv + " " + changeval);
	
	if(parseInt(newv) > parseInt(oldv)){
		xp.value = parseInt(xp.value)-parseInt(changeval);
	}
	else if(parseInt(newv) < parseInt(oldv)){
		xp.value = parseInt(xp.value)+parseInt(changeval);
	}
}
	