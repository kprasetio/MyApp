/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "getUserReviewForAProduct", "objectService" : "BestBuyObjectServices"};

    var setterFunctions = {
        searchSKU: function(val, state) {
            context["field"] = "searchSKU";
            context["metadata"] = (objectMetadata ? objectMetadata["searchSKU"] : null);
            state['searchSKU'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function getUserReviewForAProduct(defaultValues) {
        var privateState = {};
        context["field"] = "searchSKU";
        context["metadata"] = (objectMetadata ? objectMetadata["searchSKU"] : null);
        privateState.searchSKU = defaultValues ?
            (defaultValues["searchSKU"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchSKU"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "searchSKU": {
                get: function() {
                    context["field"] = "searchSKU";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchSKU"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchSKU, context);
                },
                set: function(val) {
                    setterFunctions['searchSKU'].call(this, val, privateState);
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
            privateState.searchSKU = value ? (value["searchSKU"] ? value["searchSKU"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(getUserReviewForAProduct);

    //Create new class level validator object
    BaseModel.Validator.call(getUserReviewForAProduct);

    var registerValidatorBackup = getUserReviewForAProduct.registerValidator;

    getUserReviewForAProduct.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(getUserReviewForAProduct.isValid(this, propName, val)) {
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
    //For Operation 'getUserReviewForAProduct' with service id 'getUserReviewForAProduct5999'
     getUserReviewForAProduct.getUserReviewForAProduct = function(params, onCompletion){
        return getUserReviewForAProduct.customVerb('getUserReviewForAProduct', params, onCompletion);
     };

    var relations = [];

    getUserReviewForAProduct.relations = relations;

    getUserReviewForAProduct.prototype.isValid = function() {
        return getUserReviewForAProduct.isValid(this);
    };

    getUserReviewForAProduct.prototype.objModelName = "getUserReviewForAProduct";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    getUserReviewForAProduct.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("BestBuyObjectServices", "getUserReviewForAProduct", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    getUserReviewForAProduct.clone = function(objectToClone) {
        var clonedObj = new getUserReviewForAProduct();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return getUserReviewForAProduct;
});