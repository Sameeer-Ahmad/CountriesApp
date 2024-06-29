const History = require("../models/History");

exports.addSearch = async (req, res) => {
  try {
    const { search } = req.body;
    const userId = req.user.id;
    let history = await History.findOne({ userId });
    if (!history) {
      history = new History({ userId, searches: [search] });
    } else {
      if (history.searches.includes(search)) {
        history.searches = history.searches.filter((s) => s !== search);
      }
      history.searches.unshift(search);
      if (history.searches.length > 5) {
        history.searches.pop();
      }
    }
    await history.save();
    res.status(201).json(history);
  } catch (error) {
    res.status(400).json({ error: "Error adding search history" });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const history = await History.findOne({ userId });
    res.status(200).json(history ? history.searches : []);
  } catch (error) {
    res.status(400).json({ error: "Error fetching search history" });
  }
};
