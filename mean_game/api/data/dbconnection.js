const MongoClient = require("mongodb").MongoClient;

let connection = null;

const get = function() {

    return connection;
}



const open = function() {
    console.log('outside')
    if (connection == null) {
        console.log('inside')
        MongoClient.connect(process.env.DB_URL, function(err, client) {
            if (err) {
                console.error("error", err);
                return;
            }

            connection = client.db(process.env.DB_NAME);

        });

    }
};

module.exports = {
    open,
    get
}