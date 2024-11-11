const jsonServer = require('json-server')

const TodoServer = jsonServer.create()
const middleware = jsonServer.defaults()
const PORT = 3000
const route = jsonServer.router('db.json')

TodoServer.use(middleware)
TodoServer.use(route)
TodoServer.listen(PORT, () => {
    console.log(`TodoSever started at PORT : ${PORT} and waiting for client request !`);
    
})