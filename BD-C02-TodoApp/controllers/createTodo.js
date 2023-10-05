// import the model
const Todo = require("../models/Todo");

// define route handler
exports.createTodo = async (req, res) => {
  try {
    // extract title and description from req body
    /** yaha se data fetch kiya */
    const { title, description } = req.body;

    // yaha se data insert kiya
    // create new todo object and insert in db
    const response = await Todo.create({ title, description });

    // send json response with success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};
