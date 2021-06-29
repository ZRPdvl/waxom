const btnCategories = document.querySelectorAll(".project__categories--link");
const categoriesCard = document.querySelectorAll(".categories__card ");

function filter(categori, items) {
    items.forEach(element => {
        filterItems = !element.classList.contains(categori)
        istShow = categori.toLowerCase() === "all"
        if (filterItems && !istShow) {
            element.classList.add("categories__card--hiden");
        } else {
            element.classList.remove("categories__card--hiden")

        }
    });
};

for (const index of btnCategories) {
    index.addEventListener("click", function (e) {
        e.preventDefault();
        for (const date of btnCategories) {
            date.classList.remove("categories__link--active")
        };
        index.classList.add("categories__link--active");
        const btnFilterData = index.dataset.categories;
        filter(btnFilterData, categoriesCard);
    })
};



const counters = {
    clients: "2000",
    cofe: "300",
    post: "30",
    like: "333",
    launch: "454"
}


setInterval(() => {
    document.querySelector(".counters__clients").innerHTML = counters.clients;
    document.querySelector(".counters__coffe").innerHTML = counters.cofe;
    document.querySelector(".counters__posts").innerHTML = counters.post;
    document.querySelector(".counters__like").innerHTML = counters.like;
    document.querySelector(".counters__launch").innerHTML = counters.launch;
}, 10000);



const burgerBtn = document.querySelector(".header__burger");
const burgerLine = document.querySelector(".header__burger--line");
const headerMenu = document.querySelector(".header__top--menu");

burgerBtn.addEventListener("click", () => {
    burgerLine.classList.toggle("active");
    headerMenu.classList.toggle("active");
}
)
window.addEventListener("scroll", () => {
    burgerLine.classList.remove("active");
    headerMenu.classList.remove("active");
})

var swiper = new Swiper('.posts__slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    autoplay: {
        delay: 5000,
    },
    freeMode: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        604: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.slider__arrow--next',
        prevEl: '.slider__arrow--prev',
    }
});