const supertest = require("supertest");

const baseurl = "https://country-info-io.vercel.app/";

describe("Test Handlers", () => {
  it("Should return status 200 when valid country name is provided", async () => {
    // Given
    const testQuery = "Ireland";
    const expectedStatus = 200;
    // When
    const response = await supertest(baseurl).get(`country/${testQuery}`);

    // Assert
    // asserting that API was resolved successfully
    expect(response.status).toBe(200);
    // asserting that API has required expected status when country is found
    expect(response.body.status).toBe(expectedStatus);
  });

  it("Should return status 404 when invalid country name is provided", async () => {
    // Given
    const testQuery = "123";
    const expectedStatus = 404;

    // When
    const res = await supertest(baseurl).get(`country/${testQuery}`);

    // Assert
    //asserting that API was resolved successfullly
    expect(res.status).toBe(200);
    //asserting that API has required expected status when input is invalid
    expect(res.body.status).toBe(404);
  });
});
