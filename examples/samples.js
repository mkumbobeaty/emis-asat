'use strict';


/* dependencies */
const _ = require('lodash');
const faker = require('@benmaruchu/faker');
const { randomPoint } = require('mongoose-geojson-schemas');


function sampleRole() {
  return {
    name: faker.unique(faker.hacker.ingverb),
    description: faker.lorem.paragraph()
  };
}

function sampleParty() {
  return {
    name: faker.address.county(),
    avatar: faker.image.avatar(),
    phone: faker.phone.phoneNumber(),
    landline: faker.phone.phoneNumber(),
    fax: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    about: faker.lorem.paragraph(),
    physicalAddress: faker.address.streetAddress(),
    postalAddress: faker.address.streetAddress(),
    location: randomPoint()
  };
}


exports.role = function role(size = 10) {
  size = size > 0 ? size : 10;
  return _.times(size, sampleRole);
};


exports.party = function party(size = 10) {
  size = size > 0 ? size : 10;
  return _.times(size, sampleParty);
};
