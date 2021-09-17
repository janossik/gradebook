const login = "teacher@react.com";
const password = "Hard123Hard";
const regE = /email/i;
const regP = /password/i;
describe("Gradebook app", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Renders unauthenticated app", () => {
    cy.findByPlaceholderText(regE).should("exist");
    cy.findByPlaceholderText(regP).should("exist");
  });
  it("Incorrect log in app", () => {
    cy.findByPlaceholderText(regE).click().type("student@react.com");
    cy.findByPlaceholderText(regP).click().type("Hard123Easy");
    cy.findByText(/log in/i).click();
    cy.findByPlaceholderText(regE).should("exist");
    cy.findByPlaceholderText(regP).should("exist");
  });
  it("Correct log in app", () => {
    cy.findByPlaceholderText(regE).click().type(login);
    cy.findByPlaceholderText(regP).click().type(password);
    cy.findByText(/log in/i).click();
    cy.findByText(/logged as/i).should("exist");
  });
});

export {};
