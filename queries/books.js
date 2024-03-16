const searchByTitleSortByRating = async (client, searchParameters) => {
  const data = await client
    .collections("books")
    .documents()
    .search(searchParameters);
  console.log(data);
};

module.exports = {
  searchByTitleSortByRating,
};
