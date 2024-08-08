const galleryContainer = document.querySelector(".slider_container");
const galleryControlsContainer = document.querySelector(".slider_controls");
const galleryControls = ["previous", 'next'];
const galleryItems = document.querySelectorAll(".slider_item");


class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('slider_item1');
            el.classList.remove('slider_item2');
            el.classList.remove('slider_item3');
            el.classList.remove('slider_item4');
            el.classList.remove('slider_item5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`slider_item${i + 1}`);
        });


    }


    setCurrentState(direction) {
        if (direction.className == 'slider_controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `slider_controls-${control}`;
            document.querySelector(`.slider_controls-${control}`).innerText = control;
        });
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            })
        })
    }



}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);


exampleCarousel.setControls()
exampleCarousel.useControls()



// price change

btnMonth = document.getElementById("btn_month");
btnYear = document.getElementById("btn_year");
price_div = document.getElementById("price_div");


btnYear.onclick = function () {
    this.classList.add("select")
    this.classList.remove("noselect")
    btnMonth.classList.remove("select")
    btnMonth.classList.add("noselect")
    price_div.innerHTML = `
    <span class="header_price-dollar">$</span>
    60
    <span class="header_price-dialy">/year</span>
    `
    price_div.classList.add("move")
}

btnMonth.onclick = function () {
    this.classList.add("select")
    this.classList.remove("noselect")
    btnYear.classList.remove("select")
    btnYear.classList.add("noselect")
    price_div.innerHTML = `
    <span class="header_price-dollar">$</span>
                                5
    <span class="header_price-dialy">/m</span>
    `
    price_div.classList.remove("move")

}



