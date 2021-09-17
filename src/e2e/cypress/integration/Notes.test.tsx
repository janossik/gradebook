const login = "teacher@react.com";
const password = "Hard123Hard";
const regE = /email/i;
const regP = /password/i;

const title = `Tempor est voluptate ea voluptate.`;
const content = `Veniam magna occaecat culpa id elit elit ullamco velit est magna aliqua cillum eu velit.`;

describe("Notes view", () => {
  beforeEach(() => {
    //Log in app
    cy.visit("/");
    cy.findByPlaceholderText(regE).click().type(login);
    cy.findByPlaceholderText(regP).click().type(password);
    cy.findByText(/log in/i).click();
  });
  it("Allows to create a new note and next delete the note", () => {
    cy.visit("/notes");
    //Add note
    cy.findByPlaceholderText(/title/i).click().type(title);
    cy.findByPlaceholderText(/content/i)
      .click()
      .type(content);
    cy.findByText(/add/i).click();
    //Remove note
    cy.findAllByText(title).should("exist");
    cy.findAllByText(content).should("exist");
    cy.findByLabelText("show-notes").click();
    cy.findAllByText(title)
      .first()
      .parent()
      .findByLabelText(/delete/i)
      .click();
    //Check was remove note
    cy.findAllByText(title).should("not.exist");
    cy.findAllByText(content).should("not.exist");
  });
});

export {};
