/*global define*/
define(function () {
    'use strict';

    // Permissions

    // A permissions structure can support checking
    // against subscriptions prior to allowing them 
    // to clear. This enforces a flexible security 
    // layer for your application.

    var permissions = {

        'homeController#index': {
            homeController: true
        },

        'aboutController#index': {
            aboutController: true
        }

    };

    permissions.validate = function(subscriber, channel){
        var test = permissions[channel] && permissions[channel][subscriber];
        return test === undefined ? false : test;
    };

    return permissions;

});