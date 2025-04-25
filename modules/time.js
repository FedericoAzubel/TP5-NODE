const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

const getFullDateTime = () => {
  const now = new Date();

  // Opciones de formato en español
  const options = {
    weekday: "long", // sábado
    year: "numeric", // 2025
    month: "long", // abril
    day: "numeric", // 5
  };

  // Fecha en español
  const date = now.toLocaleDateString("es-ES", options);

  // Hora con ceros adelante
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;

  return `${date}, ${time}`;
};

module.exports = { getCurrentTime, getFullDateTime };
