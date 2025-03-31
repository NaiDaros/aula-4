import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "API com Node e Express.js",
    "/posts": "Rota de postagem",
    "/autores": "Rota de autores",
}

app.listen(PORT, () => {
    console.log("Servidor na escuta!");
});