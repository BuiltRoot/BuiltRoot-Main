// /api/projects.js
module.exports = (req, res) => {
  res.status(200).json({
    projects: [
      "SafeGA",
      "SafeSed",
      "WisdomTeeth.care",
      "DentalHire",
      "OralSurgeryCenterOfSeattle (clone)"
    ]
  });
};
