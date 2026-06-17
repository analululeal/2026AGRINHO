function calcularEconomia() {
    let litros = document.getElementById("litros").value;

    if (litros === "" || litros <= 0) {
        document.getElementById("resultado").innerHTML =
            "Digite um valor válido.";
        return;
    }

    let economia = litros * 0.3; // 30% de economia possível

    document.getElementById("resultado").innerHTML =
        "Com boas práticas, você pode economizar aproximadamente " +
        economia + " litros de água.";
}
