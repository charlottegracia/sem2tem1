function showCykeltur() {
    document.getElementById('vandretur').style.display = 'none';
    document.getElementById('cykeltur').style.display = 'block';
}

function showVandretur() {
    document.getElementById('vandretur').style.display = 'block';
    document.getElementById('cykeltur').style.display = 'none';
}

function mulbjergInfo() {
    removeTheStartside();
    document.getElementById('mulbjerge').style.display = 'block';
    showPil();
}

function poulstrupInfo() {
    removeTheStartside();
    document.getElementById('poulstrup').style.display = 'block';
    showPil();
}

function egholmInfo() {
    removeTheStartside();
    document.getElementById('egholm').style.display = 'block';
    showPil();
}

function oesteraadalenNordInfo() {
    removeTheStartside();
    document.getElementById('oesteraadalenNord').style.display = 'block';
    showPil();
}

function oesteraadalenSydInfo() {
    removeTheStartside();
    document.getElementById('oesteraadalenSyd').style.display = 'block';
    showPil();
}

function bjergbanestienInfo() {
    removeTheStartside();
    document.getElementById('bjergbanestien').style.display = 'block';
    showPil();
}

function tilbageTilStartside() {
    removeVandreruter();
    document.getElementById('engelskStartside').style.display = 'none';
    document.getElementById('startside').style.display = 'block';
}

function skiftSprog() {
    removeVandreruter();
    document.getElementById('startside').style.display = 'none';
    document.getElementById('engelskStartside').style.display = 'block';
}

function removeVandreruter() {
    document.getElementById('pil').style.display = 'none';
    document.getElementById('mulbjerge').style.display = 'none';
    document.getElementById('poulstrup').style.display = 'none';
    document.getElementById('egholm').style.display = 'none';
    document.getElementById('oesteraadalenNord').style.display = 'none';
    document.getElementById('oesteraadalenSyd').style.display = 'none';
    document.getElementById('bjergbanestien').style.display = 'none';
}

function showPil() {
    document.getElementById('pil').style.display = 'block';
}

function removeTheStartside() {
    document.getElementById('startside').style.display = 'none';
    document.getElementById('engelskStartside').style.display = 'none';
}