import Product from "../model/Product";

export const AddProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    category: req.body.category,
    userId: req.body.userId,
  });

  try {
    const data = await product.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const GetProduct = async (req, res) => {
  try {
    const data = await Product.find(req.body);
    if (data.length > 0) {
      res.send(data);
    } else {
      res.status(201).json(" data is not found");
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// app.delete("/product/:id", async (req, resp) => {
//     let result = await Product.deleteOne({ _id: req.params.id });
//     resp.send(result)
// }),

//     app.get("/product/:id", async (req, resp) => {
//         let result = await Product.findOne({ _id: req.params.id })
//         if (result) {
//             resp.send(result)
//         } else {
//             resp.send({ "result": "No Record Found." })
//         }
//     })

// app.put("/product/:id", async (req, resp) => {
//     let result = await Product.updateOne(
//         { _id: req.params.id },
//         { $set: req.body }
//     )
//     resp.send(result)
// });

// app.put("/product/:id", async (req, resp) => {
//     let result = await Product.updateOne(
//         { _id: req.params.id },
//         { $set: req.body }
//     )
//     resp.send(result)
// });

// app.get("/search/:key", async (req, resp) => {
//     let result = await Product.find({
//         "$or": [
//             {
//                 name: { $regex: req.params.key }
//             },
//             {
//                 company: { $regex: req.params.key }
//             },
//             {
//                 category: { $regex: req.params.key }
//             }
//         ]
//     });
//     resp.send(result);
// })
