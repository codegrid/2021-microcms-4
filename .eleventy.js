const dayjs = require('dayjs')
dayjs.locale('ja')
module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("formatDate", (date,format) => {
    return dayjs(date).format(format)
  });
   eleventyConfig.addFilter("optimizeImage", (imageUrl,size) => {
      return size
        ? `${imageUrl}?auto=compress&w=${size}`
        : `${imageUrl}?auto=compress`;
   });
};
