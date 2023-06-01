const http = require("http"); // Utilizando modulo nativo http
const port = 3000;

const rotas = {
    '/': 'Estudando o Node',
    '/biceps': 'Exercícios: Rosca Scott, Martelo, Rosca direta com barra W',
    '/costas': 'Exercícios: Puxada alta, remada unilateral, remada cavalinho',
    '/posterior-de-pernas': 'Exercícios: Stiff, Mesa flexora, Cadeira flexora',
    '/peitoral': 'Exercícios: Peitoral Fly, Supino 45, Crossover'
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});
