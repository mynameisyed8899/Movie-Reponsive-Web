
function togglevideo() {
    const trailer = document.querySelector(".trailer");
    const video = document.querySelector("video");

    if (!trailer || !video) {
        console.error("Trailer or video element not found!");
        return;
    }

    // Pause video when toggling trailer visibility
    video.pause();
    trailer.classList.toggle("active");
}


function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    // banner.style.background = `url("assets/images/${bg}")`;
    // let image = banner.style.background = `url("../images${bg}")`;
    // console.log(image);

    let image = banner.style.background = `url("../images/${bg}")`;
    // console.log(image);


    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';


    contents.forEach(content => {
        content.classList.remove("active");
        if (content.classList.contains(title)) {
             content.classList.add('active');
        }
        
    });

}





console.log('hellow daer')