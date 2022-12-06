const asyncHandler = require("express-async-handler");
const path = require("path");
const slugify = require("slugify");

const mobileImg = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  const image = req.files.mobileImg;

  if (!image) {
    res.status(400);
    throw new Error("Please add a image");
  }

  const imgSize = image.size;
  const extension = path.extname(image.name);

  // check file format
  const allowedExtensions = /png|jpeg|jpg|gif/;
  if (!allowedExtensions.test(extension)) {
    res.status(400);
    throw new Error(
      `Image format ${extension} not supported. Allowed formats are: png, jpeg, jpg, gif.`
    );
  }

  // chekc size
  if (imgSize > 1000 * 1000 * 5) {
    res.status(400);
    throw new Error("File size error. file to big");
  }

  // change name
  slugify.extend({ "+": " plus " });

  const imgName = slugify(name, { lower: true }) + "-" + Date.now() + extension;

  // file path
  const imgPath = path.join(__dirname, "../public", "mobiles", imgName);

  await image.mv(imgPath);

  req.image = imgName;

  next();
});
module.exports = mobileImg;
