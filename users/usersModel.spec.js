const users = require('./usersModel')
const db = require('../data/dbConfig')

describe('users Model', ()=> {
    // beforeEach(async ()=> {
    //     await db('users').truncate();
    // })
    it('should set environment to testing', ()=> {
        expect(process.env.NODE_ENV).toBe('test')
    })

    describe('insert()',()=> {
        it('should insert users into db', async ()=> {
            //insert a record
            await users.insert({name: 'Mary'})
            const userscheck = await db('users')

            console.log(userscheck)

            //assert the record was inserted
            expect(userscheck).toHaveLength(2)
        })
    })

    describe('update()', ()=> {
        it('should update user in db', async ()=> {
            await users.update(1, {name:'Shara'})
            const usercheck = await db('users').where({id:1}).first()
            console.log(usercheck)
            expect(usercheck).toEqual({id:1, name:'Shara'})
        })
    })
})