// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '  844062822101-c6f68972dkft9mbk01q3mvbnhl8ieu27.apps.googleusercontent.com ',
        'clientSecret'  : ' NuHaPLbT65OJTu9eN6qKfvMA ',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};