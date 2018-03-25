namespace Portfolio {
    
//Objekt Interface
    
interface Portfolio{
    img : string;
    art : string;
    }
//Objekte initialisieren
    
var pic1 : Portfolio = {
    img : "Aufg13_Blau.JPG",
    art : "Architektur",  
    }
var pic2 : Portfolio = {
    img : "Aufg13_Fliesen3.jpg",
    art : "Geschichte", 
    }
var pic3 : Portfolio = {
    img : "Aufg13_Kreis.JPG",
    art : "Architektur",   
    }
var pic4 : Portfolio = {
    img : "Aufg13_Laterne2.jpg", 
    art : "Architektur",  
    }
var pic5 : Portfolio = {
    img : "Aufg13_Papageien.JPG",   
    art : "Natur",
    }
var pic6 : Portfolio = {
    img : "Aufg13_Rose.JPG", 
    art : "Natur",  
    }
var pic7 : Portfolio = {
    img : "Aufg13_Schild2.jpg",
    art : "Geschichte",   
    }
var pic8 : Portfolio = {
    img : "Aufg13_Stadion.JPG",  
    art : "Architektur", 
    }
var pic9 : Portfolio = {
    img : "Aufg13_Statue3.jpg",
    art : "Kunst",   
    }
var pic10 : Portfolio = {
    img : "Aufg13_Statue4.jpg",
    art : "Kunst",   
    }
var pic11 : Portfolio = {
    img : "Aufg13_Treppen2.jpg",
    art : "Architektur",   
    }
var pic12 : Portfolio = {
    img : "Aufg13_Zapfen2.jpg", 
    art : "Natur",  
    }
var pic13 : Portfolio = {
    img : "Aufg13_Baum3.jpg",
    art : "Natur",   
    }
var pic14 : Portfolio = {
    img : "Aufg13_Heidelberg2.jpg",
    art : "Architektur",   
    }
var pic15 : Portfolio = {
    img : "Aufg13_Herzogstand2.jpg",
    art : "Natur",   
    }  
var pic16 : Portfolio = {
    img : "Aufg13_Dom2.jpg",
    art : "Architektur",   
    }  

//Array
    
var pics : Portfolio [] = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16];

//Dynamische Inhaltserzeugungung
    
function writeHTML () : void {
    var node : any = document.getElementById("content");
    var childNodeHTML : string;
    var i : number = 0;
        
        
while (i < pics.length){
                
    childNodeHTML = "<div class='container'>";
    childNodeHTML += "<img class='image' src=../../Images/";
    childNodeHTML += pics[i].img;
    childNodeHTML += ">";
    childNodeHTML += "</div>";
                
    node.innerHTML += childNodeHTML;
    
    i++;
           }     
    }
    
//Filter    
    
    function filterByArt (art:string) : void {
        var i : number = 0;
        
        while (i < pics.length){
            var node : any = document.getElementById ("art" + i);
            
            if (pics[i].art != art && art != "all"){
                node.style.display = "none";
                }
            else {
                node.style.display = "initial";
                }
        i++;
       }
      }

//Ausgabe
function main () : void {
    
    writeHTML ();
    
    document.getElementById("Filter1").addEventListener ('click', function (){
        filterByArt("Architektur");
        });
    document.getElementById("Filter2").addEventListener ('click', function (){
        filterByArt("Kunst");
        });
    document.getElementById("Filter3").addEventListener ('click', function (){
        filterByArt("Natur");
        });
    document.getElementById("Filter4").addEventListener ('click', function (){
        filterByArt("Geschichte");
        });
    }
        document.addEventListener('DOMContentLoaded', writeHTML);
}