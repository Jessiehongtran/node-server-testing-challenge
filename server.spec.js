//using 3 ways: returen, async await, done

const request = require('supertest');

const server = require('./server');

describe('server.js', ()=> {
    describe('GET /', ()=> {
        it('should return 200 OK status', 
            // async 
            ()=> {
            return request(server) //return is very important here
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
            // const expectedStatusCode = 200;
            // const response = await request(server).get('/');
            // expect(response.status).toEqual(expectedStatusCode);
        });

        it('should return it is working', async ()=> {
            const res = await request(server).get('/');
            expect(res.body).toEqual("it's working!!!");
        })

        it('should return a JSON object from the index route', 
        // async 
        ()=> {
            // const response = await request(server).get('/')
            // expect(response.type).toEqual('application/json')
            request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                    done();
                })
        })
    })
})

