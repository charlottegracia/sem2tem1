function showCykeltur() {
    document.getElementById('vandretur').style.display = 'none';
    document.getElementById('cykeltur').style.display = 'block';
}

function showVandretur() {
    document.getElementById('vandretur').style.display = 'block';
    document.getElementById('cykeltur').style.display = 'none';
}

function mulbjergInfo() {
    document.getElementById('startside').style.display = 'none';
    document.getElementById('engelskStartside').style.display = 'none';
    document.getElementById('mulbjerge').style.display = 'block';
    document.getElementById('pil').style.display = 'block';
}

function poulstrupInfo() {
    document.getElementById('startside').style.display = 'none';
    document.getElementById('engelskStartside').style.display = 'none';
    document.getElementById('poulstrup').style.display = 'block';
    document.getElementById('pil').style.display = 'block';
}

function egholmInfo() {
    document.getElementById('startside').style.display = 'none';
    document.getElementById('engelskStartside').style.display = 'none';
    document.getElementById('egholm').style.display = 'block';
    document.getElementById('pil').style.display = 'block';
}

function oesteraadalenNordInfo() {
    document.getElementById('startside').style.display = 'none';
    document.getElementById('engelskStartside').style.display = 'none';
    document.getElementById('oesteraadalenNord').style.display = 'block';
    document.getElementById('pil').style.display = 'block';
}

function oesteraadalenSydInfo() {
    document.getElementById('startside').style.display = 'none';
    document.getElementById('engelskStartside').style.display = 'none';
    document.getElementById('oesteraadalenSyd').style.display = 'block';
    document.getElementById('pil').style.display = 'block';
}

function bjergbanestienInfo() {
    document.getElementById('startside').style.display = 'none';
    document.getElementById('engelskStartside').style.display = 'none';
    document.getElementById('bjergbanestien').style.display = 'block';
    document.getElementById('pil').style.display = 'block';
}

function tilbageTilStartside() {
    document.getElementById('pil').style.display = 'none';
    document.getElementById('mulbjerge').style.display = 'none';
    document.getElementById('poulstrup').style.display = 'none';
    document.getElementById('egholm').style.display = 'none';
    document.getElementById('oesteraadalenNord').style.display = 'none';
    document.getElementById('oesteraadalenSyd').style.display = 'none';
    document.getElementById('bjergbanestien').style.display = 'none';
    document.getElementById('engelskStartside').style.display = 'none';
    document.getElementById('startside').style.display = 'block';
}

function skiftSprog() {
    document.getElementById('startside').style.display = 'none';
    document.getElementById('pil').style.display = 'none';
    document.getElementById('mulbjerge').style.display = 'none';
    document.getElementById('poulstrup').style.display = 'none';
    document.getElementById('egholm').style.display = 'none';
    document.getElementById('oesteraadalenNord').style.display = 'none';
    document.getElementById('oesteraadalenSyd').style.display = 'none';
    document.getElementById('bjergbanestien').style.display = 'none';
    document.getElementById('engelskStartside').style.display = 'none';
    document.getElementById('engelskStartside').style.display = 'block';
}