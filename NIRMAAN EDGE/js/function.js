const menu=document.querySelector(".menu");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

}


/* Loader */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},1000);

});


/* Sticky Navbar */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("sticky",window.scrollY>50);

});


/* Scroll Progress */

window.onscroll=function(){

let winScroll=document.body.scrollTop||document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let scrolled=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

}


/* Scroll To Top */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* Counter Animation */

const counters=document.querySelectorAll(".count");

const speed=200;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,15);

}else{

counter.innerText=target+"+";

}

}

update();

});



// Service Card Animation

const cards = document.querySelectorAll(".service-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

card.style.background = `
radial-gradient(circle at ${x}px ${y}px,
rgba(212,175,55,.15),
#202020 70%)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#202020";

});

});



// Portfolio Filter


const filterBtns=document.querySelectorAll(".filter-buttons button");

const items=document.querySelectorAll(".gallery-item");


filterBtns.forEach(btn=>{


btn.onclick=()=>{


document.querySelector(".filter-buttons .active")
.classList.remove("active");


btn.classList.add("active");


let filter=btn.dataset.filter;



items.forEach(item=>{


if(filter==="all" || item.classList.contains(filter)){


item.style.display="block";


}

else{


item.style.display="none";


}


});


}


});




// Lightbox


const galleryImages=document.querySelectorAll(".gallery-item img");

const lightbox=document.querySelector(".lightbox");

const lightImg=document.querySelector(".lightbox img");

const close=document.querySelector(".close");



galleryImages.forEach(img=>{


img.onclick=()=>{


lightbox.style.display="flex";

lightImg.src=img.src;


}


});



if(close){

close.onclick=()=>{

lightbox.style.display="none";

}

}
// Testimonial Swiper

const testimonialSlider = document.querySelector(".testimonial-slider");


if(testimonialSlider){

const swiper = new Swiper(".testimonial-slider", {

    loop:true,

    grabCursor:true,

    spaceBetween:30,

    slidesPerView:1,


    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },


    pagination:{
        el:".testimonial-slider .swiper-pagination",
        clickable:true,
    },


    navigation:{
        nextEl:".testimonial-slider .swiper-button-next",
        prevEl:".testimonial-slider .swiper-button-prev",
    },


    breakpoints:{

        768:{
            slidesPerView:2,
        },


        1024:{
            slidesPerView:3,
        }

    }


});

}


// Dark Light Mode


const themeBtn =
document.getElementById("themeToggle");


themeBtn.onclick=()=>{


document.body.classList.toggle("light");


let icon =
themeBtn.querySelector("i");


if(document.body.classList.contains("light")){

icon.classList.replace(
"bx-moon",
"bx-sun"
);

}

else{

icon.classList.replace(
"bx-sun",
"bx-moon"
);

}


};


// Contact Form WhatsApp Send

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();


let name = document.getElementById("name").value;

let phone = document.getElementById("phone").value;

let email = document.getElementById("email").value;

let message = document.getElementById("message").value;



let whatsappMessage = 
`Hello Nirmaan Edge,

Customer Details:

Name: ${name}

Phone: ${phone}

Email: ${email}

Requirement:
${message}

Thank You.`;



let whatsappNumber = "8006689480";


let whatsappURL = 
"https://wa.me/" + whatsappNumber + 
"?text=" + encodeURIComponent(whatsappMessage);



window.open(whatsappURL, "_blank");


});





function calculateCost() {

    let room = document.getElementById("room");
    let area = document.getElementById("area").value;
    let quality = document.getElementById("quality");
    let furniture = document.getElementById("furniture");


    if (area === "" || area <= 0) {
        alert("Please enter area in Sq Ft");
        return;
    }


    let roomCost = Number(room.value);
    let qualityCost = Number(quality.value);
    let furnitureCost = Number(furniture.value);


    // Calculate total estimate
    let interiorCost = (roomCost * area) * qualityCost;
    let furnitureTotal = furnitureCost * area;

    let totalCost = interiorCost + furnitureTotal;


    let finalAmount = totalCost.toLocaleString("en-IN");


    // Display Result
    document.getElementById("result").innerHTML =
        "Estimated Cost: ₹" + finalAmount;



    // WhatsApp Quote
    let message =
        "Hello NIRMAAN EDGE,%0A%0A" +
        "I need an interior estimate.%0A%0A" +
        "Room Type: " + room.options[room.selectedIndex].text + "%0A" +
        "Area: " + area + " Sq Ft%0A" +
        "Material Quality: " + quality.options[quality.selectedIndex].text + "%0A" +
        "Furniture: " + furniture.options[furniture.selectedIndex].text + "%0A%0A" +
        "Estimated Cost: ₹" + finalAmount;


    // Change your WhatsApp number here
    let whatsappNumber = "918006689480";


    document.getElementById("whatsappQuote").href =
        "https://wa.me/" + whatsappNumber + "?text=" + message;


    document.getElementById("whatsappQuote").style.display = "inline-block";

}





const aboutItems=document.querySelectorAll(
".about-image,.about-content"
);

window.addEventListener("scroll",()=>{

aboutItems.forEach(item=>{

let position=item.getBoundingClientRect().top;

if(position < window.innerHeight-100){
    item.classList.add("show");
}

});

});