import analysisWebService from './analysis-service';

export async function fetchSubscriberFile() {
  const analysisService = analysisWebService();
  const subscriberFileList = await analysisService
    .get('/spreadsheet')
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return subscriberFileList;
}
