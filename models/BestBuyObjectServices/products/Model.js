/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "products", "objectService" : "BestBuyObjectServices"};

    var setterFunctions = {
        customerReviewAverage: function(val, state) {
            context["field"] = "customerReviewAverage";
            context["metadata"] = (objectMetadata ? objectMetadata["customerReviewAverage"] : null);
            state['customerReviewAverage'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        longDescription: function(val, state) {
            context["field"] = "longDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["longDescription"] : null);
            state['longDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        onSale: function(val, state) {
            context["field"] = "onSale";
            context["metadata"] = (objectMetadata ? objectMetadata["onSale"] : null);
            state['onSale'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        productId: function(val, state) {
            context["field"] = "productId";
            context["metadata"] = (objectMetadata ? objectMetadata["productId"] : null);
            state['productId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        productName: function(val, state) {
            context["field"] = "productName";
            context["metadata"] = (objectMetadata ? objectMetadata["productName"] : null);
            state['productName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        regularPrice: function(val, state) {
            context["field"] = "regularPrice";
            context["metadata"] = (objectMetadata ? objectMetadata["regularPrice"] : null);
            state['regularPrice'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        salePrice: function(val, state) {
            context["field"] = "salePrice";
            context["metadata"] = (objectMetadata ? objectMetadata["salePrice"] : null);
            state['salePrice'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        shortDescription: function(val, state) {
            context["field"] = "shortDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["shortDescription"] : null);
            state['shortDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sku: function(val, state) {
            context["field"] = "sku";
            context["metadata"] = (objectMetadata ? objectMetadata["sku"] : null);
            state['sku'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function products(defaultValues) {
        var privateState = {};
        context["field"] = "customerReviewAverage";
        context["metadata"] = (objectMetadata ? objectMetadata["customerReviewAverage"] : null);
        privateState.customerReviewAverage = defaultValues ?
            (defaultValues["customerReviewAverage"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["customerReviewAverage"], context) :
                null) :
            null;

        context["field"] = "longDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["longDescription"] : null);
        privateState.longDescription = defaultValues ?
            (defaultValues["longDescription"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["longDescription"], context) :
                null) :
            null;

        context["field"] = "onSale";
        context["metadata"] = (objectMetadata ? objectMetadata["onSale"] : null);
        privateState.onSale = defaultValues ?
            (defaultValues["onSale"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["onSale"], context) :
                null) :
            null;

        context["field"] = "productId";
        context["metadata"] = (objectMetadata ? objectMetadata["productId"] : null);
        privateState.productId = defaultValues ?
            (defaultValues["productId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["productId"], context) :
                null) :
            null;

        context["field"] = "productName";
        context["metadata"] = (objectMetadata ? objectMetadata["productName"] : null);
        privateState.productName = defaultValues ?
            (defaultValues["productName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["productName"], context) :
                null) :
            null;

        context["field"] = "regularPrice";
        context["metadata"] = (objectMetadata ? objectMetadata["regularPrice"] : null);
        privateState.regularPrice = defaultValues ?
            (defaultValues["regularPrice"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["regularPrice"], context) :
                null) :
            null;

        context["field"] = "salePrice";
        context["metadata"] = (objectMetadata ? objectMetadata["salePrice"] : null);
        privateState.salePrice = defaultValues ?
            (defaultValues["salePrice"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["salePrice"], context) :
                null) :
            null;

        context["field"] = "shortDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["shortDescription"] : null);
        privateState.shortDescription = defaultValues ?
            (defaultValues["shortDescription"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["shortDescription"], context) :
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
            "customerReviewAverage": {
                get: function() {
                    context["field"] = "customerReviewAverage";
                    context["metadata"] = (objectMetadata ? objectMetadata["customerReviewAverage"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.customerReviewAverage, context);
                },
                set: function(val) {
                    setterFunctions['customerReviewAverage'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "longDescription": {
                get: function() {
                    context["field"] = "longDescription";
                    context["metadata"] = (objectMetadata ? objectMetadata["longDescription"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.longDescription, context);
                },
                set: function(val) {
                    setterFunctions['longDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "onSale": {
                get: function() {
                    context["field"] = "onSale";
                    context["metadata"] = (objectMetadata ? objectMetadata["onSale"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.onSale, context);
                },
                set: function(val) {
                    setterFunctions['onSale'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "productId": {
                get: function() {
                    context["field"] = "productId";
                    context["metadata"] = (objectMetadata ? objectMetadata["productId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.productId, context);
                },
                set: function(val) {
                    setterFunctions['productId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "productName": {
                get: function() {
                    context["field"] = "productName";
                    context["metadata"] = (objectMetadata ? objectMetadata["productName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.productName, context);
                },
                set: function(val) {
                    setterFunctions['productName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "regularPrice": {
                get: function() {
                    context["field"] = "regularPrice";
                    context["metadata"] = (objectMetadata ? objectMetadata["regularPrice"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.regularPrice, context);
                },
                set: function(val) {
                    setterFunctions['regularPrice'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "salePrice": {
                get: function() {
                    context["field"] = "salePrice";
                    context["metadata"] = (objectMetadata ? objectMetadata["salePrice"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.salePrice, context);
                },
                set: function(val) {
                    setterFunctions['salePrice'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "shortDescription": {
                get: function() {
                    context["field"] = "shortDescription";
                    context["metadata"] = (objectMetadata ? objectMetadata["shortDescription"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.shortDescription, context);
                },
                set: function(val) {
                    setterFunctions['shortDescription'].call(this, val, privateState);
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
            privateState.customerReviewAverage = value ? (value["customerReviewAverage"] ? value["customerReviewAverage"] : null) : null;
            privateState.longDescription = value ? (value["longDescription"] ? value["longDescription"] : null) : null;
            privateState.onSale = value ? (value["onSale"] ? value["onSale"] : null) : null;
            privateState.productId = value ? (value["productId"] ? value["productId"] : null) : null;
            privateState.productName = value ? (value["productName"] ? value["productName"] : null) : null;
            privateState.regularPrice = value ? (value["regularPrice"] ? value["regularPrice"] : null) : null;
            privateState.salePrice = value ? (value["salePrice"] ? value["salePrice"] : null) : null;
            privateState.shortDescription = value ? (value["shortDescription"] ? value["shortDescription"] : null) : null;
            privateState.sku = value ? (value["sku"] ? value["sku"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(products);

    //Create new class level validator object
    BaseModel.Validator.call(products);

    var registerValidatorBackup = products.registerValidator;

    products.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(products.isValid(this, propName, val)) {
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

    products.relations = relations;

    products.prototype.isValid = function() {
        return products.isValid(this);
    };

    products.prototype.objModelName = "products";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    products.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("BestBuyObjectServices", "products", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    products.clone = function(objectToClone) {
        var clonedObj = new products();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return products;
});