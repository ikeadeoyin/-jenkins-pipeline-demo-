const supertest = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();

request = supertest.agent('http://localhost:3000');

describe('GET /', function() {
  it('responds with home page', function(done) {
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/)
      .expect(200, done);
  });
});