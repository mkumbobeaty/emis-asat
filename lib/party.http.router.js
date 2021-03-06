'use strict';


/**
 * @apiDefine Party Party
 *
 * @apiDescription An entity (e.g municipal) responsible in disaster management.
 *
 * It may be a self managed entity or division within another
 * entity(party) in case there is hierarchy.
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @author Benson Maruchu <benmaruchu@gmail.com>
 * @license MIT
 * @since  0.1.0
 * @version 1.0.0
 * @public
 */


/**
 * @apiDefine Party
 * @apiSuccess {String} _id Unique party identifier
 * @apiSuccess {String} name Unique human readable name of a party
 * @apiSuccess {String} phone Primary mobile phone number used to
 * contact a party
 * @apiSuccess {String} [landline] Primary main-line(or fixed-line) phone number
 * used to contact a party
 * @apiSuccess {String} [fax] Primary fax number used to contact a party
 * @apiSuccess {String} email Primary email address used to contact
 * party a party
 * @apiSuccess {String} [website] Primary website url(or link) of a party.
 * @apiSuccess {String} [about] A brief summary about a party if available i.e
 * additional details that clarify what a party do.
 * @apiSuccess {String} [physicalAddress] Primary physical address of
 * party office.
 * @apiSuccess {String} [postalAddress] Primary postal address of
 * party office.
 * @apiSuccess {String} [locale] Defines the party's language, region and any
 * special variant preferences.
 * @apiSuccess {Point} [location] A geo-location coordinates of a
 * party main office.
 * @apiSuccess {Object} [roles] Assignable or given roles that
 * permits(or give access rights) to a party
 * @apiSuccess {String} [roles.type] Human readable category of a role
 * @apiSuccess {String} [roles.name] Unique human readable name of a role
 * @apiSuccess {Date} createdAt Date when party was created
 * @apiSuccess {Date} updatedAt Date when party was last updated
 *
 */


/**
 * @apiDefine Parties
 * @apiSuccess {Object[]} data List of parties
 * @apiSuccess {String} data._id Unique party identifier
 * @apiSuccess {String} data.name Unique human readable name of a party
 * @apiSuccess {String} data.phone Primary mobile phone number used to
 * contact a party
 * @apiSuccess {String} [data.landline] Primary main-line(or fixed-line)
 * phone number used to contact a party
 * @apiSuccess {String} [data.fax] Primary fax number used to contact a party
 * @apiSuccess {String} data.email Primary email address used to contact
 * party a party
 * @apiSuccess {String} [data.website] Primary website url(or link) of a party.
 * @apiSuccess {String} [data.about] A brief summary about a party if available
 * i.e additional details that clarify what a party do.
 * @apiSuccess {String} [data.physicalAddress] Primary physical address of
 * party office.
 * @apiSuccess {String} [data.postalAddress] Primary postal address of
 * party office.
 * @apiSuccess {String} [data.locale] Defines the party's language, region
 * and any special variant preferences.
 * @apiSuccess {Point} [data.location] A geo-location coordinates of a
 * party main office.
 * @apiSuccess {Object} [data.roles] Assignable or given roles that
 * permits(or give access rights) to a party
 * @apiSuccess {String} [data.roles.type] Human readable category of a role
 * @apiSuccess {String} [data.roles.name] Unique human readable name of a role
 * @apiSuccess {Date} data.createdAt Date when party was created
 * @apiSuccess {Date} data.updatedAt Date when party was last updated
 * @apiSuccess {Number} total Total number of party
 * @apiSuccess {Number} size Number of parties returned
 * @apiSuccess {Number} limit Query limit used
 * @apiSuccess {Number} skip Query skip/offset used
 * @apiSuccess {Number} page Page number
 * @apiSuccess {Number} pages Total number of pages
 * @apiSuccess {Date} lastModified Date and time at which latest party
 * was last modified
 *
 */


/**
 * @apiDefine PartySuccessResponse
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "_id": "5b5d92da476363251e13e0f4",
 *   "name": "Bedfordshire",
 *   "phone": "(943) 902-6124",
 *   "landline": "661-575-8596",
 *   "fax": "945.952.6154 x857",
 *   "email": "arely.kuvalis@gmail.com",
 *   "website": "julian.name",
 *   "about": "Labore aut corrupti et. Doloribus animi quidem ratione.",
 *   "physicalAddress": "511 Bobbie Station",
 *   "postalAddress": "81940 Ondricka Row",
 *   "location": {
 *     "type": "Point",
 *     "coordinates": [
 *       -74.32270414519917,
 *       50.86875012362422
 *     ]
 *   },
 *   "updatedAt": "2018-07-29T10:11:38.110Z",
 *   "createdAt": "2018-07-29T10:11:38.110Z"
 * }
 *
 */


/**
 * @apiDefine PartiesSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "data": [
 *     {
 *       "_id": "5b5d92da476363251e13e0f4",
 *       "name": "Bedfordshire",
 *       "phone": "(943) 902-6124",
 *       "landline": "661-575-8596",
 *       "fax": "945.952.6154 x857",
 *       "email": "arely.kuvalis@gmail.com",
 *       "website": "julian.name",
 *       "about": "Labore aut corrupti et. Doloribus animi quidem ratione.",
 *       "physicalAddress": "511 Bobbie Station",
 *       "postalAddress": "81940 Ondricka Row",
 *       "location: {
 *         "type": "Point",
 *         "coordinates": [
 *           -74.32270414519917,
 *           50.86875012362422
 *         ]
 *       },
 *       "updatedAt": "2018-07-29T10:11:38.110Z",
 *       "createdAt": "2018-07-29T10:11:38.110Z"
 *     }
 *   ],
 *   "total": 20,
 *   "size": 10,
 *   "limit": 10,
 *   "skip": 0,
 *   "page": 1,
 *   "pages": 2,
 *   "lastModified": "2018-07-29T10:11:38.111Z"
 * }
 */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const { env } = require('@codetanzania/majifix-common');
const Router = require('@lykmapipo/express-common').Router;


/* local constants */
const { API_VERSION } = env;
const PATH_SINGLE = '/parties/:id';
const PATH_LIST = '/parties';


/* declarations */
const Party = require(path.join(__dirname, 'party.model'));
const router = new Router({
  version: API_VERSION
});


/**
 * @api {get} /parties List Parties
 * @apiVersion 1.0.0
 * @apiName GetParties
 * @apiGroup Party
 * @apiDescription Returns a list of parties
 * @apiUse RequestHeaders
 * @apiUse Parties
 *
 * @apiUse RequestHeadersExample
 * @apiUse PartiesSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_LIST, function getParties(request, response, next) {

  //obtain request options
  const options = _.merge({}, request.mquery);

  Party
    .get(options, function onGetParties(error, results) {

      //forward error
      if (error) {
        next(error);
      }

      //handle response
      else {
        response.status(200);
        response.json(results);
      }

    });

});



/**
 * @api {post} /parties Create New Party
 * @apiVersion 1.0.0
 * @apiName PostParty
 * @apiGroup Party
 * @apiDescription Create new party
 * @apiUse RequestHeaders
 * @apiUse Party
 *
 * @apiUse RequestHeadersExample
 * @apiUse PartySuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.post(PATH_LIST, function postParty(request, response, next) {

  //obtain request body
  const body = _.merge({}, request.body);

  Party
    .post(body, function onPostParty(error, created) {

      //forward error
      if (error) {
        next(error);
      }

      //handle response
      else {
        response.status(201);
        response.json(created);
      }

    });

});



/**
 * @api {get} /parties/:id Get Existing Party
 * @apiVersion 1.0.0
 * @apiName GetParty
 * @apiGroup Party
 * @apiDescription Get existing party
 * @apiUse RequestHeaders
 * @apiUse Party
 *
 * @apiUse RequestHeadersExample
 * @apiUse PartySuccessResponse
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_SINGLE, function getParty(request, response, next) {

  //obtain request options
  const options = _.merge({}, request.mquery);

  //obtain party id
  options._id = request.params.id;

  Party
    .getById(options, function onGetParty(error, found) {

      //forward error
      if (error) {
        next(error);
      }

      //handle response
      else {
        response.status(200);
        response.json(found);
      }

    });

});


/**
 * @api {patch} /parties/:id Patch Existing Party
 * @apiVersion 1.0.0
 * @apiName PatchParty
 * @apiGroup Party
 * @apiDescription Patch existing party
 * @apiUse RequestHeaders
 * @apiUse Party
 *
 * @apiUse RequestHeadersExample
 * @apiUse PartySuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.patch(PATH_SINGLE, function patchParty(request, response, next) {

  //obtain party id
  const _id = request.params.id;

  //obtain request body
  const patches = _.merge({}, request.body);

  Party
    .patch(_id, patches, function onPatchParty(error, patched) {

      //forward error
      if (error) {
        next(error);
      }

      //handle response
      else {
        response.status(200);
        response.json(patched);
      }

    });

});



/**
 * @api {put} /parties/:id Put Existing Party
 * @apiVersion 1.0.0
 * @apiName PutParty
 * @apiGroup Party
 * @apiDescription Put existing party
 * @apiUse RequestHeaders
 * @apiUse Party
 *
 * @apiUse RequestHeadersExample
 * @apiUse PartySuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.put(PATH_SINGLE, function putParty(request, response, next) {

  //obtain party id
  const _id = request.params.id;

  //obtain request body
  const updates = _.merge({}, request.body);

  Party
    .put(_id, updates, function onPutParty(error, updated) {

      //forward error
      if (error) {
        next(error);
      }

      //handle response
      else {
        response.status(200);
        response.json(updated);
      }

    });

});



/**
 * @api {delete} /parties/:id Delete Existing Party
 * @apiVersion 1.0.0
 * @apiName DeleteParty
 * @apiGroup Party
 * @apiDescription Delete existing party
 * @apiUse RequestHeaders
 * @apiUse Party
 *
 * @apiUse RequestHeadersExample
 * @apiUse PartySuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.delete(PATH_SINGLE, function deleteParty(request, response, next) {

  //obtain party id
  const _id = request.params.id;

  Party
    .del(_id, function onDeleteParty(error, deleted) {

      //forward error
      if (error) {
        next(error);
      }

      //handle response
      else {
        response.status(200);
        response.json(deleted);
      }

    });

});


/* expose party router */
module.exports = router;
