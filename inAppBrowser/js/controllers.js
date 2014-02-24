angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('newsCtrl', function($scope, AllAppService, $rootScope) {
	//$rootScope.scalable="initial-scale=1, minimum-scale=1, user-scalable=yes, width=device-width";
  // $rootScope.isPageView = false;
  $scope.allIsFav=[];
  $scope.allNotFav=[];
  var all=[];

  if(localStorage.allNews)
  {
	  all = angular.fromJson(localStorage.allNews);

    angular.forEach(all, function(value, key){
      if(value.isFav==true)
        $scope.allIsFav.push(value);
      else
        $scope.allNotFav.push(value);
    });
  }
  else
  {
    all = AllAppService.allNews();
    $scope.allNotFav = all;
  }

  $scope.onFav= function(event, id)
  {
	  event.stopPropagation();

    /*delete $scope.allIsFav;
    $scope.allIsFav=null;
    $scope.allIsFav=[];
    delete $scope.allNotFav;
    $scope.allNotFav=null;
    $scope.allNotFav=[];*/

    $scope.allIsFav=[];
    $scope.allNotFav=[];


	  all[id].isFav = !all[id].isFav;
	  localStorage.allNews = angular.toJson(all);

    angular.forEach(all, function(value, key){
      if(value.isFav==true)
        $scope.allIsFav.push(value);
      else
        $scope.allNotFav.push(value);
    });

    // location.reload();
  }

  var ref = null;
  $scope.onTap = function(url)
  {
	  //document.addEventListener("deviceready", onDeviceReady, false);
    var ref = window.open(url, '_system', 'location=yes');
    ref.addEventListener('loaderror', isLoadError);
    ref.addEventListener('exit', isLoadExit);
  }

  function isLoadError(event) 
  { 
    // ref.close();
    alert("Can not load this website.");
  }

  function isLoadExit(event)
  {
    ref.removeEventListener('loaderror', isLoadError);
    ref.removeEventListener('exit', iabClose);
  }
})

.controller('phonesCtrl', function($scope, AllAppService, $rootScope, $location) {
  $rootScope.scalable="initial-scale=1, minimum-scale=1, user-scalable=yes, width=device-width";
  $rootScope.isPageView = false;
 	
  $scope.all = AllAppService.allPhones();
  $scope.isFav= false;
  $scope.onFav= function()
  {
	  $scope.isFav= !$scope.isFav;
  }
})

.controller('jobsCtrl', function($scope, AllAppService, $rootScope) {
	$rootScope.scalable="initial-scale=1, minimum-scale=1, user-scalable=yes, width=device-width";
  $rootScope.isPageView = false;
  
  $scope.all = AllAppService.allJobs();
  if(localStorage.allJobs)
	  $scope.all = angular.fromJson(localStorage.allJobs);
  $scope.onFav= function(event, id)
  {
	  event.stopPropagation();
	  $scope.all[id].isFav = !$scope.all[id].isFav;
	  localStorage.allJobs = angular.toJson($scope.allJobs);
  }
  $scope.onTap = function(url)
  {
	  alert(11);
  }
})

.controller('aboutCtrl', function($scope) {
  $rootScope.scalable="initial-scale=1, minimum-scale=1, user-scalable=yes, width=device-width";
  $rootScope.isPageView = false;
})

.controller('pageViewCtrl', function($scope, $rootScope,$sce) {
  $rootScope.scalable="initial-scale=1, minimum-scale=1, user-scalable=yes";
  $rootScope.isPageView = true;

	$rootScope.pageViewUrl = $sce.trustAsResourceUrl($rootScope.pageViewUrl);
	$scope.heigthIframe = window.innerHeight - 50 + "px"; 
  
    document.addEventListener("deviceready", onDeviceReady, false);
    // device APIs are available
    function onDeviceReady() {
    var optionsmenu = new OptionsMenu({
      id: "optionsmenu",
      items: [
        [ {
          label: "Settings",
          image: "img/icon1.png",
          action: onSettings
        }, 
        {
          label: "Help",
          image: "img/icon2.png",
          action: onHelp
        } ]
      ]
    });
    }

    var onSettings = function() {
        alert(1);
    //alert($location.path());
    };
 
    var onHelp = function() {
        alert(2);
    };
})