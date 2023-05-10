// DOM manipulation: Write a function that selects all the <p> elements on a page and changes their text color to red.

const makeParagraphsRed = function() {
    const paragraphs = document.querySelectorAll('p')
    paragraphs.forEach(p => p.setAttribute('style', 'color:red'))
}

makeParagraphsRed()