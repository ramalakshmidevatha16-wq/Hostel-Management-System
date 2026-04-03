
const bcrypt = require("bcrypt");

// Replace this with the password you want to hash
const plainPassword = "24B11CS276";

async function hashPassword(password) {
  try {
    const hashed = await bcrypt.hash(password, 10); // 10 = salt rounds
    console.log("Hashed password:", hashed);
  } catch (err) {
    console.error(err);
  }
}

hashPassword(plainPassword);