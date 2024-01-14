// utils.js
export const importAllImages = (directory) => {
  let images = {};
  const context = require.context(`../public/${directory}`, false, /\.(jpg|jpeg|png)$/);

  context.keys().forEach((key) => {
    const imageName = key.replace('./', '');
    images[imageName] = context(key).default;
  });

  return images;
};
