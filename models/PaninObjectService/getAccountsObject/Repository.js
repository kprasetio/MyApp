define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function getAccountsObjectRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	getAccountsObjectRepository.prototype = Object.create(BaseRepository.prototype);
	getAccountsObjectRepository.prototype.constructor = getAccountsObjectRepository;

	//For Operation 'getAccounts' with service id 'getAccounts7839'
	getAccountsObjectRepository.prototype.getAccounts = function(params, onCompletion){
		return getAccountsObjectRepository.prototype.customVerb('getAccounts', params, onCompletion);
	};

	return getAccountsObjectRepository;
})