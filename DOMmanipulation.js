const makeParagraphsRed = function() {
    const paragraphs = document.querySelectorAll('p')
    paragraphs.forEach(p => p.setAttribute('style', 'color:red'))
}

makeParagraphsRed()