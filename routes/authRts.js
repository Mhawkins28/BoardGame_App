const router = require("express").Router();
const passport = require("passport");

router.get("/auth", function (req, res) {
  res.render("users/login");
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/games",
    failureRedirect: "/auth",
  })
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/games");
  });
});

module.exports = router;