/**
 * @desc    Health check
 * @route   GET /
 * @access  Public
 */
const getHealth = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API is healthy',
    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  getHealth,
};
