define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function getProductDetailsv2Repository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	getProductDetailsv2Repository.prototype = Object.create(BaseRepository.prototype);
	getProductDetailsv2Repository.prototype.constructor = getProductDetailsv2Repository;

	//For Operation 'getProductDetails' with service id 'getProductDetailsv25101'
	getProductDetailsv2Repository.prototype.getProductDetails = function(params, onCompletion){
		return getProductDetailsv2Repository.prototype.customVerb('getProductDetails', params, onCompletion);
	};

	return getProductDetailsv2Repository;
})