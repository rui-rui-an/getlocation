module.exports = {
  tabWidth: 2, // 指定每个缩进级别的空格数<int>，默认2
  useTabs: false, // 用制表符而不是空格缩进行<bool>，默认false
  printWidth: 300, // 一行的字符数，如果超过会进行换行，默认为80
  singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
  endOfLine: 'auto', // 避免报错delete (cr)的错
  proseWrap: 'always',
  semi: true, // 不加分号
  trailingComma: 'none', // 结尾处不加逗号
  htmlWhitespaceSensitivity: 'ignore' // 忽略'>'下落问题
};
