var rovers = [
    {
        name:'MARS ROVER',
        desc:'Multi Terrain',
        price:45
    },
    {
        name:'MARS ROVER',
        desc:'Multi Terrain',
        price:45
    },
    {
        name:'MARS ROVER',
        desc:'Multi Terrain',
        price:45
    },
    {
        name:'MARS ROVER',
        desc:'Multi Terrain',
        price:45
    },
]

function display_info(i){
    let data = rovers[i];
    var com = document.getElementsByClassName("info-container");
    let content = `
        <label>${data.name}</label>
        <p>${data.desc}</p>
        <p>Price: ${data.price} per hour</p>
        <button type="button" id="add">ADD TO CART</button>
    `
    com[i].innerHTML = content;
    var main = document.getElementsByClassName("rover-container");
    var img = document.getElementsByClassName("image-container");
    document.getElementsByTagName('img')[i + 1].style.width = '255px';
    document.getElementsByTagName('img')[i + 1].style.height = '255px';
    main[i].style.width = '255px';
    // main[i].style.height = '374px'
    img[i].style.width = '255px';
    img[i].style.height = '255px';
}

function nodisplay(i){
    var com = document.getElementsByClassName("info-container");
    var data = rovers[i];
    let con = `
    <label>${data.name}<label>`
    com[i].innerHTML = "";
    com[i].innerHTML = con;
    var main = document.getElementsByClassName("rover-container");
    var img = document.getElementsByClassName("image-container");
    document.getElementsByTagName('img')[i + 1].style.width = '225px';
    document.getElementsByTagName('img')[i + 1].style.height = '225px';
    main[i].style.width = '225px';
    // main[i].style.height = '244px'
    img[i].style.width = '225px';
    img[i].style.height = '225px';
}