const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY
});

module.exports = async (_req, res) => {
  try {
    const dbs = await client.query(
      q.Map(
        q.Paginate(
          q.Match(
            q.Index("all-products"),
          )
        ),
        (ref) => q.Get(ref)
      )
    );
    res.status(200).json({products: dbs.data});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};