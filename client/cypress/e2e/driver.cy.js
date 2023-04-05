const faker = require('faker');

const driverEmail = faker.internet.email();
const driverFirstName = faker.name.firstName();
const driverLastName = faker.name.lastName();
const riderEmail = faker.internet.email();
const riderFirstName = faker.name.firstName();
const riderLastName = faker.name.lastName();

describe('The driver dashboard', function () {
  before(function () {
    cy.addUser(riderEmail, riderFirstName, riderLastName, 'Rider');
    cy.addUser(driverEmail, driverFirstName, driverLastName, 'Driver');
  });

  it('Cannot be visited if the user is not a driver', function () {
    cy.intercept('POST', 'log_in').as('logIn');

    cy.logIn(riderEmail);

    cy.visit('/#/driver');
    cy.hash().should('eq', '#/');
  });

  it('Can be visited if the user is a driver', function () {
    cy.intercept('POST', 'log_in').as('logIn');

    cy.logIn(driverEmail);

    cy.visit('/#/driver');
    cy.hash().should('eq', '#/driver');
  });
});