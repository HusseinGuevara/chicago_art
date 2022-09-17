'use strict';


// Elements
const bodyContainer = document.querySelector('.web-body');
const previousBtn = document.querySelector('.previous_button')
const nextBtn = document.querySelector('.next_button')

const getArt = async function() {
    let currentPage = 1;
    const API_URL = `https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=6`;
    const resArt = await fetch(API_URL);
    const resArtObject = await resArt.json();
    const resArtObjectPagination = resArtObject.pagination;
    const resTotalPages = resArtObjectPagination.total_pages;
     const artArr = resArtObject.data;
    const firstArt = resArtObject.data[0];
    console.log(resArtObjectPagination);
    console.log(resTotalPages)

    // Iterate thru arr and render each art
    artArr.map(art => {
        renderArt(art)
    })

    nextBtn.addEventListener('click', function() {
        paginationNext(currentPage);
    })

    previousBtn.addEventListener('click', function() {
        console.log('Previous')
    })
    
}
getArt();

const renderArt = function(art) {
    const html = `
    <div class='card'>
        <h2>${art.title}</h2>
        <h3>by ${art.artist_title}</h3>
        <img  class='art' src="https://www.artic.edu/iiif/2/${art.image_id}/full/200,/0/default.jpg" alt=""/>
        <div class="text-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor justo eget libero bibendum, eget sodales risus molestie. 
                Proin sit amet semper lorem. Fusce sagittis augue vitae ipsum cursus, ut molestie mi cursus. Maecenas et sapien venenatis, suscipit mauris et, ornare mauris. 
                Nunc posuere dignissim lectus ac interdum. Maecenas interdum in metus eget ultrices. Nunc neque augue, luctus vel dui ac, luctus gravida nunc. 
                Morbi porta, ipsum eget aliquam commodo, nulla neque bibendum ex, id volutpat quam felis lobortis nulla. Suspendisse in hendrerit diam. Integer tellus enim, elementum eu mi non, 
                fringilla laoreet lacus. Donec id hendrerit felis.
            </p>
        </div>  
    </div>
    `
    bodyContainer.insertAdjacentHTML('beforeend', html);
}

const paginationNext = function(page) {
    page++
    console.log("Next")
    return page;
}

