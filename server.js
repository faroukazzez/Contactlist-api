const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");

const app = express();
app.use(express.json());
const mongoURL = "mongodb://localhost:27017";
const dbName = "MangasStore";

MongoClient.connect(mongoURL, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  else {
    console.log("db connected");
    const db = client.db(dbName);

    //add
    app.post("/addManga", (req, res) => {
      const newManga = req.body;
      db.collection("mangas").insertOne(newManga, (err, data) => {
        if (err) res.send(err);
        res.send(data);
      });
    });

    //get
    app.get("/listMangas", (req, res) => {
      db.collection("mangas")
        .find()
        .toArray((err, data) => {
          if (err) res.send(err);
          else res.send(data);
        });
    });

    //delete
    app.delete("/delete/:id", (req, res) => {
      const idMangaToDelete = ObjectID(req.params.id);
      console.log(idMangaToDelete);
      db.collection("mangas").findOneAndDelete(
        { _id: idMangaToDelete },
        (err, data) => {
          if (err) res.send(err);
          else res.send(data);
        }
      );
    });

    //update
    app.put("/update/:id", (req, res) => {
      const idMangaToUpdate = ObjectID(req.params.id);
      const mangaUpdated = req.body;
      db.collection("mangas").findOneAndUpdate(
        { _id: idMangaToUpdate },
        { $set: { ...mangaUpdated } },
        (err, data) => {
          if (err) res.send(err);
          else res.send(data);
        }
      );
    });
  }
});

app.listen(5000, (err) => {
  if (err) console.log(err);
  else console.log("Server running on port 5000");
});