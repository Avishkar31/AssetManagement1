const Asset = require("../models/asset");

exports.tagAsset = async (req, res, next) => {
  const asset = new Asset({ ...req.body });
  let response;
  try {
    response = await asset.save();
  } catch (err) {
    err.statusCode = 500;
    return next(err);
  }
  return await res
    .status(201)
    .json({ message: "Asset tagged successfully", details: response });
};
exports.getAllAssets = async (req, res, next) => {
  const { nodeName } = req.query;

  let query = {};

  if (nodeName) {
    const regex = new RegExp(nodeName, "i"); // Case-insensitive regex search
    query = {
      $or: [{ nodeName: regex }, { serialNumber: regex }, { issuedTo: regex }]
    };
  }

  let allAssets;
  try {
    allAssets = await Asset.find(query).sort({ updatedAt: -1 });
  } catch (err) {
    err.statusCode = 500;
    return next(err);
  }
  return res.json({ message: "success", assets: allAssets });
};
