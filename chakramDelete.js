var chakram = require('C:/slimerTest/node_modules/chakram'),
    expect = chakram.expect;
describe("HTTP assertions", function () {
  it("should make HTTP assertions easy", function () {
    var response = chakram.delete("https://reqres.in/api/users/2");
	console.log(response);
    expect(response).to.have.status(204);
    return chakram.wait();
  });
}); 

