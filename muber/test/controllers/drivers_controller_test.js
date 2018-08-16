const assert = require('assert')
const request = require('supertest')
const app = require('../../app')
const mongoose = require('mongoose')

const Driver = mongoose.model('driver')

describe('Drivers controller', () => {
	it("POST request to /api/driver", (done)=> {
		Driver.count().then(
			count => {
			request(app)
			.post('/api/drivers')
			.send({email: 'test@test.com'})
			.end(() => {

				Driver.count().then(
					newCount => {
						assert(newCount===count+1)
					}
					)
				done()
			})
			}
			)
	})
}
)



// Employme 
// GradConnection 
// AUstralian Internship
// Unimelb career online
// GradAustralia 
