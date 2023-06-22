const url = "http//mylogger.io/log";

function log(messege) {
  //sends an HTTP request
  console.log(messege);
}

module.exports.log = log;
