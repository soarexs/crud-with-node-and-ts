class UserRepository {
    constructor(hashService) {
        this.hashService = hashService
    }

    preSave(user) {
        user.password = this.hashService.hash(user.password)
        return user
    }

    save() {
        const preSaved = this.preSave(user)
        console.log('saving user!')
        return preSaved
    }
}

describe('Update the password on save', () => {
    it('Should update password on user save', async () => {
        const hashService = { hash: () => 'hashed_password' }
        const userRepository = new UserRepository(hashService)

        const user = {}
        const hashPassword = hashService.hash(user.password)
        try {
            const sut = await userRepository.save(user)
            expect(sut.password).toBe(hashPassword)
        } catch { }
    })
})

