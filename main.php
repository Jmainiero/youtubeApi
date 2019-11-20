<?php
if (!file_exists(__DIR__ . '/vendor/autoload.php')) {
    throw new Exception(sprintf('Please run "composer require google/apiclient:~2.0" in "%s"', __DIR__));
  }
  require_once __DIR__ . '/vendor/autoload.php';


function mostPopular($pageToken) {
$client = new Google_Client();
$client->setApplicationName('devJM');
$client->setScopes(['https://www.googleapis.com/auth/youtube.readonly']);
$client->setAuthConfig('client_secret.json');
$client->setAccessType('offline');
$service = new Google_Service_YouTube($client);


$queryParams = [
  'chart' => 'mostPopular',
  'regionCode' => 'US'
];

$response = $service->videos->listVideos('player,snippet', $queryParams);
$pageToken = $response['nextPageToken'];

$rData = array();
do{
  $queryParams = [
    'chart' => 'mostPopular',
    'regionCode' => 'US',
    'pageToken' => $pageToken
  ];
  $response = $service->videos->listVideos('player,snippet', $queryParams);
  $pageToken = $response['nextPageToken'];



  foreach($response['items'] as $videos){
    $tmpArray = array();
    // array_push($rData, $videos['player']['embedHtml']);
    array_push($tmpArray, $videos['snippet']['title'], $videos['snippet']['thumbnails']['high']['url'], $videos['snippet']['channelTitle'],$videos['player']['embedHtml']);
    array_push($rData, $tmpArray);
  }

  
} while (!is_null($pageToken));

  echo json_encode($rData);
}


function searchYT(){
  $client = new Google_Client();
$client->setApplicationName('devJM');
$client->setScopes(['https://www.googleapis.com/auth/youtube.readonly']);
$client->setAuthConfig('client_secret.json');
$client->setAccessType('offline');
$service = new Google_Service_YouTube($client);


$queryParams = [
  'maxResults' => 25,
  'q' => 'League of legends'
];

$response = $service->search->listSearch('snippet', $queryParams);
print_r($response);

}



if($_POST['values'] === 'mostPopular'){
    mostPopular();
} else if($_POST['values'] === 'searchYT'){
  searchYT();
}
