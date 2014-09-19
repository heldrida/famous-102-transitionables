/* globals define */
define(function(require, exports, module) {
    'use strict';

    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Transitionable = require('famous/transitions/Transitionable');

    var mainContext = Engine.createContext();

    // creates transitionable with array value
    // storing the align and origin states
    var alignOrigin = new Transitionable([0, 0]);

    var surface = new Surface({
        size: [undefined, 100],
        properties: {
            backgroundColor: '#FA5C4F'
        }
    });

    var modifier = new Modifier({
        align: function () {
            // transition align from [0, 0] and [0, 1]
            return alignOrigin.get();
        },
        origin: function () {
            // transition origin from [0, 0] and [0, 1]
            return alignOrigin.get();
        }
    });

    mainContext.add(modifier).add(surface);

    // transitioning the alignOrigin state
    alignOrigin.set([0, 1], {
        duration: 1000,
        curve: 'easeInOut'
    });

});
