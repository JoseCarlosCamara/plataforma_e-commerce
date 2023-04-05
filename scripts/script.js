let page1 = document.getElementById("pagina1");
let page2 = document.getElementById("pagina2");
let page3 = document.getElementById("pagina3");
let btnRight = document.getElementById("btnCarouselRight");
let btnLeft = document.getElementById("btnCarouselLeft");


function nextCarousel()
{
    if(page1.style.display != "none" && page2.style.display != "inline-block")
    {
        page1.style.display = "none";
        page2.style.display = "inline-block";
        btnLeft.style.visibility = "visible";
    }
    else if(page2.style.display != "none" && page3.style.display != "inline-block")
    {
        page2.style.display = "none";
        page3.style.display = "inline-block";
        btnRight.style.visibility = "hidden";
    }
}

function previousCarousel()
{
    if(page3.style.display != "none" && page2.style.display != "inline-block")
    {
        page3.style.display = "none";
        page2.style.display = "inline-block";
        btnRight.style.visibility = "visible";
    }
    else if(page2.style.display != "none" && page1.style.display != "inline-block")
    {
        page2.style.display = "none";
        page1.style.display = "inline-block";
        btnLeft.style.visibility = "hidden";
    }
}

if(page1.style.display != "none")
{
    btnLeft.style.visibility = "hidden";
}
