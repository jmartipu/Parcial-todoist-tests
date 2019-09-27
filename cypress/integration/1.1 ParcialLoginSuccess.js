describe('Todoist login success', function() {
    it('Visits Todoist and success at login', function() {
        cy.visit('https://todoist.com/Users/showLogin?mini=1')
		cy.wait(2000)
      	cy.get('form').find('input[name="email"]').click().type("pruebasautomaticasjmar@gmail.com")
      	cy.get('form').find('input[name="password"]').click().type("Pruebas.01")
      	cy.get('form').contains('Log').click()
		cy.wait(3000)
		cy.get('span[id="gear_holder"]').click().should('to.exist')
    })
})

describe('Todoist Todo Testing', function() {
	beforeEach(function() {
    	cy.visit('https://todoist.com/Users/showLogin?mini=1')
		cy.wait(2000)
      	cy.get('form').find('input[name="email"]').click().type("pruebasautomaticasjmar@gmail.com")
      	cy.get('form').find('input[name="password"]').click().type("Pruebas.01")
      	cy.get('form').contains('Log').click()
		cy.wait(3000)
  	})
    it('Create a Normal Todo', function() {
		cy.get('.agenda_add_task').find('a').click()
		cy.get('.DraftEditor-root').find('br').type(" ", {force: true})
		cy.wait(1000)
		cy.get('span[data-text="true"]')
			.type('Test', {force: true}).wait(1000)
		cy.get('button[type="submit"]').click()
    })
	it('Create a Special Char Todo', function() {
		cy.get('.agenda_add_task').find('a').click()
		cy.get('.DraftEditor-root').find('br').type(" ", {force: true})
		cy.wait(1000)
		cy.get('span[data-text="true"]')
			.type("@='#%)(\\\"\$*}{-__.:,;<>|°¬¿?¡+~^^^", {force: true}, { parseSpecialCharSequences: false }).wait(1000)
		cy.get('button[type="submit"]').click()
    })
})