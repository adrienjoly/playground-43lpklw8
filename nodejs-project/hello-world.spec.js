﻿const assert = require('assert');
const expect = require('expect.js');

const logged = [];

describe('le programme devrait', () => {

  it(`s'exécuter sans erreur`, () => {
    const actualConsoleLog = console.log; // backup console
    // mock console
    console.log = function (param) {
      logged.push(param);
    };
    require('./hello-world.js'); // load and run student code
    console.log = actualConsoleLog; // restore console
  });

  it('écrire dans la console', () => {
    expect(logged).to.have.length(1)
  })

  it('afficher le mot "hello"', () => {
    //assert(/hello/i.test(logged.join()));
    expect(logged.join()).to.match(/hello/i);
  })

  it('afficher le mot "world"', () => {
    //assert(/world/i.test(logged.join()));
    expect(logged.join()).to.match(/world/i);
  })

  it('respecter à la lettre le message demandé', () => {
    assert.strictEqual(["Hello World"], logged);
    printMessage(`👌 Nickel ! Ton code valide tout ce qui était demandé !`);
    printMessage(`Tu peux passer à l'exercice suivant.`);
  })
});

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}