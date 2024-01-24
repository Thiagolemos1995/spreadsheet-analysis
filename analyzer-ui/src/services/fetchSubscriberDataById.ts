import analysisWebService from './analysis-service';

export async function fetchSubscriberFileById(id: string) {
  console.log(id);
  const analysisService = analysisWebService();
  const subscriberFileData = await analysisService
    .get(`/spreadsheet`, { params: { id } })
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return subscriberFileData;
}
