class logoChars {
    constructor(logoChars) {
        //checks to see if there are more than 3 characters entered
        if (logoChars.length > 3) {
            throw new Error('Only 3 characters allowed for logo.');
        }
    }
}


function renderShape(logoShape) {
    switch(logoShape) {
        case "Triangle":
            shape = Triangle;
            break;
        case "Square":
            shape = Square;
            break;
        case "Circle":
            shape = Circle;
            break;
    }
}


//This function writes markdown for the SVG
function generageSVG(data) {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300 height="200">
        ${data.shape}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.color}">${logoChars}</text>
    </svg>`;
}

module.exports = generageSVG;
module.exports = logoChars;