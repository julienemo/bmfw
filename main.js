//pop-up after 10 secs presence
//pop-up with yes/no option : confirm
//redirection : window.location.replace('url')
//10 secs presence setTimeout(function(){blablabla},n*1000)
setTimeout(function()
 {
   if (confirm('!!!WOW!!!Le site xxxvidsxxx est TROP BIEN !!!\n Voulez-vous y allez ???'))
     {
       window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
     };
 }, 10000);


var myButton = document.getElementById("psy")

 function  modePsy(button) {
   var body = document.getElement("body");
   body.style.backgroundColor = "magenta";
   button.removeAttribute("disabled");
 }

myButton.onclick = function(){modePsy}

/* var myButton = document.querySelector('button');

/*bouton

p.style.color = 'blue';
h.stype.color = 'green';
p.syle.fontFamiliy = "papyrus";

h.stype.fontFamiliy = 'Comis Sans';*/
