'use strict';

/* dependencies */
const path = require('path');
const _ = require('lodash');
const async = require('async');
const { expect } = require('chai');
const { Party } = require(path.join(__dirname, '..', '..'));

describe('Party', function () {

  before(function (done) {
    Party.remove(done);
  });

  describe('get', function () {

    let parties;

    before(function (done) {
      const fakes =
        _.map(Party.fake(32), function (jurisdiction) {
          return function (next) {
            jurisdiction.post(next);
          };
        });
      async
        .parallel(fakes, function (error, created) {
          parties = created;
          done(error, created);
        });
    });

    it('should be able to get without options', function (done) {

      Party
        .get(function (error, results) {
          expect(error).to.not.exist;
          expect(results).to.exist;
          expect(results.data).to.exist;
          expect(results.data).to.have.length(10);
          expect(results.total).to.exist;
          expect(results.total).to.be.equal(32);
          expect(results.limit).to.exist;
          expect(results.limit).to.be.equal(10);
          expect(results.skip).to.exist;
          expect(results.skip).to.be.equal(0);
          expect(results.page).to.exist;
          expect(results.page).to.be.equal(1);
          expect(results.pages).to.exist;
          expect(results.pages).to.be.equal(4);
          expect(results.lastModified).to.exist;
          expect(_.maxBy(results.data, 'updatedAt').updatedAt)
            .to.be.at.most(results.lastModified);
          done(error, results);
        });

    });

    it('should be able to get with options', function (done) {

      const options = { page: 1, limit: 20 };
      Party
        .get(options, function (error, results) {
          expect(error).to.not.exist;
          expect(results).to.exist;
          expect(results.data).to.exist;
          expect(results.data).to.have.length(20);
          expect(results.total).to.exist;
          expect(results.total).to.be.equal(32);
          expect(results.limit).to.exist;
          expect(results.limit).to.be.equal(20);
          expect(results.skip).to.exist;
          expect(results.skip).to.be.equal(0);
          expect(results.page).to.exist;
          expect(results.page).to.be.equal(1);
          expect(results.pages).to.exist;
          expect(results.pages).to.be.equal(2);
          expect(results.lastModified).to.exist;
          expect(_.maxBy(results.data, 'updatedAt').updatedAt)
            .to.be.at.most(results.lastModified);
          done(error, results);
        });

    });


    it('should be able to search with options', function (done) {

      const options = { filter: { q: parties[0].name } };
      Party
        .get(options, function (error, results) {
          expect(error).to.not.exist;
          expect(results).to.exist;
          expect(results.data).to.exist;
          expect(results.data).to.have.length.of.at.least(1);
          expect(results.total).to.exist;
          expect(results.total).to.be.at.least(1);
          expect(results.limit).to.exist;
          expect(results.limit).to.be.equal(10);
          expect(results.skip).to.exist;
          expect(results.skip).to.be.equal(0);
          expect(results.page).to.exist;
          expect(results.page).to.be.equal(1);
          expect(results.pages).to.exist;
          expect(results.pages).to.be.equal(1);
          expect(results.lastModified).to.exist;
          expect(_.maxBy(results.data, 'updatedAt').updatedAt)
            .to.be.at.most(results.lastModified);
          done(error, results);
        });

    });


    it('should parse filter options', function (done) {
      const options = { filter: { name: parties[0].name } };
      Party
        .get(options, function (error, results) {
          expect(error).to.not.exist;
          expect(results).to.exist;
          expect(results.data).to.exist;
          expect(results.data).to.have.length.of.at.least(1);
          expect(results.total).to.exist;
          expect(results.total).to.be.at.least(1);
          expect(results.limit).to.exist;
          expect(results.limit).to.be.equal(10);
          expect(results.skip).to.exist;
          expect(results.skip).to.be.equal(0);
          expect(results.page).to.exist;
          expect(results.page).to.be.equal(1);
          expect(results.pages).to.exist;
          expect(results.pages).to.be.equal(1);
          expect(results.lastModified).to.exist;
          expect(_.maxBy(results.data, 'updatedAt').updatedAt)
            .to.be.at.most(results.lastModified);
          done(error, results);
        });

    });

  });

  after(function (done) {
    Party.remove(done);
  });

});
