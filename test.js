// const mongoose = require("mongoose");

// const Schema = new mongoose.Schema({
//   name: String,
//   email: String,
// });
// const User = new mongoose.model("User", Schema);
// async function createUser(data) {
//   const user = new User({ ...data });
//   await user.save();
//   return user;
// }
// mongoose
//   .connect("mongodb://127.0.0.1:27017/test", {
//     serverSelectionTimeoutMS: 100,
//   })
//   .then(async () => {
//     console.log("Connected");
//     // createUser({ name: "farhan", email: "farhanvai@gmail.com" });
//     // createUser({ name: "shakil", email: "shakilvai@gmail.com" });
//     await createUser({ name: "farid", email: "faridvai@gmail.com" });
//     await createUser({ name: "saddam", email: "saddam@gmail.com" });
//     mongoose.connection.close();
//   })
//   .catch((e) => {
//     console.log(e);
//   });
