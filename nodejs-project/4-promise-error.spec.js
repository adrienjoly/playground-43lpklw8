﻿const expect = require("expect.js");
const { congratulateStudent, getStubFile, runStudentCode } = require("./common/techio");

const CODE_FILE = process.env.CODE_FILE || getStubFile(__filename); // "./4-promise-error.js";

let program;

describe("le programme devrait", () => {
  it(`s'exécuter sans erreur et se terminer en 5 secondes`, async () => {
    program = await runStudentCode(CODE_FILE);
  });

  it("écrire dans la console", () => {
    expect(program.getLogs().length > 0).to.be(true);
  });

  it("n'inclure que l'erreur telle quelle dans la sortie standard", () => {
    expect(program.getLogs().join("").trim()).to.match(/^FetchError: /);
  });

  it("permettre de savoir que le serveur interrogé n'existe pas", () => {
    expect(program.getLogs().join("")).to.match(/ENOTFOUND/);
    congratulateStudent();
  });
});
