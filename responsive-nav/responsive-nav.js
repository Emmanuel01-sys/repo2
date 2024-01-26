const nav = document.getElementsByTagName("nav")[0];
const navigation = ["home", "about", "services", "contact"];
let navString = `<ul>`;
for(let i = 0; i < navigation.length; i++) 
    navString +=`<li><a href=#"${navigation[i]}">${navigation[i].toUpperCase()}</a></li>`;

navString += '</ul>';
nav.innerHTML = navString;
