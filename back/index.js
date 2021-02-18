const app = require('./src/configs/server')
require('./src/configs/dataBase')

app.listen(app.get('port'), () => console.log(`Server Running on port: ${app.get('port')}`))