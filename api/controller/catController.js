import catModel from "../model/catModel.js";

// Creating products

export const createCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    // creating object and saving it

    const category = new catModel({
      name,
      description,
    }).save();

    res.status(201).send({
      success: true,
      message: "category of product added succesfully",
      category,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      messgage: "error while creating category",
    });
  }
};
// Get all categories

export const getCategory = async (req, res) => {
  try {
    // creating object and saving it

    const category = await catModel.find();

    res.status(201).send({
      success: true,
      message: "category of product faetched succesfully",
      category,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      messgage: "error while getting category of products",
    });
  }
};

// getting single products

export const getCategoryById = async (req, res) => {
  const { name, description } = req.body;

  try {
    // creating object and saving it

    const category =await catModel.findById(req.params.categoryId);

    res.status(201).send({
      success: true,
      message: "category of single product featched succesfully",
      category,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      messgage: "error while creating category",
    });
  }
};

export const updateCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    // creating object and saving it

    const category =await catModel.findByIdAndUpdate(
      req.params.categoryId,
      req.body
    );

    res.status(201).send({
      success: true,
      message: "category updated succesfully",
      category,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      messgage: "error while creating category",
    });
  }
};

export const deleteCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    // creating object and saving it

    const category =await catModel.findByIdAndDelete(req.params.categoryId);
    console.log(category)

    res.status(201).send({
      success: true,
      message: "category by id deleted succesfully",
      category,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      messgage: "error while deleting category",
    });
  }
};
