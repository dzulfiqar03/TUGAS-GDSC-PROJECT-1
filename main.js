var modal = document.getElementById("container")

let data = '{"movie" : [' +
    '{"title":"titanic","container":"77/10","genre":Action"}]}' ;
    '{"title":"titanic","container":"77/10","genre":Action"}]}' ;
    '{"title":"Maleficent","container":"77/10","genre":Action"}]}';
    '{"title":"Avatar","container":"7.8/10","genre":Action,Adventure"}]}';
    '{"title":"Avengers : Endgame","container":"8.4/10","genre":Action"}]}';
    '{"title":"Avengers : Infinity War","container":"8.4/10","genre":Action"}]}';
    '{"title":"Spiderman : Far From Home","container":"7.4/10","genre":Action"}]}';
    '{"title":"Spiderman : Home Coming","container":"7.4/10","genre":Action"}]}';
const obj = JSON.parse(data);
window.onclick = function(event){

    if (event.target == document.getElementById("container")){
        document.getElementById("container").style.display ="none"
    }
}
function closemodal(){
    document.getElementById("container").style.display ="none"
}
function titanic(){
    document.getElementById("container").style.display = "none";
 document.getElementById("title").innerHTML = obj.movie[0].title;
    document.getElementById("review").innerHTML = obj.movie[0].description;
    document.getElementById("rating").innerHTML = obj.movie[0].rating;
    document.getElementById("genre").innerHTML = obj.movie[0].genre;

}
function h(){
    document.getElementById("container").style.display = "none";
 document.getElementById("title").innerHTML = obj.movie[1].title;
    document.getElementById("review").innerHTML = obj.movie[1].description;
    document.getElementById("rating").innerHTML = obj.movie[1].rating;
    document.getElementById("genre").innerHTML = obj.movie[1].genre;

}
function Maleficent(){
    document.getElementById("container").style.display = "none";
 document.getElementById("title").innerHTML = obj.movie[2].title;
    document.getElementById("review").innerHTML = obj.movie[2].description;
    document.getElementById("rating").innerHTML = obj.movie[2].rating;
    document.getElementById("genre").innerHTML = obj.movie[2].genre;
}
function Avatar(){
    document.getElementById("container").style.display = "none";
 document.getElementById("title").innerHTML = obj.movie[3].title;
    document.getElementById("review").innerHTML = obj.movie[3].description;
    document.getElementById("rating").innerHTML = obj.movie[3].rating;
    document.getElementById("genre").innerHTML = obj.movie[3].genre;
}
function Endgame(){
    document.getElementById("container").style.display = "none";
 document.getElementById("title").innerHTML = obj.movie[4].title;
    document.getElementById("review").innerHTML = obj.movie[4].description;
    document.getElementById("rating").innerHTML = obj.movie[4].rating;
    document.getElementById("genre").innerHTML = obj.movie[4].genre;
}
function InfinityWar(){
    document.getElementById("container").style.display = "none";
 document.getElementById("title").innerHTML = obj.movie[5].title;
    document.getElementById("review").innerHTML = obj.movie[5].description;
    document.getElementById("rating").innerHTML = obj.movie[5].rating;
    document.getElementById("genre").innerHTML = obj.movie[5].genre;
}
function farfromHome(){
    document.getElementById("container").style.display = "none";
 document.getElementById("title").innerHTML = obj.movie[6].title;
    document.getElementById("review").innerHTML = obj.movie[6].description;
    document.getElementById("rating").innerHTML = obj.movie[6].rating;
    document.getElementById("genre").innerHTML = obj.movie[6].genre;
}
function homeComing(){
    document.getElementById("container").style.display = "none";
 document.getElementById("title").innerHTML = obj.movie[7].title;
    document.getElementById("review").innerHTML = obj.movie[7].description;
    document.getElementById("rating").innerHTML = obj.movie[7].rating;
    document.getElementById("genre").innerHTML = obj.movie[7].genre;
}


var login = new clicks();

function mulaiSubmit (){
    var submit = document.getElementById("submit");
    submit.addEventListener('click', fsubmit);

    function fsubmit(){
        submit.loop=true;
        if(submit){
           
           onclick =  alert("  \t \t \t \t \t \t >>>SUKSES<<<");
           
window.location ="Movie Page.html";
            
        }
      else if(submit!=valueuser) {
                onclick = alert("  \t \t \t \t \t \t >>>GAGAL<<<") 
            }
    }
    document.getElementById("submit").innerHTML = (fsubmit());
}