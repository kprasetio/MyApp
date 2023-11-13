define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function addExampleRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	addExampleRepository.prototype = Object.create(BaseRepository.prototype);
	addExampleRepository.prototype.constructor = addExampleRepository;

	//For Operation 'addExample' with service id 'addExample8078'
	addExampleRepository.prototype.addExample = function(params, onCompletion){
		return addExampleRepository.prototype.customVerb('addExample', params, onCompletion);
	};

	return addExampleRepository;
})