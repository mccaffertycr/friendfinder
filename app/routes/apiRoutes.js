var friendsData = require('../data/friends.js');

module.exports = function(app) {
    
    app.get('/api/friends', function(req, res){
		  res.json(friendsData);
    });

    app.post('/api/friends', function(req, res) {
        console.log(req.body);
        var userScore = req.body.scores.reduce((a, b) => a + b, 0);
        res.json(bestMatch(userScore));
        friendsData.push(req.body);
    });    

    function bestMatch(totalScore) {
        for (var i = 0; i < friendsData.length; i++) {
            var friendScore = friendsData[i].scores.reduce((a ,b) => a + b, 0);
            if ((friendScore - totalScore) <= 5 || (totalScore - friendScore) <= 5) {
                return friendsData[i];
            } 
        }
        return friendsData[0];
    }

}