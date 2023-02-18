module.exports = ({ config }) => {
  console.log(config.name); // prints 'My App'
  return {
    ...config,
    variant: process.env.HS_VARIANT == 'AGENT' ? 'AGENT' : 'OLDSCHOOL',
  };
};