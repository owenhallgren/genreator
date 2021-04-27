describe('Initial Page', () => {
  // beforeEach(() => {
    // cy.intercept('https://binaryjazz.us/wp-json/genrenator/v1/genre', {fixture: 'random-genre.json'})
    // cy.fixture('random-genre.json').then((randomGenre) => {
    //         cy.intercept('https://binaryjazz.us/wp-json/genrenator/v1/genre', randomGenre);
    //     })
    //     cy.visit('http://localhost:3000')
    // cy.fixture('random-genre.json')
    // .then(randomGenre => {
    //     cy.intercept('GET', 'https://binaryjazz.us/wp-json/genrenator/v1/genre', {
    //         statusCode: 200,
    //         body: randomGenre
    //     })
    // })
    // cy.visit('http://localhost:3000/')
  // })
   beforeEach(() => {
     cy.intercept('GET', 'https://binaryjazz.us/wp-json/genrenator/v1/genre', {
  body: 'coverpunkia',
})
    //  cy.intercept('https://binaryjazz.us/wp-json/genrenator/v1/genre/', "coverpunkia")
    // cy.intercept('https://binaryjazz.us/wp-json/genrenator/v1/genre/', (req) => {
    // req.send("coverpunkia")
    //   })
    
//     cy.intercept('https://binaryjazz.us/wp-json/genrenator/v1/genre', (req) => {
//   req.continue((res) => {
//     res.send('coverpunkia')
//   })
// })
  //   cy.intercept('GET', 'https://binaryjazz.us/wp-json/genrenator/v1/genre/', {
  // statusCode: 200,
  // body: "coverpunkia",
// })
    //  cy.intercept({
    //     method: 'get',
    //     url: 'https://binaryjazz.us/wp-json/genrenator/v1/genre'
    //   },
    //   {
    //     statusCode: 200,
    //     body: 'coverpunkia'        
    //   })
    
      
    cy.visit('http://localhost:3000/')
  })

  it('As a user, when I navigate to the home page, I should see the basic layout', () => {
    
    // cy.get('.title-container')
    // .contains('Genreator')
    cy.get('.card')
    .contains("coverpunkia")
  })


  // it('As a user, when I navigate to different areas of the application, the URL should update accordingly.', () => {
  //   cy.visit('http://localhost:3000/new')
  //   cy.get('H2')
  //   .contains('Submit a new request')
  //   cy.visit('http://localhost:3000/dashboard')
  //   cy.get('H1')
  //   .contains('Active Reviews')
  //   cy.visit('http://localhost:3000/')
  //   cy.get('H2')
  //   .contains('Open Review Requests')
  // })

  // it('As a user, when I select a filter value, I will only be shown requests relevant to that filter', () => {
  //   cy.get('#languageFilter').select('Java')
  //   cy.get('.card-container')
  //   .children()
  //   .should('have.length', 1)
  // })

})