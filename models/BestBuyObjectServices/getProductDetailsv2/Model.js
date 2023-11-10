/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "getProductDetailsv2", "objectService" : "BestBuyObjectServices"};

    var setterFunctions = {
        images: function(val, state) {
            context["field"] = "images";
            context["metadata"] = (objectMetadata ? objectMetadata["images"] : null);
            state['images'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sku: function(val, state) {
            context["field"] = "sku";
            context["metadata"] = (objectMetadata ? objectMetadata["sku"] : null);
            state['sku'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function getProductDetailsv2(defaultValues) {
        var privateState = {};
        context["field"] = "images";
        context["metadata"] = (objectMetadata ? objectMetadata["images"] : null);
        privateState.images = defaultValues ?
            (defaultValues["images"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["images"], context) :
                null) :
            null;

        context["field"] = "sku";
        context["metadata"] = (objectMetadata ? objectMetadata["sku"] : null);
        privateState.sku = defaultValues ?
            (defaultValues["sku"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sku"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "images": {
                get: function() {
                    context["field"] = "images";
                    context["metadata"] = (objectMetadata ? objectMetadata["images"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.images, context);
                },
                set: function(val) {
                    setterFunctions['images'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sku": {
                get: function() {
                    context["field"] = "sku";
                    context["metadata"] = (objectMetadata ? objectMetadata["sku"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sku, context);
                },
                set: function(val) {
                    setterFunctions['sku'].call(this, val, privateState);
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
            privateState.images = value ? (value["images"] ? value["images"] : null) : null;
            privateState.sku = value ? (value["sku"] ? value["sku"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(getProductDetailsv2);

    //Create new class level validator object
    BaseModel.Validator.call(getProductDetailsv2);

    var registerValidatorBackup = getProductDetailsv2.registerValidator;

    getProductDetailsv2.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(getProductDetailsv2.isValid(this, propName, val)) {
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
    //For Operation 'getProductDetails' with service id 'getProductDetailsv25101'
     getProductDetailsv2.getProductDetails = function(params, onCompletion){
        return getProductDetailsv2.customVerb('getProductDetails', params, onCompletion);
     };

    var relations = [];

    getProductDetailsv2.relations = relations;

    getProductDetailsv2.prototype.isValid = function() {
        return getProductDetailsv2.isValid(this);
    };

    getProductDetailsv2.prototype.objModelName = "getProductDetailsv2";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    getProductDetailsv2.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("BestBuyObjectServices", "getProductDetailsv2", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    getProductDetailsv2.clone = function(objectToClone) {
        var clonedObj = new getProductDetailsv2();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return getProductDetailsv2;
});