var app = new Vue({
    el: "#app",
    data: {
        usu: "",
        pw: "",
        user: "",
        pass: "",
        intento: 0,
        estado: 0,
        val: 0,
        rta: 0,
        saldo: 1000000,
        monto: 0,
        mensaje: "",

    },
    methods: {
        validar() {
            if (this.usu == this.user && this.pw == this.pass && this.estado == 0) {
                // alert('Bienvenido a su Banco');
                this.estado = 2;
            } else {
                alert('Su usuario o clave no coincide con nuestros registros');
                this.intentos();
            }
        },
        intentos() {
            this.intento++;
            if (this.intento == 3) {
                this.estado = 1;
                alert('Cuenta bloqueada');
            }
        },
        activar() {
            if (this.val == 0) {
                this.val = 1;
            } else {
                if (this.rta == 10) {
                    this.estado = 0;
                    this.val = 0;
                    this.intento = 0;
                    this.rta = 0;
                    this.user = "";
                    this.pass = "";
                    alert('Su usuario ha sido desbloqueado');
                }
            }
        },
        consultaSaldo() {
            this.mensaje = "Su saldo actual es : ";
            this.estado = 3;
        },

        retirar() {
            this.mensaje = "El monto a retirar es : ";
            this.estado = 5;
            if (this.saldo >= this.monto) {
                this.saldo -= this.monto;
            } else {
                alert("No tiene fondos suficientes para efectuar la operación.");
            }
        },
        transferir() {
            this.mensaje = "El monto a transferir es : ";
            this.estado = 5;
        },
        volver() {
            this.estado = 2;
        },
        consignar() {
            this.mensaje = "El monto a consignar es : ";
            this.estado = 4;
            this.saldo += this.monto;
        },
        ejecutar() {
            if (this.estado == 4) {
                this.saldo = parseInt(this.saldo) + parseInt(this.monto);
            } else if (this.estado > 4) {
                if (this.saldo >= this.monto) {
                    this.saldo = parseInt(this.saldo) - parseInt(this.monto);
                } else {
                    alert("No tiene saldo suficiente para efectuar la operación.")
                }
            }
            this.monto = 0;
            this.estado = 2;
        }
    }
})