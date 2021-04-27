describe('Error State', () => {
  beforeEach(() => {
     cy.intercept('GET', 'https://binaryjazz.us/wp-json/genrenator/v1/genre', {
      body: 'coverpunkia',
    })
     cy.visit('http://localhost:3000/')
  })

  it('should show an error message when network request fails', () => {   
    cy.get('nav')
    .contains('An error has occured. Please try again later.')
  })
})

describe('Initial Page', () => {
   beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('As a user, when I navigate to the home page, I should see the basic layout', () => {
    cy.get('.nav-button')
    .contains('Favorites')
    .get('.title')
    .contains("Genreator")
    .get('.random-button')
    .contains('Random Genre')
    .get('.genre-text')
    .contains('🎵')
    .get('.favorite-button')
    .contains('Favorite')
  })

  it('As a user, when I navigate to the favorites page, the nav button should change', () => {
    cy.visit('http://localhost:3000/favorites')
    cy.get('.nav-button')
    .contains('Home')
  })

  it('As a user, when I click on the favorite button, I should be given a confirmation message', () => {
    cy.get('.favorite-button').click()
    .get('.content')
    .contains('Add Genre to Favorites?')
    .get('.add-favorite-button')
    .contains('Add To Favorites')
  })

  it('As a user, when I click the favorites button, I should be taken to the favorites page', () => {
    cy.get('.nav-button').click()
    .url().should('eq', 'http://localhost:3000/favorites')
    .get('.no-genres')
    .contains('Favorite a genre to display here!')
  })

  it('As a user, when I favorite a genre, it should display in favorites', () => {
    cy.get('.favorite-button').click()
    .get('.add-favorite-button').click()
    .get('.nav-button').click()
    .get('.favorite-card')
    .contains('🎺 🎸')
  })
})

