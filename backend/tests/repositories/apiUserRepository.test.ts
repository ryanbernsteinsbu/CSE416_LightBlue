import { describe, test, expect } from 'vitest';
import ApiUser from '../../src/models/apiUser';
import { findApiUserByKey } from '../../src/repositories/apiUserRepository';

describe('ApiUser Repository', () => {
    test('create and find user', async () => {
        await ApiUser.create({
            apiKey: 'abc123',
            usage: 0
        });

        const user = await findApiUserByKey('abc123');

        expect(user).not.toBeNull();
        expect(user?.apiKey).toBe('abc123');
    });
});
