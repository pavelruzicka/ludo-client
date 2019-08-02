export const getAlphanumeric = length => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const output = [];

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);

    output.push(characters.charAt(index));
  }

  return output.join("");
};
