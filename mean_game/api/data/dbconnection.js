const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
let connection = null;

const get = function() {

    return connection;
}

const set = function(connect) {
    connection = connect;
}

const open = function() {
    if (connection === null) {
        console.log("mongodb " + process.env.DB_URL);

        MongoClient.connect(process.env.DB_URL, function(err, client) {
            if (err) {
                console.error("error", err);
                return;
            }

            connection = client.db(process.env.DB_NAME);
            set(connection);
            //console.log("connection", connection);

            //     //console.log('get() ', get());

            // });
        });

    }
    console.log("connection: ", connection);
    return connection;
};

/*MongoClient.connect(process.env.DB_URL, function(err, client) {
            if (err) {
                console.error('error', err);
                return;
            }

            connection = client.db(process.env.DB_NAME);


            console.log('get() ', get());

        });*/

console.log("open(): ", get());

//module.exports.get = connection;