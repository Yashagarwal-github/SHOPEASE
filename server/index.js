const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt =require("bcrypt")
const UserModel = require("../server/models/userModel");
const ShopModel = require("./models/shopModel");
const ProfileModel = require("./models/profileModal");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE","PUT"],
    credentials: true,
  })
);
app.use(cookieParser());

const databaseurl =
  "mongodb+srv://agarwalyash495:OokRw4997jXuOwgG@shopease-cluster.tbszgg2.mongodb.net/SHOPEASE_DB?retryWrites=true&w=majority";

mongoose.connect(databaseurl);
app.listen(3001, () => {
  console.log("Server is running");
});

// register endpoint
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    UserModel.findOne({ email: email }).then((user) => {
      if (user) {
        return res.json({
          Status:"oldUser"
        });
      } else {
        bcrypt
          .hash(password, 10)
          .then((hash) => {
            UserModel.create({ name, email, password: hash })
              .then((Users) => res.json(Users))
              .catch((err) => res.json(err));
          })
          .catch((err) => res.json(err));
      }
    });
  });

  app.post("/login",async (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email }).then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (response) {
            return res.json({
              Status: "Success",
              Name: user.name,
              Email: user.email,
              U_id:user._id,
            });
          } else {
            return res.json("The password is incorrect");
          }
        });
      } else {
        return res.json("No Such User exists");
      }
    });
  });

  app.post("/register-shop",async (req, res) => {
    const {
      first_name,
      last_name,
      email,
      number,
      shop_name,
      city,
      area,
      type,
      category, 
    } = req.body;
    const newShop = new ShopModel({
      first_name,
      last_name,
      email,
      number,
      shop_name,
      city,
      area,
      type,
      category,
    });
    try {
      // Save the document to the database
      await newShop.save();
  
      // Send a success response back to the client
      const response = {
        success: true,
        message: 'Shop registration successful',
        data: newShop,
      };
      res.status(200).json(response);
    } catch (error) {
      console.error('Shop registration failed:', error);
  
      // Send an error response to the client
      res.status(500).json({ success: false, message: 'Shop registration failed' });
    }

  });

  app.post("/change_password/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const { currentPassword, newPassword } = req.body;
      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const passwordMatch = await bcrypt.compare(currentPassword, user.password);
      if (passwordMatch) {
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedNewPassword;
        await user.save();
        res.status(200).json({ Status: "true" });
      } else {
        res.status(200).json({ Status: "false" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to change password' });
    }
  });


  // app.get('/get_profile', (req, res) => {
  //   ProfileModel.find({}, (err, details) => {
  //     if (err) {
  //       console.error(err);
  //       res.status(500).send('Internal Server Error');
  //     } else {
  //       res.json(details);
  //     }
  //   });
  // });

app.get('/shop-details', async (req, res) => {
  try {
    const shopDetails = await ShopModel.findOne({ /* Add your query here */ }).exec();

    if (shopDetails) {
      res.json(shopDetails);
    } else {
      res.status(404).send('Shop details not found.');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});



