define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function getCategoriesRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	getCategoriesRepository.prototype = Object.create(BaseRepository.prototype);
	getCategoriesRepository.prototype.constructor = getCategoriesRepository;

	//For Operation 'getCategories' with service id 'getCategories2384'
	getCategoriesRepository.prototype.getCategories = function(params, onCompletion){
		return getCategoriesRepository.prototype.customVerb('getCategories', params, onCompletion);
	};

	return getCategoriesRepository;
})