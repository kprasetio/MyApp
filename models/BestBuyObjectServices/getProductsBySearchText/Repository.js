define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function getProductsBySearchTextRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	getProductsBySearchTextRepository.prototype = Object.create(BaseRepository.prototype);
	getProductsBySearchTextRepository.prototype.constructor = getProductsBySearchTextRepository;

	//For Operation 'getProducstBySearchText' with service id 'getProductsBySearchText9270'
	getProductsBySearchTextRepository.prototype.getProducstBySearchText = function(params, onCompletion){
		return getProductsBySearchTextRepository.prototype.customVerb('getProducstBySearchText', params, onCompletion);
	};

	return getProductsBySearchTextRepository;
})