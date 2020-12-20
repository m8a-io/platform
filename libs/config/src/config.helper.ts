// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const configHelper = () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3000', 10)
})