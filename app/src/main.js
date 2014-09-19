/* globals define */
define(function(require, exports, module) {
    'use strict';

    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var Modifier = require('famous/core/Modifier');
    var Easing = require('famous/transitions/Easing');
    var Transitionable = require('famous/transitions/Transitionable');

    var mainContext = Engine.createContext();

    var transitionable = new Transitionable(0);

    var surface = new Surface({
        properties: {
            backgroundColor: '#FA5C4F'
        }
    });

    var modifier = new Modifier({
        size: [200, 200],
        origin: [0.5, 0.5],
        align: [0.5, 0.5],
        transform: function () {
            // cache value of transitionable.get()
            var scale = transitionable.get();
            return Transform.scale(scale, scale, 1);
        },
        opacity: function () {
            return transitionable.get();
        }
    });

    mainContext.add(modifier).add(surface);

    // transitioning he transitionable from 0 to 1
    // with the transition definition
    transitionable.set(1, {
        duration: 2000,
        curve: Easing.outBack
    });

});
