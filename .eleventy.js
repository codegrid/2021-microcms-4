const dayjs = require('dayjs')
dayjs.locale('ja')
module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("formatDate", (date,format) => {
    return dayjs(date).format(format)
  });
   eleventyConfig.addFilter("optimizeImage", (imageUrl) => {
     return `${imageUrl}?auto=compress,format`;
   });
};
