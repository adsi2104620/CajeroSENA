var app = new Vue({
    el: "#app",
    data: {
        nombre: "",
        cant: 0,
        precio: 0,
        arrayProd: [
            { nombre: "Pera", precio: 1700, cant: 20 },
            { nombre: "Piña", precio: 3700, cant: 10 },
            { nombre: "Manzana", precio: 1500, cant: 12 },
            { nombre: "Patilla", precio: 5700, cant: 3 },
        ],
    },
    methods: {
        eliminar(index) {
            Swal.fire({
                title: "Estas seguro?",
                text: "Una vez elimine el producto no podra revertir",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "SI",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.arrayProd.splice(index, 1);
                    Swal.fire("Eliminado!", "Su producto se elimino correctamente.", "success");
                }
            });
        },
        agregarProd() {
            this.arrayProd.push({ nombre: this.nombre, precio: this.precio, cant: this.cant });
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: "success",
                title: "Producto guardado",
            });
        }
    },
    computed: {
        total: function() {
            var total = 0;
            for (let i = 0; i < this.arrayProd.length; i++) {
                total +=
                    parseInt(this.arrayProd[i].precio) *
                    parseInt(this.arrayProd[i].cant);
            }
            return total;
        }
    }
})