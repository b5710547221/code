const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = 'EAAFtBTUm2OYBAKgzZCeRGxXvNZAyT8QasLADC3mlcAQRwQSqrqBlpPge91qGXWZCTvlyZCfHikan4t5uahaxILy5ZAiieQqLjsUVNVd0hjcBugooOPEt0XOiUJAZBWJibiiEwmGGm1nkpnjeeWNPptNl3w90UAXRsZD';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const account = new AdAccount('act_1949893145298458');

console.log(account.id) // fields can be accessed as properties
account
  .createCampaign(
    [Campaign.Fields.Id],
    {
      [Campaign.Fields.name]: 'Page likes campaign', // Each object contains a fields map with a list of fields supported on that object.
      [Campaign.Fields.status]: Campaign.Status.paused,
      [Campaign.Fields.objective]: Campaign.Objective.page_likes
    }
  )
  .then((result) => {
    console.log("finished");
  })
  .catch(console.error);