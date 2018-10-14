var Factory = require("../models/factory.model.js");

// test
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.factory_create = function(req, res, next) {
  var factory = new Factory({
    name: req.body.name
  });

  factory.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Factory Created successfully");
  });
};

exports.factory_details = function(req, res, next) {
  Factory.findById(req.params.id, function(err, factory) {
    if (err) return next(err);
    res.send(factory);
  });
};

exports.factory_update = function(req, res, next) {
  Factory.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    factory
  ) {
    if (err) return next(err);
    res.send("Factory udpated.");
  });
};

exports.factory_delete = function(req, res, next) {
  Factory.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
