const deviceSizes = {
  xs: "767px",
  sm: "991px",
  xm: "1100px",
  md: "1199px",
  lg: "1200px",
};

const device = {
  xs: `screen and (max-width: ${deviceSizes.xs})`,
  xm: `screen and (max-width: ${deviceSizes.xm})`,
  sm: `screen and (max-width: ${deviceSizes.sm})`,
  md: `screen and (max-width: ${deviceSizes.md})`,
  lg: `screen and (min-width: ${deviceSizes.lg})`,
};

const theme = {
  device
};

export default theme;