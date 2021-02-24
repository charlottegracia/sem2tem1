function showCykeltur() {
    document.getElementById('vandretur').style.display = 'none';
    document.getElementById('cykeltur').style.display = 'block';
}

function showCykelturEngelsk() {
    document.getElementById('vandreturEngelsk').style.display = 'none';
    document.getElementById('cykelturEngelsk').style.display = 'block';
}

function showVandretur() {
    document.getElementById('vandretur').style.display = 'block';
    document.getElementById('cykeltur').style.display = 'none';
}

function showVandreturEngelsk() {
    document.getElementById('vandreturEngelsk').style.display = 'block';
    document.getElementById('cykelturEngelsk').style.display = 'none';
}

function showMap() {
    document.getElementById('mulbjerge').style.display = 'none';
    document.getElementById('mulbjergeMap').style.display = 'block';
    document.getElementById('poulstrup').style.display = 'none';
    document.getElementById('egholm').style.display = 'none';
    document.getElementById('oesteraadalenNord').style.display = 'none';
    document.getElementById('oesteraadalenSyd').style.display = 'none';
    document.getElementById('bjergbanestien').style.display = 'none';
}

function mulbjergInfo() {
    removeTheStartside();
    document.getElementById('mulbjerge').style.display = 'block';
    document.getElementById('mulbjergeMap').style.display = 'none';
    showPil();
    scrollUp();
}

function poulstrupInfo() {
    removeTheStartside();
    document.getElementById('poulstrup').style.display = 'block';
    showPil();
    scrollUp();
}

function egholmInfo() {
    removeTheStartside();
    document.getElementById('egholm').style.display = 'block';
    showPil();
    scrollUp();
}

function oesteraadalenNordInfo() {
    removeTheStartside();
    document.getElementById('oesteraadalenNord').style.display = 'block';
    showPil();
    scrollUp();
}

function oesteraadalenSydInfo() {
    removeTheStartside();
    document.getElementById('oesteraadalenSyd').style.display = 'block';
    showPil();
    scrollUp();
}

function bjergbanestienInfo() {
    removeTheStartside();
    document.getElementById('bjergbanestien').style.display = 'block';
    showPil();
    scrollUp();
}

function tilbageTilStartside() {
    removeVandreruter();
    document.getElementById('engelskStartside').style.display = 'none';
    document.getElementById('startside').style.display = 'block';
    scrollUp();
}

function skiftSprog() {
    removeVandreruter();
    document.getElementById('startside').style.display = 'none';
    document.getElementById('engelskStartside').style.display = 'block';
    document.getElementById('vandreturEngelsk').style.display = 'block';
    document.getElementById('cykelturEngelsk').style.display = 'none';
    showPil();
    scrollUp();
}

function removeVandreruter() {
    document.getElementById('pil').style.display = 'none';
    document.getElementById('mulbjerge').style.display = 'none';
    document.getElementById('poulstrup').style.display = 'none';
    document.getElementById('egholm').style.display = 'none';
    document.getElementById('oesteraadalenNord').style.display = 'none';
    document.getElementById('oesteraadalenSyd').style.display = 'none';
    document.getElementById('bjergbanestien').style.display = 'none';
    document.getElementById('mulbjergeMap').style.display = 'none';
}

function showPil() {
    document.getElementById('pil').style.display = 'block';
}

function removeTheStartside() {
    document.getElementById('startside').style.display = 'none';
    document.getElementById('engelskStartside').style.display = 'none';
}

function scrollUp() {
    document.documentElement.scrollTop = 0;
}