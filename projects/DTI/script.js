function selectCharacter(base) {
    document.getElementById('base').src = base;
    document.getElementById('outfit').src = '';
}

function dressCharacter(outfit) {
    document.getElementById('outfit').src = outfit;
}
