const menubtn = document.querySelector('.menu__btn')
const menuclose = document.querySelector('.menu__close')
const menulist = document.querySelector('.menu__list')
const menudrop = document.querySelector('.menu--close')

menubtn.addEventListener('click', () => {
	menulist.classList.toggle('menu__list--open')
	menudrop.classList.toggle('menu--open')
})
menuclose.addEventListener('click', () => {
	menulist.classList.remove('menu__list--open')
	menudrop.classList.remove('menu--open')
})
