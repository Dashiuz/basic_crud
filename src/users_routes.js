const express = require("express");
const router = express.Router({ strict: true });
const users = require("./schema_users");

/**GET */
router.get("/users", async (req, res) => {
  users.find({}, (err, result) => {
    if (!err) {
      res.status(200).send({ data: result });
    } else {
      return res
        .status(500)
        .send({ error: "la warandinga no está funcionando", data: [] });
    }
  });
});

/**GET BY _ID*/
router.get("/users/:_id", async (req, res) => {
  let _id = req.params._id;

  await users
    .findById({ _id })
    .select({})
    .exec((err, user) => {
      if (!err) {
        return res.status(200).send({
          data: user,
          url: req.url,
          msg: "la warandinga está funcionando :)",
        });
      } else {
        return res.status(500).send({ msg: "error", error: err, url: req.url });
      }
    });

  // await users.findById({ _id: _id }, (err, user) => {
  //   if (!err) {
  //     return res.status(200).send({
  //       data: user,
  //       url: req.url,
  //       msg: "la warandinga está funcionando :)",
  //     });
  //   } else {
  //     return res.status(500).send({ msg: "error", error: err, url: req.url });
  //   }
  // });
});

/**POST */
router.post("/users", async (req, res) => {
  let users_model = new users(req.body);

  users_model
    .save()
    .then((success) => {
      return res.status(200).send({ data: success });
    })
    .catch((ex) => {
      return res.status(500).send({ data: [], err: ex });
    });
});

/**PUT */
router.put("/users/:_id", async (req, res) => {
  let body = req.body;

  await users.findByIdAndUpdate(
    { _id: req.params._id },
    { $set: body },
    { upsert: true, new: true },
    (err, user) => {
      if (!err) {
        return res.status(200).send({
          data: user,
          url: req.url,
          msg: "la warandinga está funcionando :)",
        });
      } else {
        return res.status(500).send({ msg: "error", error: err, url: req.url });
      }
    }
  );
});

/**DELETE */
router.delete("/users/:_id", async (req, res) => {
  users.findByIdAndDelete({ _id: req.params._id }, (err, result) => {
    if (!err) {
      res
        .status(200)
        .send({ data: result, msg: "the user has been deleted!..." });
    } else {
      return res
        .status(500)
        .send({ error: "la warandinga no está funcionando", data: [] });
    }
  });
});

// C - CREATE = POST
// R - READ = GET
// U - UPDATE = PUT
// D - DELETE = DELETE

module.exports = router;
