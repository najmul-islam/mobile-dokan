const asyncHandler = require("express-async-handler");
const path = require("path");

const imageUplaod = asyncHandler(async (req, res, next) => {
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
  let imgName;
  imgName =
    name
      .toLowerCase()
      .split(/[ .:;?!~,_`"&|()<>{}\[\]\r\n/\\]+/)
      .join("-") +
    "-" +
    Date.now() +
    extension;

  // file path
  const imgPath = path.join(__dirname, "../public", "images", imgName);

  await image.mv(imgPath);

  req.image = imgName;

  next();
});
module.exports = imageUplaod;
