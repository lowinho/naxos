import app from './app';

const port = 3001;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})