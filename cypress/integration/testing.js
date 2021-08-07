it('login username kosong & password kosong',function(){
    cy.visit('http://siakad.polinema.ac.id/login/index/err/6')
    cy.get('#username')
    cy.get('#chk_tampilkan').click()
    cy.get('#password')
    cy.get('.form-actions > .btn').click()

})
it('login username valid & password salah',function(){
    cy.visit('http://siakad.polinema.ac.id/login/index/err/6')
    cy.get('#username').type(1831710070)
    cy.get('#chk_tampilkan').click()
    cy.get('#password').type('akumanusia')
    cy.get('.form-actions > .btn').click()

})
it('login username salah & password valid',function(){
    cy.visit('http://siakad.polinema.ac.id/login/index/err/6')
    cy.get('#username').type('akuikan')
    cy.get('#chk_tampilkan').click()
    cy.get('#password').type('irithel04')
    cy.get('.form-actions > .btn').click()

})
it('login username salah & password salah',function(){
    cy.visit('http://siakad.polinema.ac.id/login/index/err/6')
    cy.get('#username').type('akumanusia')
    cy.get('#chk_tampilkan').click()
    cy.get('#password').type('akuikan')
    cy.get('.form-actions > .btn').click()

})
it('lupa password',function(){
    cy.visit('http://siakad.polinema.ac.id/login/index/err/6')
    cy.get('#forget-password').click()

})
it('login username valid & password valid',function(){
    cy.visit('http://siakad.polinema.ac.id/login/index/err/6')
    cy.get('#username').type(1831710070)
    cy.get('#chk_tampilkan').click()
    cy.get('#password').type('irithel04')
    cy.get('.form-actions > .btn').click()

})