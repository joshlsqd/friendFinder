
const friends = require('../data/friends');
const questions = require('../data/questions');

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.send(friends);
    });

    app.get("/api/friends/questions", function (req, res) {
        return res.json(questions);
    });

    app.post("/api/friends", function(req, res) {
            let newUser = req.body;
            newUser.scores.forEach(function (score, i) {
                newUser.scores[i] = parseInt(score);
            });
            console.log(newUser);
            var matchName = '';
            var matchPic = '';
            var matchDiff = 100;
            friends.forEach(function (friend, i) {
                var friendDiff = 0;
                friend.scores.forEach(function (score, i) {
                    friendDiff += Math.abs(newUser.scores[i] - friend.scores[i]);
                });
                if(matchDiff > friendDiff) {
                    matchDiff = friendDiff;
                    matchName = friend.name;
                    matchPic = friend.photo;
                }
            });
            console.log(matchName+ ' '+ matchDiff);
            friends.push(newUser);
            var bestMatch = {
                name: matchName,
                pic: matchPic
            };
            res.json(bestMatch);
    });

};