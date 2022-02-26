const req = require("express/lib/request");
const Item = require("../models/itemsModel");

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({
      status: "ok",
      message: "all items ",
      data: { items },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postItems = async (req, res) => {
  try {
    const items = await Item.create(req.body);
    res.status(201).json({
      status: "created",
      message: "item object has been created in database successfully",
      data: {
        items,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateItems = async (req, res) => {
  try {
    const items = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "updated",
      message: `the item with the id : ${req.params.id} is successfully updated`,
      data: { items },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteItems = async (req, res) => {
  try {
    const items = await Item.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      status: "ok",
      message: `the item with the id : ${req.params.id} is successfully deleted`,
      data: { items },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getOneItem = async (req, res) => {
  try {
    const item = await Item.findById({ _id: req.params.id });
    res.status(200).json({
      status: "ok",
      message: `the item with the id : ${req.params.id} is successfully fetched`,
      data: { item },
    });
  } catch (err) {
    console.log(err);
  }
};
