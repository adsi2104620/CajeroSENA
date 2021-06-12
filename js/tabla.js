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