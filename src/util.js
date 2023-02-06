export function isMobile() {
    console.log(window.innerWidth);
    return (window.innerWidth <= 800);
}

export function getRandomInt(max){
    return Math.floor(Math.random() * max)
}