// api/projects.js
export default function handler(req, res) {
  res.status(200).json({
    projects: [
      "SafeGA",
      "SafeSed",
      "WisdomTeeth.care",
      "DentalHire",
      "OralSurgeryCenterOfSeattle (clone)"
    ],
    ts: new Date().toISOString()
  });
}
