/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "path", "objectService" : "BestBuyObjectServices"};

    var setterFunctions = {
        pathId: function(val, state) {
            context["field"] = "pathId";
            context["metadata"] = (objectMetadata ? objectMetadata["pathId"] : null);
            state['pathId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        pathName: function(val, state) {
            context["field"] = "pathName";
            context["metadata"] = (objectMetadata ? objectMetadata["pathName"] : null);
            state['pathName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function path(defaultValues) {
        var privateState = {};
        context["field"] = "pathId";
        context["metadata"] = (objectMetadata ? objectMetadata["pathId"] : null);
        privateState.pathId = defaultValues ?
            (defaultValues["pathId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["pathId"], context) :
                null) :
            null;

        context["field"] = "pathName";
        context["metadata"] = (objectMetadata ? objectMetadata["pathName"] : null);
        privateState.pathName = defaultValues ?
            (defaultValues["pathName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["pathName"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "pathId": {
                get: function() {
                    context["field"] = "pathId";
                    context["metadata"] = (objectMetadata ? objectMetadata["pathId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.pathId, context);
                },
                set: function(val) {
                    setterFunctions['pathId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "pathName": {
                get: function() {
                    context["field"] = "pathName";
                    context["metadata"] = (objectMetadata ? objectMetadata["pathName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.pathName, context);
                },
                set: function(val) {
                    setterFunctions['pathName'].call(this, val, privateState);
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
            privateState.pathId = value ? (value["pathId"] ? value["pathId"] : null) : null;
            privateState.pathName = value ? (value["pathName"] ? value["pathName"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(path);

    //Create new class level validator object
    BaseModel.Validator.call(path);

    var registerValidatorBackup = path.registerValidator;

    path.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(path.isValid(this, propName, val)) {
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
    var relations = [];

    path.relations = relations;

    path.prototype.isValid = function() {
        return path.isValid(this);
    };

    path.prototype.objModelName = "path";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    path.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("BestBuyObjectServices", "path", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    path.clone = function(objectToClone) {
        var clonedObj = new path();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return path;
});