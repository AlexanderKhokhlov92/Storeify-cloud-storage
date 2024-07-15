const { Router } = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");
const router = new Router();
const authMiddleware = require("../middleware/auth.middlewarre");
const fileService = require("../services/fileService");
const File = require("../models/File");

// Регистрация
router.post(
  "/registration",
  [
    check("email", "Incorrect email").isEmail(),
    check(
      "password",
      "Password must be longer than 4 and shorter than 16 symbols"
    ).isLength({ min: 4, max: 16 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Invalid request", errors: errors.array() });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with email ${email} already exists` });
      }

      const hashPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashPassword });
      await user.save();
      await fileService.createDir(new File({ user: user.id, name: "" }));
      return res.json({ message: "User was created" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Server error" });
    }
  }
);

// Логин
router.post(
  "/login",
  [
    check("email", "Incorrect email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Invalid request", errors: errors.array() });
      }

      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isPassValid = await bcrypt.compare(password, user.password);
      if (!isPassValid) {
        return res.status(400).json({ message: "Invalid password" });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          diskSpace: user.diskSpace,
          usedSpace: user.usedSpace,
          avatar: user.avatar,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Server error" });
    }
  }
);

//auth

router.get("/auth", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        diskSpace: user.diskSpace,
        usedSpace: user.usedSpace,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send({ message: "Server error" });
  }
});

module.exports = router;
