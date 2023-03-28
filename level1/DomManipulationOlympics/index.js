function createHeader(){
    var h = document.createElement("HEADER");
    document.body.appendChild(h);
    var h2 = document.createElement(h2);
    var txt = document.createTextNode("This is our new header");
    h2.appendChild(txt);
    h.appendChild(h2);
}