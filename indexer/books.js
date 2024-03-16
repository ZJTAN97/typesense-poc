const fs = require("fs/promises");
const { bookSchema } = require("../schema/books");

const createBookSchema = (client) => {
  client
    .collections()
    .create(bookSchema)
    .then(function (data) {
      console.log(data);
    });
};

const populateBookCollection = async (client) => {
  const booksInJsonl = await fs.readFile("./tmp/books.jsonl");
  client.collections('books').documents().import(booksInJsonl);
};

module.exports = {
  createBookSchema,
  populateBookCollection,
};
