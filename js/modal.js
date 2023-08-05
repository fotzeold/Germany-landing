const modalForm = document.querySelector("#modal-form");
const openModalBtn = document.querySelectorAll("#open_modal");
const closeModalBtn = modalForm.querySelector("figure");
const scrollbarWidth = getScrollbarWidth();

function openModal(selector) {
	selector.classList.add("active-modal");
	document.body.style.overflow = "hidden";
	document.body.style.paddingRight = `${scrollbarWidth}px`;
}

function closeModal(selector) {
	selector.classList.remove("active-modal");
	document.body.style.overflow = "";
	document.body.style.paddingRight = `0`;
}

openModalBtn.forEach(btn => btn.addEventListener("click", (event) => {
	event.preventDefault();
	openModal(modalForm)
}));
closeModalBtn.addEventListener("click", () => closeModal(modalForm));

const modalCert = document.querySelector("#certyficate");
const openCert = document.querySelectorAll("#open-certyf");
const closeCert = modalCert.querySelector("figure");

openCert.forEach(btn => btn.addEventListener("click", () => openModal(modalCert)));
closeCert.addEventListener("click", () => closeModal(modalCert));

function getScrollbarWidth() {
	const div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '100px';
	div.style.overflow = 'scroll';
	div.style.position = 'absolute';
	div.style.top = '-9999px';

	document.body.appendChild(div);

	const scrollbarWidth = div.offsetWidth - div.clientWidth;

	document.body.removeChild(div);

	return scrollbarWidth;
}



//Image

const imageCert = document.querySelectorAll(".cert__card");

imageCert.forEach(img => {
	img.addEventListener("click", () => {
		img.classList.toggle("active_image");
	})
})

function removeImgActive() {
	imageCert.forEach(img => {
		img.classList.remove("active_image");
	})
}



const modals = document.querySelectorAll(".modal");

modals.forEach(modal => {
	modal.addEventListener("click", (event) => {
		if (event.target === modal) {
			console.log('asd')
			closeModal(modalForm);
			closeModal(modalCert);
			removeImgActive();
		}
	})
})