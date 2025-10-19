// controllers/userController.js

let users = [
    { id: 1, name: "Nguyễn Hữu Trọng", email: "huutrongk24@gmail.com" },
    { id: 2, name: "Dương Mạnh Khương", email: "duongmanhkhuongcmu@gmail.com" }
  ];
  
  // GET /users
  const getUsers = (req, res) => {
    res.json(users);
  };
  
  // POST /users
  const createUser = (req, res) => {
    const { name, email } = req.body;
  
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }
  
    const newUser = {
      id: users.length + 1,
      name,
      email
    };
  
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  module.exports = { getUsers, createUser };
  