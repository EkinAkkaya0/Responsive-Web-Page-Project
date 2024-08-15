//contact us jQuery ui widget
$( "#birthday" ).datepicker();

//cities jQuery plugin
var city = [
    "ADANA",
    "ADIYAMAN",
    "AFYONKARAHİSAR",
	"AĞRI",
	"AMASYA",
    "ANKARA",
    "ANTALYA",
	"ARTVİN",
    "AYDIN",
    "BALIKESİR",
    "BİLECİK",
	"BİNGÖL",
	"BİTLİS",
    "BOLU",
    "BURDUR",
    "BURSA",
	"ÇANAKKALE",
	"ÇANKIRI",
    "ÇORUM",
    "DENİZLİ",
	"DİYARBAKIR",
    "EDİRNE",
    "ELAZIĞ",
    "ERZİNCAN",
	"ERZURUM",
	"ESKİŞEHİR",
    "GAZİANTEP",
    "GİRESUN",
    "GÜMÜŞHANE",
	"HAKKARİ",
	"HATAY",
    "ISPARTA",
    "MERSİN",
	"İSTANBUL",
    "İZMİR",
    "KARS",
    "KASTAMONU",
	"KAYSERİ",
	"KIRKLARELİ",
    "KIRŞEHİR",
    "KOCAELİ",
    "KONYA",
	"KÜTAHYA",
	"MALATYA",
    "MANİSA",
    "KAHRAMANMARAŞ",
	"MARDİN",
    "MUĞLA",
    "MUŞ",
    "NEVŞEHİR",
	"NİĞDE",
	"ORDU",
    "RİZE",
    "SAKARYA",
    "SAMSUN",
	"SİİRT",
	"SİNOP",
    "SİVAS",
    "TEKİRDAĞ",
	"TOKAT",
    "TRABZON",
    "TUNCELİ",
    "ŞANLIURFA",
	"UŞAK",
	"VAN",
    "YOZGAT",
    "ZONGULDAK",
    "AKSARAY",
	"BAYBURT",
	"KARAMAN",
    "KIRIKKALE",
    "BATMAN",
	"ŞIRNAK",
    "BARTIN",
    "ARDAHAN",
    "IĞDIR",
	"YALOVA",
	"KARABÜK",
    "KİLİS",
	"OSMANİYE",
	"DÜZCE",//fffff
    "PARIS",
    "NEW YORK CITY",
	"LONDON",
    "BANGKOK",
    "HONG KONG",
    "DUBAI",
	"SINGAPORE",
	"ROME",
    "MACAU",
    "KUALA LUMPUR",
    "DELHI",
	"TOKYO",
	"MEXICO CITY",
    "MOSCOW",
    "PORTO",
	"SAN FRANCISCO",
    "BEIJING",
    "LOS ANGELES",
    "CHIKAGO",
	"BARCELONA",
	"ABU DHABI",
    "AMSTERDAM",
    "MADRID",
    "SYDNEY",
    "SAN MIGUEL DE ALLENDE",
    "LISBON",
    "VIENNA",
    "JERUSALEM",
    "PRAGUE",
    "BERLIN",
    "MUNICH",
    "WASHINGTON DC",
    "BRUSSELS",
    "TEL AVIV",
    "RIO DE JANEIRO",
    "VENICE",
    "BUDAPEST"
];

//auto complete cities jQuery plugin
$( "#city" ).autocomplete({
    source: city });

//qQjuery plugin to make h1's blue
$.fn.greenify = function() {
    this.css( "color", "#2f2a8c" );
};   
$( "h1" ).greenify();

//jQuery plugin that shows remaining characters for textbox
$('textarea').keypress(function(e) {
    var tval = $('textarea').val(),
        tlength = tval.length,
        set = 512,
        remain = parseInt(set - tlength);
    $('p.remaining-char').text(remain);
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('textarea').val((tval).substring(0, tlength - 1));
        return false;
    }
})

//jQuery ui widget index information dialog
$( function() {
    $( "#dialog" ).dialog();
} );

//AJAX request load form text autoload with ready
$(document).ready(function(){
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("presidents").innerHTML = this.responseText;
        }
    xhttp.open("GET", "presidents.txt", true);
    xhttp.send();
        
});

//AJAX request load form text loads with button
function loadSlo1() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("slogan1").innerHTML = this.responseText;
        }
    xhttp.open("GET", "slogan1.txt", true);
    xhttp.send();
}

//AJAX request from website to events
var url =
"http://api.flickr.com/services/feeds/photos_public.gne?" +
"format=json&jsoncallback=?&tags=waterfall,yosemite";
$.getJSON(url, function(data){
 var html = "";
 $.each(data.items, function(i, item){
 html += "<h2>" + item.title + "</h2>";
 html += "<img src=" + item.media.m + ">";
 html += "<p></p>";
 });
 $("#photos").html(html);
});