const cardObjDefinitions = [
    {id:1, imagePath: 'card-KingHearts.png'},
    {id:2, imagePath: 'card-JackClubs.png'},
    {id:3, imagePath: 'card-QueenDiamongs.png'},
    {id:4, imagePath: 'card-AceSpades'},
]
const cardBackImgPath = 'card-back-Blue.png'

function createCard (cardItem){
     const cardElmnts = document.createElement ('div')
     const cardInnerElmnts = document.createElement ('div')
     const cardFrontElmnts = document.createElement ('div')
     const cardBackElmnts = document.createElement ('div')


     const cardFrontImg = document.createElement ('img')
     const cardBackImg = document.createElement ('img')

     addClassToElements(cardElmnts, 'card')
     addIdToElements( cardElmnts, cardItem.id)


     addClassToElements(cardInnerElmnts, 'card-inner')

     addClassToElements(cardFrontElmnts, 'card-front')

     addClassToElements(cardBackElmnts, 'card-back')

     addSrcToImgElems(cardBackElmnts, cardBackImgPath )

     addSrcToImgElems(cardFrontElmnts, cardItem.imagePath)

     addClassToElements(cardBackElmnts, 'card-img')

     addClassToElements(cardFrontElmnts, 'card-img')

   
}

function createElement (elmntType){
    return document.createElement(elmntType)
}

function addClassToElements (elem, className){
    elem.classList.add (className)
}

function addIdToElement (elen, id){
    elem.id = id
}

addSrcToImgElems (imgElmts, src){
    imgElmts.scr = src
}