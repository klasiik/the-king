var body = TK.tag("body")[0];

//LEVEL 1
//body children
var header = TK.create("header");
TK.append(body, header);

var nav = TK.create("nav");
TK.append(body, nav);
nav.className = "site-menu";

var content = TK.create("div");
TK.append(body, content);
content.className = "site-content";

//LEVEL 2
//header children

var h1 = TK.create("h1");
TK.append(header, h1);
h1.id = "heading";
h1.innerHTML = "KLASIIK";

//nav children

var navH2 = TK.create("h2");
TK.append(nav, navH2);
//append(do czego, co)
navH2.innerHTML = "MENU";

var navList = TK.create("ul");
TK.append(nav, navList);

//content children

var about = TK.create("div");
TK.append(content, about);

var discography = TK.create("div");
TK.append(content, discography);

var video = TK.create("div");
TK.append(content, video);

var gallery = TK.create("div");
TK.append(content, gallery);

var form = TK.create("form");
TK.append(content, form);

//LEVEL 3
//ul childern
var menuStrings = ["ABOUT", "DISCOGRAPHY", "VIDEO", "GALLERY", "CONTACT"]
var menuAttributes = ["#about", "#disco", "#video", "#gallery", "#contact"]

for (var i = 0; i < menuStrings.length; i++)
{
	var listItem = TK.create("li");
  TK.append(navList, listItem);
//LEVEL 4 listItem children
	var listLink = TK.create("a");
  TK.append(listItem, listLink);
	listLink.setAttribute("href", menuAttributes[i]);
	listLink.innerHTML = menuStrings[i];
}

//about children
var aboutH2 = TK.create("h2");
TK.append(about, aboutH2);

var aboutParagraph = TK.create("p");
TK.append(about, aboutParagraph);
aboutParagraph.innerHTML = "Klasiik is the best rapper alive. He fucks bitches and kills rappers. I should write something more so the text is longer and it looks better, and this is what I am doing right now. Writing some shit which has no meaning whatsoever. You can say this paragraph is worthless and you would not be mistaken. It does not mean anything at all. It is just some jibberish. Fucking around with the letters, you know. But when it comes to Klasiik, there's not much more to say - HE DA KING."

//discography children
var discographyH2 = TK.create("h2");
TK.append(discography, discographyH2);

var discographyList = TK.create("ol");
TK.append(discography, discographyList);

//video children
var videoH2 = TK.create("h2");
TK.append(video, videoH2);

var videoTable = TK.create("table");
TK.append(video, videoTable);

//gallery children
var galleryH2 = TK.create("h2");
TK.append(gallery, galleryH2);

var galleryTable = TK.create("table");
TK.append(gallery, galleryTable);

//form children

var formH2 = TK.create("h2");
TK.append(form, formH2);

var formDivNameLabel = TK.create("div");
TK.append(form, formDivNameLabel);

var formDivNameInput = TK.create("div");
TK.append(form, formDivNameInput);

var formDivMailLabel = TK.create("div");
TK.append(form, formDivMailLabel);

var formDivMailInput = TK.create("div");
TK.append(form, formDivMailInput);

var formDivContentLabel = TK.create("div");
TK.append(form, formDivContentLabel);

var formDivContentInput  = TK.create("div");
TK.append(form, formDivContentInput);

var formDivSumbit = TK.create("div");
TK.append(form, formDivSumbit);

//LEVEL 4
//aboutH2 child
var aboutAId = TK.create("a");
TK.append(aboutH2, aboutAId);
aboutAId.id = "about";
aboutAId.innerHTML = "ABOUT";

//discographyH2 child
var discographyAId = TK.create("a");
TK.append(discographyH2, discographyAId);
discographyAId.id = "disco";
discographyAId.innerHTML = "DISCOGRAPHY";

//videoH2 child
var videoAId = TK.create("a");
TK.append(videoH2, videoAId);
videoAId.id = "video";
videoAId.innerHTML = "VIDEO";

//galleryh2 child
var galleryAId = TK.create("a");
TK.append(galleryH2, galleryAId);
galleryAId.id = "gallery";
galleryAId.innerHTML = "GALLERY";

//formH2 child
var formAId = TK.create("a");
TK.append(formH2, formAId);
formAId.id = "contact";
formAId.innerHTML = "CONTACT";

//discographyList children
var discographyStrings = ["[2004] Powrót Piora EP", "[2005] Domino EP", "[2006] Hiobowe Wieści MIXTAPE", "[2009] dopuszczający MIXTAPE", "[2010] Liceum Ogólnokształcące", "[2011] Maxisingle #1: Jak się czujesz? / Błędne koło", "[2013] Hip Hop Kemp 2013 Bootleg", "[2015] Tragiczny MIXTAPE"]

for (var i=0; i<discographyStrings.length; i++)
{
	var discoListItem = TK.create("li");
  TK.append(discographyList, discoListItem);
	discoListItem.innerHTML = discographyStrings[i];
}

var lastLi = discographyList.lastChild;
var mxtpRelDate = TK.create("strong");
TK.append(lastLi, mxtpRelDate);
mxtpRelDate.innerHTML = " WIOSNA/LATO 2015";

//videoTable children
var filmLinks = ["https://www.youtube.com/embed/dn36Hxs2GlE", "https://www.youtube.com/embed/cNX5tSJdt48", "https://www.youtube.com/embed/3GJ1naLsQ7E", "https://www.youtube.com/embed/Fjdmqr5KixA", "https://www.youtube.com/embed/ePciNhUfHNk", "https://www.youtube.com/embed/nyTltqYCXHY"]
var k = 0;
for (var i=1; i<4; i++)
	{
		var row = TK.create("tr");
    TK.append(videoTable, row);
		//LEVEL 6
		for (var j=1; j<3; j++)
		{
			var col = TK.create("td");
      TK.append(row, col);
			//LEVEL 7
			var film = TK.create("iframe");
      TK.append(col, film);
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
	var row = TK.create("tr");
  TK.append(galleryTable, row);
	//LEVEL 6
	for (var j=1; j<3; j++)
	{
		var col = TK.create("td");
    TK.append(row, col);
		//LEVEL 7
		var colA = TK.create("a");
    TK.append(col, colA);
		colA.setAttribute("href", "gfx/" + imgNo + ".jpg")
		//LEVEL 8
		var colImg = TK.create("img");
    TK.append(colA, colImg);
		colImg.setAttribute("src", "gfx/" + imgNo + ".jpg");
		colImg.setAttribute("alt", imgAlts[imgAltNo]);
		imgAltNo = imgAltNo + 1;
		imgNo = imgNo + 1;
	}
}
//formDiv* children

var formNameLabel = TK.create("label");
TK.append(formDivNameLabel, formNameLabel);
formNameLabel.setAttribute("for", "name");
formNameLabel.innerHTML = "YOUR PUSSY ASS NAME"

var formNameInput = TK.create("input");
TK.append(formDivNameInput, formNameInput);
formNameInput.setAttribute("type", "text");
formNameInput.id = "name";
formNameInput.setAttribute("name", "name");

var formMailLabel = TK.create("label");
TK.append(formDivMailLabel, formMailLabel);
formMailLabel.setAttribute("for", "user-email");
formMailLabel.innerHTML = "YOUR BITCHASS E-MALE A DRESS"

var formMailInput = TK.create("input");
TK.append(formDivMailInput, formMailInput);
formMailInput.setAttribute("type", "email");
formMailInput.id = "user-email";
formMailInput.setAttribute("name", "user-email");
formMailInput.setAttribute("placeholder", "elo@kurwa.hg");
formMailInput.required = true;

var formContentLabel = TK.create("label");
TK.append(formDivContentLabel, formContentLabel);
formContentLabel.setAttribute("for", "content");
formContentLabel.innerHTML = "YOUR WHINE:"

var formContentInput = TK.create("textarea");
TK.append(formDivContentInput, formContentInput);
formContentInput.setAttribute("rows", 10);
formContentInput.setAttribute("cols", 50);
formContentInput.id = "content";
formContentInput.setAttribute("name", "content");
formContentInput.setAttribute("placeholder", "Tell me your gay thoughts you fag!");

var formSubmit = TK.create("input");
TK.append(formDivSumbit, formSubmit);
formSubmit.setAttribute("type", "submit");
formSubmit.setAttribute("value", "SEND THAT SHIT!")
