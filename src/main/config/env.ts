export const env = {
  universitiesAPI: process.env.UNIVERSITIES_API || '',
  cronRule: process.env.CRON_RULE || '',
  countryList: process.env.COUNTRY_LIST?.split(",") || []
}
