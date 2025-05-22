const indicadores = [
  { id: "UF", label: "UF", key: "uf" },
  { id: "DolarO", label: "Dólar observado", key: "dolar" },
  { id: "DolarA", label: "Dólar acuerdo", key: "dolar_intercambio" },
  { id: "Euro", label: "Euro", key: "euro" },
  { id: "IPC", label: "IPC", key: "ipc" },
  { id: "UTM", label: "UTM", key: "utm" },
  { id: "IVP", label: "IVP", key: "ivp" },
  { id: "Imacec", label: "Imacec", key: "imacec" }
];

fetch('https://api.allorigins.win/raw?url=https://mindicador.cl/api')
  .then(res => res.json())
  .then(data => {
    indicadores.forEach(({ id, label, key }) => {
      const el = document.getElementById(id);
      if (data[key]) {
        const valor = data[key].valor.toLocaleString('es-CL', {
          style: (key === 'ipc' || key === 'imacec') ? 'decimal' : 'currency',
          currency: 'CLP',
          minimumFractionDigits: 2
        });
        const sufijo = (key === 'ipc' || key === 'imacec') ? '%' : '';
        el.innerHTML = `<span class="titulo">${label}:</span> ${valor}${sufijo}`;
      } else {
        el.innerHTML = `<span class="titulo">${label}:</span> No disponible`;
      }
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
    document.querySelector(".indicadores-container").innerHTML += "<p>Error al cargar los indicadores.</p>";
  });

//La API Fetch proporciona una interfaz para recuperar recursos Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto de características más potente y flexible.
//Fetch ofrece una definición genérica de los objetos Request y Response (y otras cosas relacionadas con las solicitudes de red).
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API#compatibilidad_de_navegadores