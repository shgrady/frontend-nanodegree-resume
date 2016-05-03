/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name" : "Sarah Hodson Grady",
	"role" : "Health IT Project Manager",
	"age" : 33
};

var name = "Sarah Hodson Grady";
var role = "Health IT Project Manager";
var skills = ["humility" , "risk management", "on-time-delivery" , "clincal and technological empathy" , "regulatory compliance"];

var formattedName = HTMLheaderName.replace("%data%", name);
 
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(skills[0]);
$("#main").append(bio.age);
