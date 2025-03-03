// js files



<script>
    var swiper = new Swiper(".mySwiper1", {
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    });
</script>


<script>
    var swiper = new Swiper(".mySwiper2", {
    pagination: {
        el: ".swiper-pagination",
    },
    });
</script>


<script>
    var swiper = new Swiper(".mySwiper3", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    });
</script>

 <!-- Initialize Swiper 4-->
<script>
    var swiper = new Swiper(".mySwiper4", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });
</script>

 <!-- Initialize Swiper 5-->
<script>
    var swiper = new Swiper(".mySwiper5", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });
</script>

 <!-- Initialize Swiper 6-->
<script>
    var swiper = new Swiper(".mySwiper6", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    });
</script>

<!-- Initialize Swiper 7-->
<script>
    var swiper = new Swiper(".mySwiper7", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    });
</script>

<!-- Initialize Swiper 8-->
<script>
    var swiper = new Swiper(".mySwiper8", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

<!-- Initialize Swiper 9-->
<script>
    var swiper = new Swiper(".mySwiper9", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

<!-- Initialize Swiper 12-->
<script>
    var swiper = new Swiper(".mySwiper10", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

 <!-- Initialize Swiper 11-->
<script>
    var swiper = new Swiper(".mySwiper11", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

<!-- Initialize Swiper 12-->
<script>
    var swiper = new Swiper(".mySwiper12", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

 <!-- Initialize Swiper 13-->
<script>
    var swiper = new Swiper(".mySwiper13", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

 <!-- Initialize Swiper 14-->
<script>
    var swiper = new Swiper(".mySwiper14", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    });
</script>

<!-- Initialize Swiper 15-->
<script>
    var swiper = new Swiper(".mySwiper15", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

<!-- Initialize Swiper 16-->
<script>
    var swiper = new Swiper(".mySwiper16", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    mousewheel: true,
    });
</script>

<!-- Initialize Swiper 17-->
<script>
    var swiper = new Swiper(".mySwiper17", {
    slidesPerView: 3,
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

 <!-- Initialize Swiper 18-->
<script>
    var swiper = new Swiper(".mySwiper18", {
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
    var swiper2 = new Swiper(".mySwiper18-2", {
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

<!-- Initialize Swiper 19-->
<script>
    var swiper = new Swiper(".mySwiper19", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

<!-- Initialize Swiper 20-->
<script>
    var swiper = new Swiper(".mySwiper20", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });
</script>

<!-- Initialize Swiper 21-->
<script>
    var swiper = new Swiper(".mySwiper21", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

 <!-- Initialize Swiper 22-->
<script>
    var swiper = new Swiper(".mySwiper22", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

<!-- Initialize Swiper 23-->
<script>
    var swiper = new Swiper(".mySwiper23", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    });
</script>

<!-- Initialize Swiper 24-->
<script>
    var swiper = new Swiper(".mySwiper24", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    });
</script>

<!-- Initialize Swiper 25-->
<script>
    var swiper = new Swiper(".mySwiper25", {
    effect: "flip",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });
</script>

 <!-- Initialize Swiper 26-->
<script>
    var swiper = new Swiper(".mySwiper26", {
    effect: "cards",
    grabCursor: true,
    });
</script>

<!-- Initialize Swiper 27-->
<script>
    var swiper = new Swiper(".mySwiper27", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });
</script>

<!-- Initialize Swiper 28-->
<script>
    var swiper = new Swiper(".mySwiper28", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

<!-- Initialize Swiper 29-->
<script>
    var swiper = new Swiper(".mySwiper29", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });
</script>

<!-- Initialize Swiper 30-->
<script>
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper30", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
    });
</script>

 <!-- Initialize Swiper 31-->
<script>
    var swiper = new Swiper(".mySwiper31", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });

    var appendNumber = 4;
    var prependNumber = 1;
    document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        ]);
    });
    document
    .querySelector(".prepend-slide")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
        );
    });
    document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
        );
    });
    document
    .querySelector(".append-2-slides")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        ]);
    });
</script>

<!-- Initialize Swiper 32-->
<script>
    var swiper = new Swiper(".mySwiper32", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    });
</script>

<!-- Initialize Swiper 33-->
<script>
    var swiper = new Swiper(".mySwiper33", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
    var swiper2 = new Swiper(".mySwiper33-1", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
    var swiper3 = new Swiper(".mySwiper33-2", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

<!-- Initialize Swiper 34-->
<script>
    var swiper = new Swiper(".mySwiper34", {
    spaceBetween: 30,
    hashNavigation: {
        watchState: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });
</script>

 <!-- Initialize Swiper 35-->
<script>
    var swiper = new Swiper(".mySwiper35", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

<!-- Initialize Swiper 36-->
<script>
    var swiper = new Swiper(".mySwiper36", {
    speed: 600,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });
</script>

 <!-- Initialize Swiper 37-->
<script>
    var swiper = new Swiper(".mySwiper37", {
    lazy: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });
</script>

<!-- Initialize Swiper 38-->
<script>
    var swiper = new Swiper(".mySwiper38", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 4,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 5,
        spaceBetween: 50,
        },
    },
    });
</script>

 <!-- Initialize Swiper 39-->
<script>
    var swiper = new Swiper(".mySwiper39", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
        },
        "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
        },
        "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
        },
    },
    });
</script>

 <!-- Initialize Swiper 40-->
<script>
    var swiper = new Swiper(".mySwiper40", {
    autoHeight: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

 <!-- Initialize Swiper 41-->
<script>
    var swiper = new Swiper(".mySwiper41", {
    zoom: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
</script>

 <!-- Initialize Swiper 42-->
<script>
    let appendNumber = 600;
    let prependNumber = 1;
    const swiper = new Swiper('.swiper42', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    virtual: {
        slides: (function () {
        const slides = [];
        for (var i = 0; i < 600; i += 1) {
            slides.push('Slide ' + (i + 1));
        }
        return slides;
        })(),
    },
    });

    document
    .querySelector('.slide-1')
    .addEventListener('click', function (e) {
        e.preventDefault();
        swiper.slideTo(0, 0);
    });

    document
    .querySelector('.slide-250')
    .addEventListener('click', function (e) {
        e.preventDefault();
        swiper.slideTo(249, 0);
    });

    document
    .querySelector('.slide-500')
    .addEventListener('click', function (e) {
        e.preventDefault();
        swiper.slideTo(499, 0);
    });

    document
    .querySelector('.prepend-2-slides')
    .addEventListener('click', function (e) {
        e.preventDefault();
        swiper.virtual.prependSlide([
        'Slide ' + --prependNumber,
        'Slide ' + --prependNumber,
        ]);
    });

    document
    .querySelector('.append-slide')
    .addEventListener('click', function (e) {
        e.preventDefault();
        swiper.virtual.appendSlide('Slide ' + ++appendNumber);
    });
</script>

 <!-- Include plugin after Swiper 43-->
    <script>
        /* ========
    Debugger plugin, simple demo plugin to console.log some of callbacks
    ======== */
        function myPlugin({ swiper, extendParams, on }) {
        extendParams({
            debugger: false,
        });

        on('init', () => {
            if (!swiper.params.debugger) return;
            console.log('init');
        });
        on('click', (swiper, e) => {
            if (!swiper.params.debugger) return;
            console.log('click');
        });
        on('tap', (swiper, e) => {
            if (!swiper.params.debugger) return;
            console.log('tap');
        });
        on('doubleTap', (swiper, e) => {
            if (!swiper.params.debugger) return;
            console.log('doubleTap');
        });
        on('sliderMove', (swiper, e) => {
            if (!swiper.params.debugger) return;
            console.log('sliderMove');
        });
        on('slideChange', () => {
            if (!swiper.params.debugger) return;
            console.log(
            'slideChange',
            swiper.previousIndex,
            '->',
            swiper.activeIndex
            );
        });
        on('slideChangeTransitionStart', () => {
            if (!swiper.params.debugger) return;
            console.log('slideChangeTransitionStart');
        });
        on('slideChangeTransitionEnd', () => {
            if (!swiper.params.debugger) return;
            console.log('slideChangeTransitionEnd');
        });
        on('transitionStart', () => {
            if (!swiper.params.debugger) return;
            console.log('transitionStart');
        });
        on('transitionEnd', () => {
            if (!swiper.params.debugger) return;
            console.log('transitionEnd');
        });
        on('fromEdge', () => {
            if (!swiper.params.debugger) return;
            console.log('fromEdge');
        });
        on('reachBeginning', () => {
            if (!swiper.params.debugger) return;
            console.log('reachBeginning');
        });
        on('reachEnd', () => {
            if (!swiper.params.debugger) return;
            console.log('reachEnd');
        });
        }
    </script>

    <script>
        // Init Swiper
        var swiper = new Swiper('.swiper43', {
        // Install Plugin To Swiper
        modules: [myPlugin],
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Enable debugger
        debugger: true,
        });
    </script>

    <!-- Initialize Swiper 44-->
    <script>
        var menuButton = document.querySelector('.menu-button');
        var openMenu = function () {
        swiper.slidePrev();
        };
        var swiper = new Swiper('.swiper44', {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: 0,
        slideToClickedSlide: true,
        on: {
            slideChangeTransitionStart: function () {
            var slider = this;
            if (slider.activeIndex === 0) {
                menuButton.classList.add('cross');
                // required because of slideToClickedSlide
                menuButton.removeEventListener('click', openMenu, true);
            } else {
                menuButton.classList.remove('cross');
            }
            },
            slideChangeTransitionEnd: function () {
            var slider = this;
            if (slider.activeIndex === 1) {
                menuButton.addEventListener('click', openMenu, true);
            }
            },
        },
        });
    </script>

    <!-- Initialize Swiper 45-->
    <script>
        var swiper = new Swiper('.swiper45', {
        slidesPerView: 3,
        direction: getDirection(),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            resize: function () {
            swiper.changeDirection(getDirection());
            },
        },
        });

        function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

        return direction;
        }
    </script>

    <!-- Initialize Swiper 46-->
    <script>
        var swiper = new Swiper(".mySwiper46", {
        watchSlidesProgress: true,
        slidesPerView: 3,
        });
    </script>

    <!-- Initialize Swiper 47-->
    <script>
        var swiper = new Swiper(".mySwiper47", {
        rewind: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        });
    </script>

     <!-- Initialize Swiper -->
    <script>
        var swiper = new Swiper(".mySwiper", {});
    </script>