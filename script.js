document.getElementById('changeColorsButton').addEventListener('click', changeColors);

function changeColors() {
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#1abc9c', '#f1c40f', '#e67e22', '#2ecc71'];
    
    const shirt = document.getElementById('shirt');
    const pants = document.getElementById('pants');
    const leftArm = document.querySelector('.left-arm');
    const rightArm = document.querySelector('.right-arm');
    const leftLeg = document.querySelector('.left-leg');
    const rightLeg = document.querySelector('.right-leg');

    const randomShirtColor = colors[Math.floor(Math.random() * colors.length)];
    const randomPantsColor = colors[Math.floor(Math.random() * colors.length)];

    shirt.style.backgroundColor = randomShirtColor;
    leftArm.style.backgroundColor = randomShirtColor;
    rightArm.style.backgroundColor = randomShirtColor;
    
    pants.style.backgroundColor = randomPantsColor;
    leftLeg.style.backgroundColor = randomPantsColor;
    rightLeg.style.backgroundColor = randomPantsColor;
}
