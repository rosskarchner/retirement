'use strict';

var graphView = require( './views/graph-view' );
var questionsView = require( './views/questions-view' );
var nextStepsView = require( './views/next-steps-view' );
var tooltipsView = require( './views/tooltips-view' );

var app = {
  init: function() {
    graphView.init();
    questionsView.init();
    nextStepsView.init();
    tooltipsView.init();
  }
};

$( document ).ready( function() {
  app.init();
} );
