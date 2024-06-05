let message;
let imgSrc;
let radioTags = document.getElementsByTagName('input');
let flag = 1;
let count = 0;
let myWindow;
let closeBtn;
let pText;
let cookieObj = {}

if (window.location.pathname.includes('index.html')) {
    document.getElementsByClassName('btn')[0].addEventListener('click', function () {
        for (let i = 0; i < radioTags.length && flag; i++) {
            if (radioTags[i].checked) {
                flag = 0
                count = i
            }
        }
        imgSrc = 'imgSrc=' + document.querySelector('[for=' + radioTags[count].id + ']').firstElementChild.getAttribute('src')
        pText = document.getElementById('textarea').value
        myWindow = window.open("card.html", '_blank', "width=700,height=1000")
        document.cookie = 'imgSrc=' + document.querySelector('[for=' + radioTags[count].id + ']').firstElementChild.getAttribute('src')
        document.cookie = 'pText=' + pText
    })
}


if (window.location.pathname.includes('card.html')) {
    let cookieArray = document.cookie.split('; ')

    for (let i = 0; i < cookieArray.length; i++) {
        cookieObj[(cookieArray[i].split('=')[0])] = (cookieArray[i].split('='))[1]
    }
    document.getElementById('img').setAttribute('src', cookieObj.imgSrc)
    document.getElementsByTagName('p')[0].textContent = cookieObj.pText
    closeBtn = document.getElementById('closeBtn').addEventListener('click', function () {
        close(myWindow)
    })
}