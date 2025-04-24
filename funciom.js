function verResultado() {
  const respuestas = {
    p1: "c", p2: "b", p3: "b", p4: "a", p5: "b",
    p6: "b", p7: "b", p8: "c", p9: "a", p10: "b",
    p11: "b", p12: "b", p13: "c", p14: "a", p15: "b",
    p16: "b", p17: "a", p18: "a", p19: "c", p20: "b",
    p21: "b", p22: "a", p23: "a", p24: "c", p25: "a",
    p26: "a", p27: "b", p28: "b", p29: "a", p30: "b",
    p31: "b", p32: "a", p33: "a", p34: "b", p35: "c",
    p36: "a", p37: "c", p38: "b", p39: "a", p40: "b",
    p41: "a", p42: "a", p43: "b", p44: "b", p45: "b",
    p46: "c", p47: "a", p48: "b", p49: "a", p50: "c"
  };

  let total = 0;

  for (let i = 1; i <= 50; i++) {
    const name = "p" + i;
    const opciones = document.getElementsByName(name);
    for (const opcion of opciones) {
      if (opcion.checked && opcion.value === respuestas[name]) {
        total++;
      }
    }
  }

  const nombre = document.getElementById("nombre").value.trim() || "Estudiante";
  alert(`${nombre}, tu puntaje es: ${total} de 50.`);
}
let tiempo = 5 * 60; // 15 minutos en segundos

function iniciarTemporizador() {
  const cronometro = document.getElementById("cronometro");

  const intervalo = setInterval(() => {
    if (tiempo <= 0) {
      clearInterval(intervalo);
      bloquearFormulario();
      alert("⏰ Tiempo finalizado. Tus respuestas se han bloqueado.");
      verResultado();
    } else {
      const minutos = Math.floor(tiempo / 60);
      const segundos = tiempo % 60;
      cronometro.textContent = `⏳ Tiempo restante: ${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
      tiempo--;
    }
  }, 1000);
}
