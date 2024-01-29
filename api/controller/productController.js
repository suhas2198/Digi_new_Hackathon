import productModel from "../model/productModel.js";

export const createProduct = async (req, res) => {
  try {
    const { name, packSize, category, mrp, images } = req.body;
    console.log(req.body);

    //saving objct body into mongodb using save method

    const product = new productModel({
      name,
      packSize,
      category,
      mrp,
      images,
    }).save();
    console.log(product);
    res.status(201).send({
      success: true,
      message: "We have successfully created product",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(501).send({
      success: false,
      message: "Error in featching products",
    });
  }
};

// GET request for  to featch all products

export const getProduct = async (req, res) => {
  try {
    //saving objct body into mongodb using save method

    const product = await productModel.find();

    console.log(product);
    res.status(201).send({
      success: true,
      message: "We have successfully featched product",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(501).send({
      success: false,
      message: "Error in featching products",
      Error: error,
    });
  }
};

//// GET request to featch one product

export const getProductById = async (req, res) => {
  try {
    //grtting objct from mongodb using findbyId method

    const product = await productModel.findById(req.params.productId);

    console.log(product);
    res.status(201).send({
      success: true,
      message: "We have successfully featched product  by id",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(501).send({
      success: false,
      message: "Error in featching product by id",
      Error: error,
    });
  }
};

//Update product

export const updateProduct = async (req, res) => {
  try {
    const { name, packSize, category, mrp, images } = req.body;
    console.log(req.body);
    //updating objct from mongodb using findbyId method

    const product = await productModel.findByIdAndUpdate(
      req.params.productId,
      req.body
    );

    console.log(product);
    res.status(201).send({
      success: true,
      message: "We have successfully updated product ",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(501).send({
      success: false,
      message: "Error in updating product by id",
      Error: error,
    });
  }
};

//Delete product

export const deleteProduct = async (req, res) => {
  try {
    const { name, packSize, category, mrp, images } = req.body;
    console.log(req.body);
    //updating objct from mongodb using findbyId method

    const product = await productModel.findByIdAndDelete(req.params.productId);

    console.log(product);
    res.status(201).send({
      success: true,
      message: "We have successfully deleted product ",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(501).send({
      success: false,
      message: "Error in deleting product by id",
      Error: error,
    });
  }
};
