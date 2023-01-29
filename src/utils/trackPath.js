"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ga_4_react_1 = require("ga-4-react");
var ga4react = new ga_4_react_1.GA4React(process.env.TRACKING_ID).initialize();
var trackPathForAnalytics = function (data) {
  var path = data.path,
    search = data.search,
    title = data.title;
  ga4react
    .then(function (ga) {
      ga.pageview(path, search, title);
    })
    .catch(function (err) {
      return console.error("Analytics failed: ".concat(err));
    });
};
exports.default = trackPathForAnalytics;
