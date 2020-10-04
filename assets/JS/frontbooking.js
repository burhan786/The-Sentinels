var orders = JSON.parse(localStorage.getItem("orders") || "[]");
console.log("length of the orders:" , orders.length);
var count = 0;
var rovers = [
    {
        id:0,
        url:'./assets/Images/rover.jpg',
        name:'SPACE EXPLORER',
        desc:'Multi Terrain',
        price:70

    },
    {
        id:1,
        url:'./assets/Images/r.png',
        name:'VOYAGER',
        desc:'Multi Terrain',
        price:55

    },
    {
        id:2,
        url:'./assets/Images/r3.png',
        name:'TITAN',
        desc:'Multi Terrain',
        price:60
    },
    {
        id:3,
        url:'./assets/Images/r2.png',
        name:'BURNING COMET',
        desc:'Multi Terrain',
        price:80
    },
    {
        id:4,
        url:'./assets/Images/r4.png',
        name:'ANGEL STAR',
        desc:'Multi Terrain',
        price:45
    },
    {
        id:5,
        url:'./assets/Images/r5.png',
        name:'MARTIAN',
        desc:'Multi Terrain',
        price:50
    },]
function addtocart(id){
    console.log('id to be needed',id);
   let temp =  rovers.find((rover) => {
        if(rover.id === id){return rover;}
   });
    orders.push(temp);
    localStorage.setItem("orders", JSON.stringify(orders));
    if(count == 2){
        count = 0;
        window.alert('You can add only 2 cars to the cart');
   }else{
    count = count + 1;
   }
}


function display_Info(i){
    let data = rovers[i];
    var com = document.getElementsByClassName("info-container");
    let content = `
        <label>${data.name}</label>
        <p>${data.desc}</p>
        <p>Price: ${data.price} per hour</p>
        <button type="button" id="add" onclick="addtocart(${i})">ADD TO CART</button>
    `
    com[i].innerHTML = content;
    var main = document.getElementsByClassName("rover-container");
    var img = document.getElementsByClassName("image-container");
    document.getElementsByTagName('img')[i + 1].style.width = '125.2%';

    document.getElementsByTagName('img')[i + 1].style.height = '100%';
        main[i].style.width = '28%';

    // main[i].style.height = '374px
        img[i].style.width = '255px';

    img[i].style.height = '255px';
}

function Nodisplay(i){
    var com = document.getElementsByClassName("info-container");
    var data = rovers[i];
    let con = `
    <label>${data.name}<label>`
    com[i].innerHTML = "";
    com[i].innerHTML = con;
    var main = document.getElementsByClassName("rover-container");
    var img = document.getElementsByClassName("image-container");
    document.getElementsByTagName('img')[i + 1].style.width = '125%';
    document.getElementsByTagName('img')[i + 1].style.height = '100%';
    main[i].style.width = '24.7%';
    // main[i].style.height = '244px'
    img[i].style.width = '225px';
    img[i].style.height = '225px';
}