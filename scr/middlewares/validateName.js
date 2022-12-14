const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json(
      { message: 'O campo name é obrigatório' },
    );
  }

  if (name.length < 1) {
    return res.status(400).json(
      { message: 'O campo name deve ter pelo menos 1 caracter' },
    );
  }

  next();
};

module.exports = validateName;
