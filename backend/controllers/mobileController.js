const asyncHandler = require("express-async-handler");
const fs = require("fs");
const path = require("path");
const slugify = require("slugify");
const Mobile = require("../models/mobileModel");

// get all Mobile
const getAllMobile = asyncHandler(async (req, res) => {
  const { price, search, sort } = req.query;
  const queryObject = {};

  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }

  if (price) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    // console.log(price);
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = price.replace(regEx, (match) => `-${operatorMap[match]}-`);
    const [value1, operator, value2] = filters.split("-");

    
    console.log(filters);
    // filters = filters.split(",").forEach((item) => {
    //   const [field, operator, value] = item.split("-");
    //   if (options.includes(field)) {
    //     queryObject.amounts[field] = { [operator]: Number(value) };
    //   }
    // });
  }

  let result = Mobile.find(queryObject);

  // sort
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  }

  // pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 20;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const mobiles = await result;
  res.status(200).json({ nbHits: mobiles.length, mobiles });
});

// get single mobile
const getSingleMobile = asyncHandler(async (req, res) => {
  const { mobileslug } = req.params;

  const mobile = await Mobile.findOne({ slug: mobileslug });

  if (!mobile) {
    res.status(400);
    throw new Error(`No mobile with id ${mobileslug}`);
  }

  res.status(200).json(mobile);
});

// create Mobile
const createMobile = asyncHandler(async (req, res) => {
  const { name, brand } = req.body;

  if ((!name, !brand)) {
    res.status(400);
    throw new Error("Please give name and model");
  }

  slugify.extend({ "+": " plus " });
  const slug = slugify(name, { lower: true });

  req.body.image = req.image;
  req.body.slug = slug;

  const mobile = await Mobile.create(req.body);

  res.status(200).json(mobile);
});

// update mobile
const updateMobile = asyncHandler(async (req, res) => {
  const { mobileslug } = req.params;
  const mobile = await Mobile.findOneAndUpdate({ slug: mobileslug }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!mobile) {
    res.status(400);
    throw new Error(`No mobile with id ${id}`);
  }

  res.status(200).json(mobile);
});

// delete mobile
const deleteMobile = asyncHandler(async (req, res) => {
  const { mobileslug } = req.params;
  const mobile = await Mobile.findOne({ slug: mobileslug });

  if (!mobile) {
    res.status(400);
    throw new Error(`No mobile with name ${req.params.id}`);
  }

  const filePath = path.join(__dirname, `../public/mobiles/${mobile.image}`);
  fs.unlink(filePath, (err) => console.log(err));
  await mobile.remove();

  res.status(200).json(mobile);
});

module.exports = {
  getAllMobile,
  getSingleMobile,
  createMobile,
  updateMobile,
  deleteMobile,
};
