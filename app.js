const valleyApp = {};

// start: Mobile
valleyApp.mobile = () => {
    console.log("lets get mobile");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navMenu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle('active')
        navMenu.classList.toggle('active')
    });

    document.querySelectorAll(".navLink").forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }))
}
// end: Mobile



// start: Loader
valleyApp.loader = () => {
    console.log("Loading, Please Hold")
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        loader.classList.add('loaderFinish')
    })
}
// end: Loader

valleyApp.init = () => {
    console.log("It's Alive");
    
    valleyApp.loader();
    valleyApp.mobile();
}

valleyApp.init();