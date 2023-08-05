
new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true

	},
	grabCursor: true,
	slidesPerView: 3,
	spaceBetween: 16,
	loop: true,
	autoplay: {
		delay: 2000,
	},
	breakpoints: {
		320: {
			slidesPerView: 1
		},
		700: {
			slidesPerView: 2
		},
		1024: {
			slidesPerView: 3
		}
	}
})