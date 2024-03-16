const Typesense = require("typesense");
const { bookSchema } = require("./schema/books");
const { createBookSchema, populateBookCollection } = require("./indexer/books");
const { searchByTitleSortByRating } = require("./queries/books");

// Main Client
const client = new Typesense.Client({
  nodes: [
    {
      host: "localhost", // For Typesense Cloud use xxx.a1.typesense.net
      port: 8108, // For Typesense Cloud use 443
      protocol: "http", // For Typesense Cloud use https
    },
  ],
  apiKey: "xyz",
  connectionTimeoutSeconds: 2,
});

// createBookSchema(client);
// populateBookCollection(client);

const searchParameters = {
  q: "harry potter",
  query_by: "title",
  sort_by: "ratings_count:desc",
};

searchByTitleSortByRating(client, searchParameters);
