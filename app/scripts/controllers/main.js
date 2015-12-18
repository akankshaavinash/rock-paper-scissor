'use strict';

/**
 * @ngdoc function
 * @name paperScissorRockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paperScissorRockApp
 */
angular.module('paperScissorRockApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.player1Selection = "";
    $scope.player2Selection = "";
    $scope.tie = 0;
    $scope.player1Score = 0;
    $scope.player2Score = 0;
    $scope.isDisabledPly2 = true;

    $scope.disabledPly1 = false;
    $scope.disabledPly2 = false;

    var counter = 0;

    $scope.btnClickedPly1 = function(btnType, player){
    	$scope.getIcon(btnType, player);
    	$scope.player1Selection = btnType;
    	$scope.disabledPly1 = true;
    	$scope.disabledPly2 = false;
    };
    $scope.btnClickedPly2 = function(btnType, player){
    	$scope.getIcon(btnType, player);
    	$scope.player2Selection = btnType;
    	$scope.disabledPly1 = false;
    	$scope.disabledPly2 = true;
    	$scope.getScore($scope.player1Selection, $scope.player2Selection);

    	$scope.player2Selection = "";
    	$scope.player1Selection = "";
    	counter = counter+1;
    	if (counter === 5) {
    		counter = 0;
    		if ($scope.player1Score > $scope.player2Score) {
    			alert('Player 1 won');
    		}else if ($scope.player1Score === $scope.player2Score){
    			alert('Its a tie');
    		}else{
    			alert('Player 2 won');
    		}

    		$scope.tie = 0;
    		$scope.player1Score = 0;
    		$scope.player2Score = 0;

    	}
    };

    $scope.getIcon = function(btnType, player){
    	console.log(player);
    	var className = "."+player;
    	if (btnType === 'paper') {
    		$(className).empty();
    		$(className).append('<i class="fa fa-hand-paper-o"></i>');
    		
    	}else if (btnType === 'scissors') {
    		$(className).empty();
    		$(className).append('<i class="fa fa-scissors"></i>');
    	}else{
    		$(className).empty();
    		$(className).append('<i class="fa fa-hand-rock-o"></i>');
    	}
    }
    $scope.getScore = function(player1Selection, player2Selection){

    	if (player1Selection === player2Selection) {
    		$scope.tie =$scope.tie+1; 
    	}else if (player1Selection === 'paper' && player2Selection === 'scissors') {
    		$scope.player2Score = $scope.player2Score +1;
    	}else
    	if (player1Selection === 'paper' && player2Selection === 'rock') {
    		$scope.player1Score = $scope.player1Score +1;
    	}else
    	if (player1Selection === 'scissors' && player2Selection === 'paper') {
    		$scope.player1Score = $scope.player1Score +1;
    	}else
    	if (player1Selection === 'scissors' && player2Selection === 'rock') {
    		$scope.player2Score = $scope.player2Score +1;
    	}else
    	if (player1Selection === 'rock' && player2Selection === 'paper') {
    		$scope.player2Score = $scope.player2Score +1;
    	}else
    	if (player1Selection === 'rock' && player2Selection === 'scissors') {
    		$scope.player1Score = $scope.player1Score +1;
    	}
    }
  });

