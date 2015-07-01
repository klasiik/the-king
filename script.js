var body = document.getElementsByTagName("body");

//LEVEL 1
//body children
var header = document.createElement("header");
document.body.appendChild(header);

var nav = document.createElement("nav");
document.body.appendChild(nav);
nav.className = "site-menu";

var content = document.createElement("div");
document.body.appendChild(content);
content.className = "site-content";

//LEVEL 2
//header children

var h1 = document.createElement("h1");
header.appendChild(h1);
h1.id = "heading";
h1.innerHTML = "KLASIIK";

//nav children

var navH2 = document.createElement("h2");
nav.appendChild(navH2);
navH2.innerHTML = "MENU";

var navList = document.createElement("ul");
nav.appendChild(navList);

//content children

var about = document.createElement("div");
content.appendChild(about);

var discography = document.createElement("div");
content.appendChild(discography);

var video = document.createElement("div");
content.appendChild(video);

var gallery = document.createElement("div");
content.appendChild(gallery);

var form = document.createElement("form");
content.appendChild(form);

//LEVEL 3
//ul childern
var menuStrings = ["ABOUT", "DISCOGRAPHY", "VIDEO", "GALLERY", "CONTACT"]
var menuAttributes = ["#about", "#disco", "#video", "#gallery", "#contact"]

for (var i = 0; i < menuStrings.length; i++)
{
	var listItem = document.createElement("li");
	navList.appendChild(listItem);
//LEVEL 4 listItem children
	var listLink = document.createElement("a");
	listItem.appendChild(listLink);
	listLink.setAttribute("href", menuAttributes[i]);
	listLink.innerHTML = menuStrings[i];
}

//about children
var aboutH2 = document.createElement("h2");
about.appendChild(aboutH2);

var aboutParagraph = document.createElement("p");
about.appendChild(aboutParagraph);
aboutParagraph.innerHTML = "Klasiik is the best rapper alive. He fucks bitches and kills rappers. I should write something more so the text is longer and it looks better, and this is what I am doing right now. Writing some shit which has no meaning whatsoever. You can say this paragraph is worthless and you would not be mistaken. It does not mean anything at all. It is just some jibberish. Fucking around with the letters, you know. But when it comes to Klasiik, there's not much more to say - HE DA KING."

//discography children
var discographyH2 = document.createElement("h2");
discography.appendChild(discographyH2);

var discographyList = document.createElement("ol");
discography.appendChild(discographyList);

//video children
var videoH2 = document.createElement("h2");
video.appendChild(videoH2);

var videoTable = document.createElement("table");
video.appendChild(videoTable);

//gallery children
var galleryH2 = document.createElement("h2");
gallery.appendChild(galleryH2);

var galleryTable = document.createElement("table");
gallery.appendChild(galleryTable);

//form children

var formH2 = document.createElement("h2");
form.appendChild(formH2);

var formDivNameLabel = document.createElement("div");
form.appendChild(formDivNameLabel);

var formDivNameInput = document.createElement("div");
form.appendChild(formDivNameInput);

var formDivMailLabel = document.createElement("div");
form.appendChild(formDivMailLabel);

var formDivMailInput = document.createElement("div");
form.appendChild(formDivMailInput);

var formDivContentLabel = document.createElement("div");
form.appendChild(formDivContentLabel);

var formDivContentInput  = document.createElement("div");
form.appendChild(formDivContentInput);

var formDivSumbit = document.createElement("div");
form.appendChild(formDivSumbit);

//LEVEL 4
//aboutH2 child
var aboutAId = document.createElement("a");
aboutH2.appendChild(aboutAId);
aboutAId.id = "about";
aboutAId.innerHTML = "ABOUT";

//discographyH2 child
var discographyAId = document.createElement("a");
discographyH2.appendChild(discographyAId);
discographyAId.id = "disco";
discographyAId.innerHTML = "DISCOGRAPHY";

//videoH2 child
var videoAId = document.createElement("a");
videoH2.appendChild(videoAId);
videoAId.id = "video";
videoAId.innerHTML = "VIDEO";

//galleryh2 child
var galleryAId = document.createElement("a");
galleryH2.appendChild(galleryAId);
galleryAId.id = "gallery";
galleryAId.innerHTML = "GALLERY";

//formH2 child
var formAId = document.createElement("a");
formH2.appendChild(formAId);
formAId.id = "contact";
formAId.innerHTML = "CONTACT";

//discographyList children
var discographyStrings = ["[2004] Powrót Piora EP", "[2005] Domino EP", "[2006] Hiobowe Wieści MIXTAPE", "[2009] dopuszczający MIXTAPE", "[2010] Liceum Ogólnokształcące", "[2011] Maxisingle #1: Jak się czujesz? / Błędne koło", "[2013] Hip Hop Kemp 2013 Bootleg", "[2015] Tragiczny MIXTAPE"]

for (var i=0; i<discographyStrings.length; i++)
{
	var discoListItem = document.createElement("li");
	discographyList.appendChild(discoListItem);
	discoListItem.innerHTML = discographyStrings[i];
}

var lastLi = discographyList.lastChild;
var mxtpRelDate = document.createElement("strong");
lastLi.appendChild(mxtpRelDate);
mxtpRelDate.innerHTML = " WIOSNA/LATO 2015";

//videoTable children
var filmLinks = ["https://www.youtube.com/embed/dn36Hxs2GlE", "https://www.youtube.com/embed/cNX5tSJdt48", "https://www.youtube.com/embed/3GJ1naLsQ7E", "https://www.youtube.com/embed/Fjdmqr5KixA", "https://www.youtube.com/embed/ePciNhUfHNk", "https://www.youtube.com/embed/nyTltqYCXHY"]
var k = 0;
for (var i=1; i<4; i++)
	{
		var row = document.createElement("tr");
		videoTable.appendChild(row);
		//LEVEL 6
		for (var j=1; j<3; j++)
		{
			var col = document.createElement("td");
			row.appendChild(col);
			//LEVEL 7
			var film = document.createElement("iframe");
			col.appendChild(film);
			film.setAttribute("width", 280);
			film.setAttribute("height", 157);
			film.setAttribute("frameborder", 0);
			film.setAttribute("src", filmLinks[k]);
			k=k+1;
		}
	}

//galleryTable children
var imgNo = 1;
var imgAltNo = 0;
var imgAlts = ["KING KLASIIK", "KLASIIK THE KING", "KLASIIK KILLIN IT", "KLASIIK IS THE BEST"];
for (var i=1; i<3; i++)
{
	var row = document.createElement("tr");
	galleryTable.appendChild(row);
	//LEVEL 6
	for (var j=1; j<3; j++)
	{
		var col = document.createElement("td");
		row.appendChild(col);
		//LEVEL 7
		var colA = document.createElement("a");
		col.appendChild(colA);
		colA.setAttribute("href", "gfx/" + imgNo + ".jpg")
		//LEVEL 8
		var colImg = document.createElement("img");
		colA.appendChild(colImg);
		colImg.setAttribute("src", "gfx/" + imgNo + ".jpg");
		colImg.setAttribute("alt", imgAlts[imgAltNo]);
		imgAltNo = imgAltNo + 1;
		imgNo = imgNo + 1;
	}
}
//formDiv* children

var formNameLabel = document.createElement("label");
formDivNameLabel.appendChild(formNameLabel);
formNameLabel.setAttribute("for", "name");
formNameLabel.innerHTML = "YOUR PUSSY ASS NAME"

var formNameInput = document.createElement("input");
formDivNameInput.appendChild(formNameInput);
formNameInput.setAttribute("type", "text");
formNameInput.id = "name";
formNameInput.setAttribute("name", "name");

var formMailLabel = document.createElement("label");
formDivMailLabel.appendChild(formMailLabel);
formMailLabel.setAttribute("for", "user-email");
formMailLabel.innerHTML = "YOUR BITCHASS E-MALE A DRESS"

var formMailInput = document.createElement("input");
formDivMailInput.appendChild(formMailInput);
formMailInput.setAttribute("type", "email");
formMailInput.id = "user-email";
formMailInput.setAttribute("name", "user-email");
formMailInput.setAttribute("placeholder", "elo@kurwa.hg");
formMailInput.required = true;

var formContentLabel = document.createElement("label");
formDivContentLabel.appendChild(formContentLabel);
formContentLabel.setAttribute("for", "content");
formContentLabel.innerHTML = "YOUR WHINE:"

var formContentInput = document.createElement("textarea");
formDivContentInput.appendChild(formContentInput);
formContentInput.setAttribute("rows", 10);
formContentInput.setAttribute("cols", 50);
formContentInput.id = "content";
formContentInput.setAttribute("name", "content");
formContentInput.setAttribute("placeholder", "Tell me your gay thoughts you fag!");

var formSubmit = document.createElement("input");
formDivSumbit.appendChild(formSubmit);
formSubmit.setAttribute("type", "submit");
formSubmit.setAttribute("value", "SEND THAT SHIT!")
