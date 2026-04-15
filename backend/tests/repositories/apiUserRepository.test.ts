import { describe, test, expect } from 'vitest';
import ApiUser from '../../src/models/apiUser';
import { findApiUserByKey, incrementApiUserUsage } from '../../src/repositories/apiUserRepository';

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
    test('increment user usage', async () => {
        const user = await ApiUser.create({
            apiKey: 'bcd234',
            usage: 0
        });

        await incrementApiUserUsage(user.id);

        const updated = await findApiUserByKey('bcd234');

        expect(updated?.usage).toBe(1);
    });
});
