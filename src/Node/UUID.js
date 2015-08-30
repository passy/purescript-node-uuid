'use script';

// module Node.UUID

var uuid = require('node-uuid');

exports.showuuid = function (ident) {
  return ident.toString();
};

exports.v1 = function () {
  return uuid.v1();
};

exports.v4 = function () {
  return uuid.v4();
};

exports.runUUID = function (UUID) {
  return UUID();
};

parse = function (str) {
  return uuid.parse(str);
};

unparse = function (buffer) {
  return uuid.unparse(buffer);
};
