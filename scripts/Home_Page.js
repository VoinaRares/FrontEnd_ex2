/*function resizeSideBar(){

    const sidebar = document.getElementById("sidebar");
    const width = window.innerWidth;
    const links = sidebar.getElementsByTagName("a");

    if (width > 1200) {
        sidebar.style.width = '160px';
        for(let link of links){
            link.style.width = '40px';
        }
    } else if (width > 768) {
       sidebar.style.width = '145px';
       for(let link of links){
        link.style.width = '25px';
    }
    } else if (width > 480) {
        sidebar.style.width = '130px';
        for(let link of links){
            link.style.width = '20px';
        }
    } else {
        sidebar.style.width = '120px';
        for(let link of links){
            link.style.width = '15px';
        }
    }
}

resizeSideBar();


window.addEventListener('resize', resizeSideBar);*/