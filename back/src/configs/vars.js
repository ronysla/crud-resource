module.exports = {
    PORT: process.env.PORT || 3000,
    mongoUri: process.env.DATABASE_URL || '',
    allowedOrigins: process.env.ALLO_WED_ORIGINS
}
