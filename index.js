import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

// Настройка путей для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// В json-server v1.0.0-beta создание инстанса теперь импортируется напрямую
const server = jsonServer.create(); 
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Render автоматически назначит порт в переменную процесса
const port = process.env.PORT || 8801;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
