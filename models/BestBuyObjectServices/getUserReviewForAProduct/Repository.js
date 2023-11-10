define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function getUserReviewForAProductRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	getUserReviewForAProductRepository.prototype = Object.create(BaseRepository.prototype);
	getUserReviewForAProductRepository.prototype.constructor = getUserReviewForAProductRepository;

	//For Operation 'getUserReviewForAProduct' with service id 'getUserReviewForAProduct5999'
	getUserReviewForAProductRepository.prototype.getUserReviewForAProduct = function(params, onCompletion){
		return getUserReviewForAProductRepository.prototype.customVerb('getUserReviewForAProduct', params, onCompletion);
	};

	return getUserReviewForAProductRepository;
})