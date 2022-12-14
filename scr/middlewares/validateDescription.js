// const validateDescription = (req, res, next) => {
//   const { description } = req.body;
//   if (!description) {
//     return res.status(400).json({ message: 'O campo description é obrigatório' });
//     }
//     if (!description.createdAt) {
//       return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
//     }
//     if (!description.rating) {
//       return res.status(400).json({ message: 'O campo rating é obrigatório' });
//     }
//     if (!description.difficulty) {
//       return res.status(400).json({ message: 'O campo difficulty é obrigatório' });
//     }

//     next();
// };

const validateCases = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json(
      { message: `O campo ${value} é obrigatório` },
    );
  }
};

const validateDescription = (req, res, next) => {
  const { description } = req.body;

  return validateDescription(description, res, 'description')
    || validateDescription(description.createdAt, res, 'createdAt')
    || validateDescription(description.rating, res, 'rating')
    || validateDescription(description.difficulty, res, 'difficulty')
    || next();
};

module.exports = {
  validateDescription,
  validateCases,
};