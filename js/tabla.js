var app = new Vue({
    el: "#app",
    data: {
        arrayProd: [
            { nombre: "Pera", precio: 1700, cant: 20 },
            { nombre: "Piña", precio: 3700, cant: 10 },
            { nombre: "Manzana", precio: 1500, cant: 12 },
            { nombre: "Patilla", precio: 5700, cant: 3 },
        ],
    },
    methods: {},
    computed: {
        imprimir() {
            alert('Hola Mundo');
        }
    }
})