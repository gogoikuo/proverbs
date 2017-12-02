"use strict";

// proverbs defined in local script.
const proverbs = [
    // ... add pre-defined proverbs, here.
    '虎穴に入らずんば虎子を得ず',
    '名を取るより実を取れ',
    '二兎を追う者は一兎をも得ず',
    '一寸の光陰軽んずべからず',
    '錦を着て夜行くが如し',
    '武士は食わねど高楊枝'
];

// read Alexa SDK.
const Alexa = require('alexa-sdk');

// define the handler.
exports.handler = function(event, context, callback) {
    // define our handers
    var handlers = {
        // request with no intent.
        'LaunchRequest': function () {
            this.emit('AMAZON.HelpIntent'); // just call AMAZON.HelpIntent
        },
        // help intent.
        'AMAZON.HelpIntent': function () {
            this.emit(':tell', '諺を紹介します。諺を教えてと聞いてください。');
        },
        // main intent.
        'ProverbIntent': function () {
            var ans = proverbs[Math.floor(Math.random()*proverbs.length)]; // random answer.
            this.emit(':tell', ans); // the response.
            console.log(ans); // log it.
        }
    };

    // initialize Alexa SDK.
    var alexa = Alexa.handler(event, context);
    alexa.appId = process.env.APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
