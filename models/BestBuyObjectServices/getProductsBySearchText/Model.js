/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "getProductsBySearchText", "objectService" : "BestBuyObjectServices"};

    var setterFunctions = {
        searchTxt: function(val, state) {
            context["field"] = "searchTxt";
            context["metadata"] = (objectMetadata ? objectMetadata["searchTxt"] : null);
            state['searchTxt'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function getProductsBySearchText(defaultValues) {
        var privateState = {};
        context["field"] = "searchTxt";
        context["metadata"] = (objectMetadata ? objectMetadata["searchTxt"] : null);
        privateState.searchTxt = defaultValues ?
            (defaultValues["searchTxt"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchTxt"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "searchTxt": {
                get: function() {
                    context["field"] = "searchTxt";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchTxt"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchTxt, context);
                },
                set: function(val) {
                    setterFunctions['searchTxt'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.searchTxt = value ? (value["searchTxt"] ? value["searchTxt"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(getProductsBySearchText);

    //Create new class level validator object
    BaseModel.Validator.call(getProductsBySearchText);

    var registerValidatorBackup = getProductsBySearchText.registerValidator;

    getProductsBySearchText.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(getProductsBySearchText.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    //For Operation 'getProducstBySearchText' with service id 'getProductsBySearchText9270'
     getProductsBySearchText.getProducstBySearchText = function(params, onCompletion){
        return getProductsBySearchText.customVerb('getProducstBySearchText', params, onCompletion);
     };

    var relations = [];

    getProductsBySearchText.relations = relations;

    getProductsBySearchText.prototype.isValid = function() {
        return getProductsBySearchText.isValid(this);
    };

    getProductsBySearchText.prototype.objModelName = "getProductsBySearchText";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    getProductsBySearchText.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("BestBuyObjectServices", "getProductsBySearchText", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    getProductsBySearchText.clone = function(objectToClone) {
        var clonedObj = new getProductsBySearchText();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return getProductsBySearchText;
});