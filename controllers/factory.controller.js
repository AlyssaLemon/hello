var Factory = require("../models/factory.js");

// test
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.factory_create = function(req, res) {
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

exports.factory_details = function(req, res) {
  Factory.findById(req.params.id, function(err, factory) {
    if (err) return next(err);
    res.send(factory);
  });
};

exports.factory_update = function(req, res) {
  Factory.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err
    // factory
  ) {
    if (err) return next(err);
    res.send("Factory udpated.");
  });
};

exports.factory_delete = function(req, res) {
  Factory.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
