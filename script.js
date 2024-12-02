//const
const SkillsSection = document.getElementById("skills-section");
const heroSection = document.getElementById("hero-section");
const AboutSection = document.getElementById("about-section");
const ProjectSection = document.getElementById("project-section");
const ContactSection = document.getElementById("contact-section");


// Disable CSS
const placement = document.querySelector('link[href="position.css"]');
if (placement) {
    placement.disabled = true;
}
const color = document.querySelector('link[href="color.css"]');
if (color) {
    color.disabled = true;
}
const font = document.querySelector('link[href="fonts.css"]');
if (font) {
    font.disabled = true;
}

// Remove Startup Section and Show Hero Section and footer
const startBtn = document.getElementById("showHero");
if (startBtn) {
    startBtn.onclick = function() {
        const startupSection = document.querySelector(".Startup");
        if (startupSection) {
            startupSection.style.display = "none";
        }

        const styleLink = document.querySelector('link[href="style.css"]');
        if (styleLink) {
            styleLink.disabled = true;
        }
        showHero();
    };
}


// Hero Section Content
const Herocontent = [
    {
        navbar: [
            { href: "#HeroSection", name: "Home" },
            { href: "#About", name: "About" },
            { href: "#Skills", name: "Skills" },
            { href: "#Projects", name: "Projects" },
            { href: "#Contact", name: "Contact" }
        ]
    },
    {
        content: [
            { my_self: "images/Doms.png" },
            {
                info: [
                    { h2: "Hello! ," },
                    { h1: "I'm Dominique Jose L. Loto" },
                    { p: "An aspiring web and game developer who transforms ideas into interactive, web-based experiences."},
                    { button: "Generate About" }
                ]
            }
        ]
    }
];

// Show Hero Section
function showHero() {
    heroSection.style.display = "flex";
    heroSection.style.alignItems = "start";

    heroSection.innerHTML = `
        <nav class="Nav" id="HeroSection">
            <div class="Nav-links">
                ${Herocontent[0].navbar.map(link => `
                    <a href="${link.href}" target="_self">${link.name}</a>
                `).join('')}
            </div>

            <div class="Hero-content">
                <div class="MyImgCon">
                    <img src="${Herocontent[1].content[0].my_self}" alt="My picture" class="Hero-img">
                </div>
                <div class="Hero-info">
                    <h2>${Herocontent[1].content[1].info[0].h2}</h2>
                    <h1>${Herocontent[1].content[1].info[1].h1}</h1>
                    <p>${Herocontent[1].content[1].info[2].p}</p>
                    <button class="aboutBtn" id="showAbout" href="#About">${Herocontent[1].content[1].info[3].button}</button>
                </div>
            </div>
        </nav>
    `;

    const aboutBtn = document.querySelector("#showAbout");
    if (aboutBtn) {
        aboutBtn.addEventListener("click", function() {

            const aboutBtnElement = document.querySelector(".aboutBtn");
            if (aboutBtnElement) {
                aboutBtnElement.style.display = "none";
            }
    

            showAbout();
        });
    }
}

// About Section Content
const about = [
    {
        img: "images/Doms-transparent-bw.png"
    },
    {
        about_me: [
            { h2: "Who am I?" },
            { p: "Hi, I'm Dominique Jose L. Loto, a passionate Web Developer and Game Developer from Sawi, Boac Marinduque. With a deep love for technology and a creative drive to build immersive digital experiences, I specialize in crafting dynamic websites and interactive games that engage users and bring ideas to life." },
            { p: "With a solid foundation in coding and design principles, I thrive in creating innovative solutions to complex problems, always pushing myself to learn new technologies and stay ahead of industry trends. Whether it's designing sleek, responsive websites or developing exciting, user-friendly games, my goal is to deliver high-quality, functional products that provide an exceptional experience." },
            { p: " When I'm not coding or debugging, you can find me exploring new gaming concepts, experimenting with game mechanics, or diving into the latest web development frameworks. I believe that both web and game development offer unique ways to engage, entertain, and inform, and I’m always excited to take on new projects that challenge my skills and creativity." },
            { button: "Generate Skills" }
        ]
    }
];

// Show About Section
function showAbout() {
    AboutSection.style.display = "flex";
    AboutSection.innerHTML = `
        <section class="about" id="About">
            <div class="about_me">
                <div class="about_me_info">
                    <h2>${about[1].about_me[0].h2}</h2>
                    <p>${about[1].about_me[1].p}</p>
                    <p>${about[1].about_me[2].p}</p>
                    <p>${about[1].about_me[3].p}</p>
                    <button class="skillsBtn" id="skillsBtn" href="#Skills">Generate Skills</button>
                </div>
                <div class="about_me_img">

                </div>
            </div>
        </section>
    `;

    const skillsBtn = document.querySelector("#skillsBtn");
    if (skillsBtn) {
        skillsBtn.addEventListener("click", function() {

            const skillsBtnElement = document.querySelector(".skillsBtn");
            if (skillsBtnElement) {
                skillsBtnElement.style.display = "none";
            }
    

            showSkills();
        });
    }
}

// Skills Section Content
const Skills = [
    {
        images: [
            { img_html: "images/html.png" },
            { img_css: "images/Css.png" },
            { img_js: "images/Js.png" },
            { img_java: "images/Java.png" },
            { img_xml: "images/Xml.png" }
        ]
    },
    {
        descriptions: [
            { title: "Computer Languages I know" },
            { html_desc: "I create clean, semantic, and accessible HTML structures for user-friendly websites. With expertise in CSS, I design responsive and visually engaging layouts that adapt to different devices and screen sizes, ensuring both functionality and aesthetic appeal while prioritizing maintainability and performance." },
            { js_desc: "I excel in developing dynamic, feature-rich applications using JavaScript. From crafting interactive user interfaces to implementing advanced logic, I leverage ES6+ syntax and libraries to create efficient, scalable solutions that meet user needs and improve engagement." },
            { java_desc: "With a strong foundation in Java, I build reliable, secure, and scalable backend systems. My work focuses on object-oriented programming, efficient algorithms, and modular designs that support large-scale applications while ensuring maintainability and performance." },
            { xml_desc: "I use XML to structure and manage data for web services, configuration files, and data exchange between systems. My attention to detail ensures that data is organized, easily accessible, and compatible with various applications." }
        ]
    }

    
];

// Show Skills Section
function showSkills() {
    SkillsSection.style.display = "flex";
    SkillsSection.innerHTML = `
        <section class="Skills" id="Skills">
            <h1>Skills</h1>
            <p>${Skills[1].descriptions[0].title}</p>
            <button class="ProjBTN" id="ProjBTN" href="#Projects">Show Projects</button>
            <div class="languages">
                <div class="lang1">
                    <div class="lang1-con">
                        <img src="${Skills[0].images[0].img_html}" alt="HTML">
                        <img src="${Skills[0].images[1].img_css}" alt="CSS">
                    </div>
                    <div class="lang1-info">
                        <p>${Skills[1].descriptions[1].html_desc}</p>
                    </div>
                </div>
                <div class="lang2">
                    <div class="lang2-con">
                        <img src="${Skills[0].images[2].img_js}" alt="JavaScript">                    
                    </div>
                    <div class="lang2-info">
                        <p>${Skills[1].descriptions[2].js_desc}</p>
                    </div>
                </div>
                <div class="lang3">
                    <div class="lang3-con">
                        <img src="${Skills[0].images[3].img_java}" alt="Java">                
                    </div>
                    <div class="lang3-info">
                        <p>${Skills[1].descriptions[3].java_desc}</p>
                    </div>
                </div>
                <div class="lang4">
                    <div class="lang4-con">
                        <img src="${Skills[0].images[4].img_xml}" alt="XML">                
                    </div>
                    <div class="lang4-info">
                        <p>${Skills[1].descriptions[4].xml_desc}</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    const ProjBTN = document.querySelector("#ProjBTN");
    if (ProjBTN) {
        ProjBTN.addEventListener("click", function() {
            const projBtnElement = document.querySelector(".ProjBTN");
            if (projBtnElement) {
                projBtnElement.style.display = "none"; // Hide the button after click
            }
            showProject(); // Show the Project section
        });
    }
}

// Project Section Content
const Project = [
    {
        proj_img: [
            { img_Carabao: "images/carabaocart.jpg" },
            { img_HardestGame: "images/game.jpeg" },
            { img_Fg: "images/fireguardian.jpg"}
        ]
    },
    {
        proj_title: [
            { proj_title1: "Carabao Cart" },
            { proj_title2: "World's Hardest Game" },
            { proj_title3: "Fire Guardian"}
        ]
    },
    {
        proj_details: [
            { proj_detail1: "A website that sells and promote carabao oriented dairy products such as carabao milk, yoghurt and more. This also helps local farmers to sell their carabao milk to this website." },
            { proj_detail2: "A rendition of the World's Hardest Game, using are own deign adding a new flair and mechanics to the game." },
            { proj_detail3: "An emergency response mobile app that helps the fire fighters of boac marinduque to respond victims with pinpoint accuracy. The app also have booking features to educate and set dates for fire hazard inspections."}
        ]
    }
];

// Show Project Section
function showProject() {
    ProjectSection.style.display = "flex";
    ProjectSection.innerHTML = `
    <section class="Projects" id="Projects">
        <h2>My Projects</h2>
        <button class="ContactBtn" id="ContactBtn" href="#Contacts">Show Contact</button>
        <div class="Projects_con">
            <div class="projects1">
                <div class="projects1_img_con"></div>
                <div class="projects1_info">
                    <h3>${Project[1].proj_title[0].proj_title1}</h3>
                    <p>${Project[2].proj_details[0].proj_detail1}</p>
                </div>
            </div>
            <div class="projects2">
                <div class="projects2_img_con"></div>
                <div class="projects2_info">
                    <h3>${Project[1].proj_title[1].proj_title2}</h3>
                    <p>${Project[2].proj_details[1].proj_detail2}</p>
                </div>
            </div>
            <div class="projects3">
                <div class="projects3_img_con"></div>
                <div class="projects3_info">
                    <h3>${Project[1].proj_title[2].proj_title3}</h3>
                    <p>${Project[2].proj_details[2].proj_detail3}</p>
                </div>
            </div>
        </div>
    </section>
    `;
    const ContactBtn = document.querySelector("#ContactBtn");
    if (ContactBtn) {
        ContactBtn.addEventListener("click", function() {
            const ContactBtnElement = document.querySelector(".ContactBtn");
            if (ContactBtnElement) {
                ContactBtnElement.style.display = "none";
            }
            showContact();
        });
    }
}

//Contact me Array
const contactme = [
    {
        contact_info:[
            {fname: "Enter First Name"},
            {lname: "Enter Last Name"},
            {email: "Enter Email"},
            {message: "Enter your Message"}
        ]
    },
    {
        socials:[
            {facebook: "Dominique Jose Labay Loto"},
            {email: "Domloto718@gmail.com"}
        ]
    }
]
// Show Contact me
function showContact(){
    ContactSection.style.display = "flex";
    ContactSection.innerHTML = `
    <section class="contact-me" id="Contact">
            <h2>Contact me for inquiries</h2>
        <div class="contact-con">
            <div class="form-con">
        <div class="name-con">
            <h3>Enter your name:</h3>
            <input type="text" id="fname" placeholder="${contactme[0].contact_info[0].fname}">
            <input type="text" id="lname" placeholder="${contactme[0].contact_info[1].lname}">
        </div>
        <div class="email-con">
            <h3>Enter your Email:</h3>
            <input type="email" id="email" placeholder="${contactme[0].contact_info[2].email}">
        </div>
        <div class="message-con">
            <h3>Message:</h3>
            <input type="text" id="message" placeholder="${contactme[0].contact_info[3].message}">
        </div>
        <button class="send" id="send">Send</button>
        <button class="cancel" id="cancel">Cancel</button>
    </div>
    <div class="socials">
        <div class="fb">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <a href="">Dominique Jose Labay Loto</a>
        </div>
        <div class="email">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <a href="">loto.dominiquejose@marsu.edu.ph</a>
        </div>
        <div class="pnum">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <a>+639773887348</a>
        </div>
        <button class="fix-pos" id="fix-pos">Fix Position</button>
        <button class="fix-font" id="fix-font">Fix Fonts</button>
        <button class="add-colors" id="add-colors">Add Colors</button>
    </div>
        </div>
    </section>
 `;

 // Enable Css
function enableStyleAndRemoveButton(buttonId) {

    if (buttonId === 'fix-pos') {
        const placement = document.querySelector('link[href="position.css"]');
        if (placement) {
            placement.disabled = false;
        }
    }

    if (buttonId === 'fix-font') {
        const font = document.querySelector('link[href="fonts.css"]');
        if (font) {
            font.disabled = false;
        }
    }

    if (buttonId === 'add-colors') {
        const color = document.querySelector('link[href="color.css"]');
        if (color) {
            color.disabled = false;
        }
    }

    document.getElementById(buttonId).remove();
}


document.getElementById('fix-pos').addEventListener('click', function() {
    enableStyleAndRemoveButton('fix-pos');
});

document.getElementById('fix-font').addEventListener('click', function() {
    enableStyleAndRemoveButton('fix-font');
});

document.getElementById('add-colors').addEventListener('click', function() {
    enableStyleAndRemoveButton('add-colors');
});
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");


const sendBtn = document.getElementById("send");
const cancelBtn = document.getElementById("cancel");
sendBtn.addEventListener('click', function() {

    const fname = fnameInput.value;
    const lname = lnameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if (fname && lname && email && message) {
        alert(`Message Sent!\n\nName: ${fname} ${lname}\nEmail: ${email}\nMessage: ${message}`);

        clearForm();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});


cancelBtn.addEventListener('click', function() {

    clearForm();
});

function clearForm() {
    fnameInput.value = '';
    lnameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
}

}
