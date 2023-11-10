define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function getProductsForCategoryRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	getProductsForCategoryRepository.prototype = Object.create(BaseRepository.prototype);
	getProductsForCategoryRepository.prototype.constructor = getProductsForCategoryRepository;

	//For Operation 'getProductsForCategory' with service id 'getProductsForCategory8917'
	getProductsForCategoryRepository.prototype.getProductsForCategory = function(params, onCompletion){
		return getProductsForCategoryRepository.prototype.customVerb('getProductsForCategory', params, onCompletion);
	};

	return getProductsForCategoryRepository;
})