

    function preloader() {
        const imagesList = [
           "./img/solar.jpg",
           "./img/wind.jpg",
           "./img/waves.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }


    };    
    window.addEventListener("load", preloader);
    



    
const controls = document.querySelectorAll(".controls button");
                


let container = document.querySelector(".container");
                
    
let buttons = [
    controls[0],
    controls[1],
    controls[2]
]; 


let content = [
    { //0
       heading: "Solar Power",
        bodyText: "Solar Power is a great source for renewable energy. some positives of renewable energy are vivamus sodales blandit vestibulum. Duis vitae luctus ipsum, non eleifend magna. Aliquam sed varius sem. Vivamus id pulvinar quam. Integer volutpat posuere ex, id dictum ipsum interdum sed. Cras iaculis lorem sapien, ac rhoncus velit condimentum in. Morbi ut felis pulvinar, cursus risus eget, malesuada arcu. Curabitur gravida interdum mi. In pharetra finibus lectus, non finibus urna pharetra nec. Ut vestibulum sapien justo, ac viverra libero luctus molestie.",
        thumbnail: "./img/solar.jpg",
        altd: "Solar Panels"
    },
    { //1
      heading: "Wind Energy",
        bodyText: "A wind turbine, or wind energy converter, is a device that converts the wind's kinetic energy into electrical energy ullamcorper felis nec gravida sodales. Nulla rutrum justo ac risus pellentesque condimentum. Vivamus sodales blandit vestibulum. Duis vitae luctus ipsum, non eleifend magna. Aliquam sed varius sem. Vivamus id pulvinar quam. Integer volutpat posuere ex, id dictum ipsum interdum sed. Cras iaculis lorem sapien, ac rhoncus velit condimentum in. Morbi ut felis pulvinar, cursus risus eget, malesuada arcu. Curabitur gravida interdum mi. In pharetra finibus lectus, non finibus urna pharetra nec. Ut vestibulum sapien justo, ac viverra libero luctus molestie.",
        thumbnail: "./img/wind.jpg",
        altd: "Wind Turbines"
    },
    {//2
        heading: "Tidal Power",
        bodyText: "Tidal power or tidal energy is harnessed by converting energy from tides into useful forms of power, mainly electricity using various methods. pellentesque condimentum. Vivamus sodales blandit vestibulum. Duis vitae luctus ipsum, non eleifend magna. Aliquam sed varius sem. Vivamus id pulvinar quam. Integer volutpat posuere ex, id dictum ipsum interdum sed. Cras iaculis lorem sapien, ac rhoncus velit condimentum in. Morbi ut felis pulvinar, cursus risus eget, malesuada arcu. Curabitur gravida interdum mi. In pharetra finibus lectus, non finibus urna pharetra nec. Ut vestibulum sapien justo, ac viverra libero luctus molestie.",
        thumbnail: "./img/waves.jpg",
        altd: "Tidal Waves"
    }
    
    
    
];

        
function clickButton(e){
    for (let i = 0; i < buttons.length; i++ ){
        if(controls[i].hasAttribute("id")){
              controls[i].removeAttribute("id");  
           }  
    } 

    let theButton = e.target;
        theButton.id = "active-button";
    
    let b = buttons.indexOf(theButton);
        container.innerHTML = `
            <div > 
                <h2>${content[b].heading}</h2>
                <div>
                    <img src="${content[b].thumbnail}" alt="${content[b].altd}">
                    <p>${content[b].bodyText}</p>
                </div>
            </div> `;
}; 

for (let a = 0; a < controls.length; a++){
    controls[a].addEventListener('click', clickButton);
    if(controls[a].hasAttribute("id")){
            container.innerHTML = `
            <div > 
                <h2>${content[a].heading}</h2>
                <div>
                    <img src="${content[a].thumbnail}" alt="${content[a].altd}">
                    <p>${content[a].bodyText}</p>
                </div>
            </div> `;
       }
};
