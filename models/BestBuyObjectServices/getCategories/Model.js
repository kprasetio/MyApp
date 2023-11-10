/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "getCategories", "objectService" : "BestBuyObjectServices"};

    var setterFunctions = {
        APIKEY: function(val, state) {
            context["field"] = "APIKEY";
            context["metadata"] = (objectMetadata ? objectMetadata["APIKEY"] : null);
            state['APIKEY'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        categoryId: function(val, state) {
            context["field"] = "categoryId";
            context["metadata"] = (objectMetadata ? objectMetadata["categoryId"] : null);
            state['categoryId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function getCategories(defaultValues) {
        var privateState = {};
        context["field"] = "APIKEY";
        context["metadata"] = (objectMetadata ? objectMetadata["APIKEY"] : null);
        privateState.APIKEY = defaultValues ?
            (defaultValues["APIKEY"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["APIKEY"], context) :
                null) :
            null;

        context["field"] = "categoryId";
        context["metadata"] = (objectMetadata ? objectMetadata["categoryId"] : null);
        privateState.categoryId = defaultValues ?
            (defaultValues["categoryId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["categoryId"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "APIKEY": {
                get: function() {
                    context["field"] = "APIKEY";
                    context["metadata"] = (objectMetadata ? objectMetadata["APIKEY"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.APIKEY, context);
                },
                set: function(val) {
                    setterFunctions['APIKEY'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "categoryId": {
                get: function() {
                    context["field"] = "categoryId";
                    context["metadata"] = (objectMetadata ? objectMetadata["categoryId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.categoryId, context);
                },
                set: function(val) {
                    setterFunctions['categoryId'].call(this, val, privateState);
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
            privateState.APIKEY = value ? (value["APIKEY"] ? value["APIKEY"] : null) : null;
            privateState.categoryId = value ? (value["categoryId"] ? value["categoryId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(getCategories);

    //Create new class level validator object
    BaseModel.Validator.call(getCategories);

    var registerValidatorBackup = getCategories.registerValidator;

    getCategories.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(getCategories.isValid(this, propName, val)) {
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
    //For Operation 'getCategories' with service id 'getCategories2384'
     getCategories.getCategories = function(params, onCompletion){
        return getCategories.customVerb('getCategories', params, onCompletion);
     };

    var relations = [];

    getCategories.relations = relations;

    getCategories.prototype.isValid = function() {
        return getCategories.isValid(this);
    };

    getCategories.prototype.objModelName = "getCategories";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    getCategories.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("BestBuyObjectServices", "getCategories", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    getCategories.clone = function(objectToClone) {
        var clonedObj = new getCategories();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return getCategories;
});