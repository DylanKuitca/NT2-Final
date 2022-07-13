import Vue from 'vue'

Vue.directive('cambiarColor', function (texto, color) {
    texto.style.color = color.value
})
Vue.directive('cambiarFondo', function (texto, fondo) {
    texto.style.background = fondo.value
})
Vue.directive('cambiarFontSize', function (texto, font) {
    texto.style.fontSize = font.value
})