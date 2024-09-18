
const submitbtn = document.querySelector("button");
const textbox1 = document.getElementById("textbox1");
const textbox2 = document.getElementById("textbox2");
const textbox3 = document.getElementById("textbox3");
const textbox4 = document.getElementById("textbox4");
const textbox5 = document.getElementById("textbox5");
const textbox6 = document.getElementById("textbox6");
const suomivalitse = document.getElementById("suomivalitse");
const tulos1 = document.getElementById("tulos1");
const tulos2 = document.getElementById("tulos2");
const tulos3 = document.getElementById("tulos3");
const tulos4 = document.getElementById("tulos4");
const tulos5 = document.getElementById("tulos5");
const tulos6 = document.getElementById("tulos6");
const tulos7 = document.getElementById("tulos7");
const male = document.getElementById("male");
const female = document.getElementById("female");
const tulos8 = document.getElementById("tulos8");
const finnish = document.getElementById('finnish');
const other = document.getElementById('other');
const tulos9 = document.getElementById('tulos9');

submitbtn.onclick = function() {

    const value1 = textbox1.value.trim();
    const value2 = textbox2.value.trim();
    const value3 = textbox5.value.trim();
    const value4 = textbox6.value.trim();
    const value5 = textbox3.value.trim();
    const value6 = textbox4.value.trim();

    let virhe1 = "";
    let virhe2 = "";
    let virhe3 = "";
    let virhe4 = "";
    let virhe5 = "";
    let virhe6 = "";
    let virhe7 = "";
    let virhe8 = "";
    let virhe9 = "";


    if (value1 === "" || value1.length < 6) {
        virhe1 = "Käyttäjä-ID req : 6 merkkiä";
    }

    if (value2.length < 6 || 
        !/[A-Z]/.test(value2) || 
        !/\d/.test(value2) || 
        !/[!@#$%^&*]/.test(value2)) {
        virhe2 = "Salasana req : vähintään 6 merkkiä, 1 numero, 1 iso kirjain, erikoismerkki";
    }

    if (!/^\d{5}$/.test(value3)) {
        virhe3 = "Postinumeron täytyy olla 5 numeroa.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value4)) {
        virhe4 = "Sähköposti ei ole oikeassa muodossa.";
    }

    if(value5 === ""){
        virhe5 = "Täytä kenttä:";
    }

    if(value6 === ""){
        virhe6 = "Täytä kenttä:";
    }

    if(!suomivalitse.value){
        virhe7 = "Valitse maa";
    }

    if(!male.checked && !female.checked){
        virhe8 = "Valitse sukupuoli";
    }

    if (!finnish.checked && !other.checked){
        virhe9 = "Valitse kieli.";
    }

    tulos1.textContent = virhe1;
    tulos2.textContent = virhe2;
    tulos3.textContent = virhe3;
    tulos4.textContent = virhe4;
    tulos5.textContent = virhe5;
    tulos6.textContent = virhe6;
    tulos7.textContent = virhe7;
    tulos8.textContent = virhe8;
    tulos9.textContent = virhe9;
};





