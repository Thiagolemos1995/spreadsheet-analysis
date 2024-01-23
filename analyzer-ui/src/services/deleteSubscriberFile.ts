import analysisWebService from './analysis-service';

export async function deleteSubscriberFile(id: string) {
  const analysisService = analysisWebService();
  const subscriberFileList = await analysisService
    .delete('/spreadsheet', { params: { id } })
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return subscriberFileList;
}
