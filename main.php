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


// Define service object for making API requests.
$service = new Google_Service_YouTube($client);

$queryParams = [
    'chart' => 'mostPopular',
    'regionCode' => 'US'
];

if($pageToken != null){
  print_r($queryParams);
  $queryParams['pageToken'] = $pageToken;
}

$response = $service->videos->listVideos('player,snippet', $queryParams);

$pageToken = $response['nextPageToken'];
$rData = array();

foreach($response['items'] as $videos){
  $tmpArray = array();
  // array_push($rData, $videos['player']['embedHtml']);
  array_push($tmpArray, $videos['snippet']['title'], $videos['snippet']['thumbnails']['high']['url'], $videos['snippet']['channelTitle']);
  array_push($rData, $tmpArray);
}
array_push($rData, array("pageToken"=>$pageToken));
echo json_encode($rData);
}

if($_POST['values'] === 'mostPopular'){
  if(!empty($_POST['pageToken'])){
    echo $_POST['pageToken'];
    mostPopular($_POST['pageToken']);
  } else {
    mostPopular();
  }
}

