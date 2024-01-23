import analysisWebService from './analysis-service';

export async function uploadSubscriberFile(file: Express.Multer.File) {
  const analysisService = analysisWebService();
  const subscriberFileList = await analysisService
    .post('/spreadsheet', file)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return subscriberFileList;
}
