const User = require('../models/user');
const { comparePasswords, createJWT, hashPassword } = require('../auth/auth')
const createNewUser = async (req, res, next) => {
  const hash = await hashPassword(req.body.password);
    const user = await User.create({
        username: req.body.username,
        password: hash
    });

  const token = createJWT(user)
  res.json({ token: token })
}

const signin = async (req, res) => {
    const user = await User.findOne({ username: req.body.username });

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.send("Invalid username or password");
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};

module.exports = {
    createNewUser,
    signin
}

