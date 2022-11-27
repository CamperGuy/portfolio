describe("All pages can load successfully", () => {
	it("/", () => {
		cy.visit(`${Cypress.config("baseUrl")}`);
	});
	describe("/blog", () => {
		it("/", () => {
			cy.visit(`${Cypress.config("baseUrl")}/blog`);
		});

		describe("2022 Posts", () => {
			it("R has a problem", () => {
				cy.visit(
					`${Cypress.config("baseUrl")}/blog/2022/r-has-a-problem`
				);
			});
			it("AWS Summit", () => {
				cy.visit(`${Cypress.config("baseUrl")}/blog/2022/aws-summit`);
			});
			it("Pi", () => {
				cy.visit(
					`${Cypress.config("baseUrl")}/blog/2022/homeserver-pi`
				);
			});
			it("Vercel", () => {
				cy.visit(`${Cypress.config("baseUrl")}/blog/2022/vercel`);
			});
		});

		it("/2022 redirects to root", () => {
			// TODO This test is currently broken, but expected behaviour needs evaluating
			// Reference issues/42 #42 about this
			cy.visit(`${Cypress.config("baseUrl")}/blog/2022`);
			cy.url().should("not.contain", `${Cypress.config("baseUrl")}/2022`);
		});
	});
	it("/background", () => {
		cy.visit(`${Cypress.config("baseUrl")}/background`);
	});
});

describe("Homepage checks", () => {
	beforeEach("", () => {
		cy.visit(`${Cypress.config("baseUrl")}/`);
	});

	it("Sidebar contains basic information", () => {
		cy.get("[data-cy=sidebar]").contains("About me");
	});

	it("Social Media links all work", () => {
		cy.get("[data-cy=socialLinks]").contains("Social");

		cy.get("[data-cy=socialLinks]")
			.find("[data-cy=socialLink]")
			.each((link) => {
				if (link.prop("href")) {
					cy.request({
						url: link.prop("href"),
						failOnStatusCode: false,
					});
				}
			});
	});

	it("A blog post is shown", () => {
		cy.get(".column.is-two-third").find(".blogPost");
	});
});

describe("Navbar - Desktop", () => {
	it("Logo", () => {
		cy.viewport(1920, 1080);
		cy.visit(`${Cypress.config("baseUrl")}/blog`);
		cy.get("[data-cy=navbar-logo").click();
		cy.location("pathname").then((location) => {
			location === `${Cypress.config("baseUrl")}/`;
		});
	});

	it("Home", () => {
		cy.viewport(1920, 1080);
		cy.get("[data-cy=navbar-home").click();
		cy.location("pathname").then((location) => {
			location === `${Cypress.config("baseUrl")}/`;
		});
	});

	it("Blog", () => {
		cy.viewport(1920, 1080);
		cy.get("[data-cy=navbar-blog").click();
		cy.location("pathname").then((location) => {
			location === `${Cypress.config("baseUrl")}/blog`;
		});
	});

	it("Background", () => {
		cy.viewport(1920, 1080);
		cy.get("[data-cy=navbar-background").click();
		cy.location("pathname").then((location) => {
			location === `${Cypress.config("baseUrl")}/background`;
		});
	});

	it("Light theme to dark", () => {
		// Browsers (other than Electron) are configured to launch in dark mode by default
		cy.viewport(1920, 1080);
		cy.visit(`${Cypress.config("baseUrl")}`);

		const lightTheme = "rgb(255, 255, 255)";
		const darkTheme = "rgb(0, 0, 0)";

		cy.get("[data-cy=navbar-theme]").should(
			"have.css",
			"background-color",
			`${lightTheme}`
		);

		cy.get("[data-cy=navbar-theme]").click();

		cy.get("[data-cy=navbar-theme]").should(
			"have.css",
			"background-color",
			`${darkTheme}`
		);
	});
});
