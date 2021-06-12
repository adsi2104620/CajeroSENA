var app = new Vue({
    el: "#app",
    data: {
        // estado 3 = consignar 4=tranferir 5= retirar
        usu: "",
        pw: "",
        user: "",
        pass: "",
        mov: "",
        intento: 0,
        estado: 0,
        val: 0,
        rta: 0,
        saldo: 1000000,
        monto: 0,
        mensaje: "",
        arrayMov: []

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

        setRetirar() {
            this.mensaje = "El monto a retirar es : ";
            this.estado = 5;
            this.mov = "Retiro";

            if (this.saldo >= this.monto) {
                this.saldo -= this.monto;
            } else {
                alert("No tiene fondos suficientes para efectuar la operación.");
            }
        },
        retirar() {
            if (this.saldo >= this.monto) {
                this.saldo -= this.monto;
                this.regMovimiento();
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
        setConsignar() {
            this.mensaje = "El monto a consignar es : ";
            this.estado = 4;
            this.mov = "Consignación";
        },
        consignar() {
            this.saldo += this.monto;
        },
        regMovimiento() {
            this.arrayMov.push({ valor: this.monto, mov: this.mov });
        },
        ejecutar() {
            if (tis.estado == 4) {
                this.consignar();
                this.regMovimiento();
            } else if (this.estado == 5) {
                this.retirar();
            }
            this.monto = 0;
            this.estado = 2;
        }

    }
})