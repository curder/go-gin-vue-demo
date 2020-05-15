const phoneValidator = (value) => /1[3|4|7|5]\d{9}$/.test(value);

export default {
  phoneValidator,
};
