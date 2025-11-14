export const asyncHandler = (fnc) => async (req, res, next) => {
  try {
    await fnc(req, res, next);
  } catch (err) {
    next(err);
  }
};

