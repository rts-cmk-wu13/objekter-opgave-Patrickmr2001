// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))



//hero section
const heroSection = document.querySelector('.hero');
function heroSpan(text, span) {
    return text.replace(span, `<span>${span}</span>`);
}
heroSection.innerHTML = `
    <img class = "hero_img" src="${hero.image}" alt="Hero Image">
    <div class="herobox">
    <h1>${heroSpan(hero.headline, "save your time")}</h1>
    <p class = "p_hero">${hero.copy}</p>
    <img class = "icon" src="${hero.icon}" alt="Hero Icon">
    </div>
    
`;


const servicesSection = document.querySelector('.services');
services.forEach(service => {
    servicesSection.innerHTML += `

        <div class = "serviceflex">
        <div>
            <img src="${service.illustration}" alt="Service Illustration">
        </div>
        
            <h2>${service.headline}</h2>
        
         
            <p>${service.text}</p>
        
        <div>
            <a href="#">${service.linktext}</a>
        </div>
        </div>
    `;
});

const facilitiesSection = document.querySelector('.facilities');
facilitiesSection.innerHTML = `
    <h2>${facilities.headline}</h2>
    <div class="facility-options">
        ${facilities.options.map(option => `
            
            <div>
                <img src="${option.icon}" alt="Facility Icon">
                <h3>${option.headline}</h3>
                <p>${option.text}</p>
            </div>
            
        `).join('')}
    </div>
`;

const sitesSection = document.querySelector('.sites');
sitesSection.innerHTML = `
    <div class = "h2andpsite">
    <h2>${sites.headline}</h2>
    <p>${sites.text}</p>
    <br>
    <a class = "start" href="#">Start</a>
</div>
    <div class="site-places">
        ${sites.places.map(place => `
            <div>
                <div class = "site-img">
                <img src="${place.img}" alt="Site Place Image">
                
                <h3>${place.name}</h3>
                <p>${place.city}</p>
                <a>View the site</a>
                </div>
            </div>
        `).join('')}
    </div>
`;

const advantagesSection = document.querySelector(".advantages")
advantages.forEach(advantage => {
    advantagesSection.innerHTML += `
        <div class = "cardss">
            <img src="${advantage.icon}" alt="Advantage Icon">
            <h3>${advantage.headline}</h3>
            <p>${advantage.text}</p>
        </div>
    `;
});


// footer section

const footerSection = document.querySelector('.footer');
footerSection.innerHTML = `

<div class = "flex_footer">
    <div>
<h3>Easy Camper</h3>
<h2>When Passion Meets Comfort.</h2>
</div>

    <div class="footer-list">
        <ul>
            <li><a href="#">Discover the Network</a></li>
            <li><a href="#">Where to shop</a></li>
            <li><a href="#">Tour guided</a></li>
            <li><a href="#">Our tours</a></li>
            <li><a href="#">About us</a></li>
        </ul>
    </div>
    <div class="footer-list">
        <ul>
            <li><a href="#">Become a Manager</a></li>
            <li><a href="#">Join your Pairing</a></li>
            <li><a href="#">Offer your Service</a></li>
            <li><a href="#">Are you a guide?</a></li>
        </ul>
    </div>
    <div class="footer-list">
        <ul>
            <li><a href="#">Assistance</a></li>
            <li><a href="#">Support Center  </a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Cancallation Options</a></li>
            <li><a href="#">Reliablity and Sequrity</a></li>
        </ul>
    </div>
    </div>
    <hr>
<div class = "footer_bottom_flex">
    <p>EazyCamper. All rights reserved. </p>
    <a href="">About</a>
    <a href="">Site Map</a>
    <a href="">Terms</a>
    <a href="">Privacy Policy</a>
    <a href="">Teams</a>
    </div>
`;


