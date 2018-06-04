//if(process.env.DB_PORT_27017_TCP_ADDR) {
//    module.exports = { "db_url": "mongodb://root:example@" + process.env.DB_PORT_27017_TCP_ADDR + ":27017/" }
//}else{
//    module.exports = { "db_url": "mongodb://root:example@localhost:27017/" }
//}

//if (process.env.DB_PORT_27017_TCP_ADDR) {
//    const url = "mongodb://root:example@" + process.env.DB_PORT_27017_TCP_ADDR + ":27017/";
//} else {
//    const url = "mongodb://root:example@localhost:27017/";
//}

module.exports = {
    "db_url": "mongodb://root:example@localhost:27017/"
}