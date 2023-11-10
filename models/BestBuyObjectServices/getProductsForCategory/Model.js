/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "getProductsForCategory", "objectService" : "BestBuyObjectServices"};

    var setterFunctions = {
        categoryPathId: function(val, state) {
            context["field"] = "categoryPathId";
            context["metadata"] = (objectMetadata ? objectMetadata["categoryPathId"] : null);
            state['categoryPathId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function getProductsForCategory(defaultValues) {
        var privateState = {};
        context["field"] = "categoryPathId";
        context["metadata"] = (objectMetadata ? objectMetadata["categoryPathId"] : null);
        privateState.categoryPathId = defaultValues ?
            (defaultValues["categoryPathId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["categoryPathId"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "categoryPathId": {
                get: function() {
                    context["field"] = "categoryPathId";
                    context["metadata"] = (objectMetadata ? objectMetadata["categoryPathId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.categoryPathId, context);
                },
                set: function(val) {
                    setterFunctions['categoryPathId'].call(this, val, privateState);
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
            privateState.categoryPathId = value ? (value["categoryPathId"] ? value["categoryPathId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(getProductsForCategory);

    //Create new class level validator object
    BaseModel.Validator.call(getProductsForCategory);

    var registerValidatorBackup = getProductsForCategory.registerValidator;

    getProductsForCategory.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(getProductsForCategory.isValid(this, propName, val)) {
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
    //For Operation 'getProductsForCategory' with service id 'getProductsForCategory8917'
     getProductsForCategory.getProductsForCategory = function(params, onCompletion){
        return getProductsForCategory.customVerb('getProductsForCategory', params, onCompletion);
     };

    var relations = [];

    getProductsForCategory.relations = relations;

    getProductsForCategory.prototype.isValid = function() {
        return getProductsForCategory.isValid(this);
    };

    getProductsForCategory.prototype.objModelName = "getProductsForCategory";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    getProductsForCategory.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("BestBuyObjectServices", "getProductsForCategory", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    getProductsForCategory.clone = function(objectToClone) {
        var clonedObj = new getProductsForCategory();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return getProductsForCategory;
});