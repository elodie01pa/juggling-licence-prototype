const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post("/juggling-balls-answers", function(req,res){

  var jugglingBalls = req.session.data['juggling-balls']

if (jugglingBalls == "3 or more") {
  res.redirect("/juggling-trick")
} else {
res.redirect("/ineligible")

}
})

module.exports = router
