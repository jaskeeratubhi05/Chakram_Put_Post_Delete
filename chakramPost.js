var chakram = require('C:/slimerTest/node_modules/chakram'),
    expect = chakram.expect;
describe("HTTP assertions", function () {
  it("should make HTTP assertions easy", function () {
    var response = chakram.post("https://reqres.in/api/register",{"email":"peter@klaven","password":"cityslicka"});
	
    expect(response).to.have.status(201);
    return chakram.wait();
  });
}); 

