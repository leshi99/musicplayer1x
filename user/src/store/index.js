// import Vue from 'vue'
// import Vuex from 'vuex'
// the whole point of indexjs is to have a central store to hold and manage you state

// you want all logic in your code to be done in the sotre file
// new vuex store
// now we are passing objects to the store
// export const store = new Vuex.Store({
// every store has a state here is the initial state
//   state: {},
// mutations are to change the state
// this for every changing the current state
// so for this example i will need to
// implement the mutatuions on when the submit button is pressed
// error messages as well
// so to set it up you first need the current state as the argument
// you then pass in the mutation in the function
// select a certain user or for this a certain contact information
// we need to pass a second argument as the info so
// we know what we are making the mutation on in the current state
// always have to make sure when you done coding the mutation you add it to the state
// also in all methods you make sure you are returning something
//   mutations: {},
// if there where any async code it wouldnt work on the mutation
// reason being the code might not of changed we you call
// mutations work in an order so it reads then writes
// actions to dispatch the mutations
// to solve this problem we use actions
//   actions: {},
// the actions is the middle man between the state and mutation
// the action is run before the mutation is committed
// to get the stored data in are componenets
// you use any name for the action object normally
// its the same name as the mutation cause thats what it will work on
// get an argument of the actions object name of anything you want for this it will be the
// using the context argument you can run the commit method
// and pass the mutation method as a string
// in the main actions object you can pass another argument
// called payload or the specific id you want
// then pass it as a second object to the commit method
//   getters: {}
// })
// getters always need to return something
// how to configure the store function above
