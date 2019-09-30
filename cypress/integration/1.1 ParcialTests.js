describe('Todoist login success', function() {
    it('Visits Todoist and success at login', function() {
        cy.visit('https://todoist.com/Users/showLogin?mini=1')
		cy.wait(2000)
      	cy.get('form').find('input[name="email"]').click().type("pruebasautomaticasjmar@gmail.com")
      	cy.get('form').find('input[name="password"]').click().type("Pruebas.01")
		cy.wait(2000)
		cy.screenshot();
      	cy.get('form').contains('Log').click()
		cy.wait(3000)
		cy.get('span[id="gear_holder"]').click().should('to.exist')
		cy.screenshot();
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
		cy.wait(2000)
		cy.get('span[data-text="true"]')
			.type('Test', {force: true}).wait(2000)
		cy.screenshot();
		cy.get('button[type="submit"]').click()
		cy.screenshot();
    })
	it('Create a Special Char Todo', function() {
		cy.get('.agenda_add_task').find('a').click()
		cy.get('.DraftEditor-root').find('br').type(" ", {force: true})
		cy.wait(2000)
		cy.get('span[data-text="true"]')
			.type("@='#%)(\\\"\$*}{-__.:,;<>|°¬¿", {force: true}, { parseSpecialCharSequences: false }).wait(2000)
		cy.screenshot();
		cy.get('button[type="submit"]').click()
		cy.screenshot();
    })
	it('Search Task success', function() {
		cy.get('input[class="quick_find fixed_pos"]').click().type("Test", {force: true})
		cy.wait(1000)
		cy.screenshot();
		cy.get('span[class="ist_complete_content"]').contains("Test")
		cy.screenshot();
    })
	it('Search Task unsuccess', function() {
		cy.get('input[class="quick_find fixed_pos"]').click().type("Pepito", {force: true})
		cy.wait(1000)
		cy.screenshot();
		cy.get('span[class="ist_complete_content"]').not("Pepito")
		cy.screenshot();
    })
	it('Today', function() {
		cy.get('li[data-track="navigation|today"]').click()
		cy.wait(1000)
		cy.screenshot();
		cy.get('div[id="editor"]').contains("Hoy")
		cy.screenshot();
    })
	it('Inbox', function() {
		cy.get('li[data-track="navigation|inbox"]').click()
		cy.wait(1000)
		cy.screenshot();
		cy.get('div[id="editor"]').contains("Inbox")
		cy.screenshot();
    })
	it('7Days', function() {
		cy.get('li[data-track="navigation|next_7_days"]').click()
		cy.wait(1000)
		cy.screenshot();
		cy.get('div[id="editor"]').find("h1").contains("Próximos 7 días")
		cy.screenshot();
    })
	it('Add Proyect', function() {
		cy.get('button[data-track="navigation|projects_quick_add"]').click()
		cy.wait(1000)
		cy.get('input[id="edit_project_modal_field_name"]').type("NuevoProyecto")
		cy.screenshot();
		cy.get('button[type="submit"]').click()
		cy.get('ul[id="projects_list"]').contains("NuevoProyecto")
		cy.screenshot();
    })
	it('Done Task', function() {
		cy.get('div[id="editor"]').get('div[class="ist_checkbox"]').first().click({force: true})
		cy.wait(1000)
		cy.screenshot();
		cy.get('div[class="notifier_content"]').contains("1 tarea completada")
		cy.screenshot();
    })

})