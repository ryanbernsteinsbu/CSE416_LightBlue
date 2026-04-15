import { describe, test, expect, beforeEach } from 'vitest';
import Player, { Position, Status } from '../../src/models/player';
import {
    createPlayer,
    findAllPlayers,
    findPlayerById,
    findPlayerByMlbId,
    findPlayerByPosition,
    findPlayerByStatus,
    updatePlayer,
    deletePlayer
} from '../../src/repositories/playerRepository';

describe('Player Repository', () => {
    beforeEach(async () => {
        await Player.destroy({ where: {} }); // clean DB between tests
    });

    test('create and find player by MLB id', async () => {
        await createPlayer(
            '665742',
            27,
            'Juan',
            'Soto',
            true,
            [Position.OUTFIELD],
            { hr: 137 },
            { hr: 119 },
            { hr: 129 },
            Status.ACTIVE,
            5,
            'NYM',
            'NL'
        );

        const player = await findPlayerByMlbId('665742');

        expect(player).not.toBeNull();
        expect(player?.firstName).toBe('Juan');
        expect(player?.mlbPlayerId).toBe('665742');
    });

    test('find all players', async () => {
        await createPlayer(
            '665742',
            27,
            'Juan',
            'Soto',
            true,
            [Position.OUTFIELD],
            { hr: 137 },
            { hr: 119 },
            { hr: 129 },
            Status.ACTIVE,
            5,
            'NYM',
            'NL'
        );

        await createPlayer(
            '545361',
            34,
            'Mike',
            'Trout',
            true,
            [Position.OUTFIELD],
            { hr: 26 },
            { hr: 10 },
            { hr: 18 },
            Status.IL_10,
            5,
            'LAA',
            'AL'
        );

        const players = await findAllPlayers();

        expect(players.length).toBe(2);
    });

    test('find player by id', async () => {
        const player = await createPlayer(
            '123',
            34,
            'Mike',
            'Trout',
            true,
            [Position.OUTFIELD],
            { hr: 26 },
            { hr: 10 },
            { hr: 18 },
            Status.IL_10,
            5,
            'LAA',
            'AL'
        );

        const found = await findPlayerById(player.id);

        expect(found).not.toBeNull();
        expect(found?.id).toBe(player.id);
    });

    // test('find by position', async () => {
    //     await createPlayer(
    //         '123',
    //         34,
    //         'Mike',
    //         'Trout',
    //         true,
    //         [Position.OUTFIELD],
    //         { hr: 26 },
    //         { hr: 10 },
    //         { hr: 18 },
    //         Status.IL_10,
    //         5,
    //         'LAA',
    //         'AL'
    //     );
    //
    //     const players = await findPlayerByPosition(Position.OUTFIELD);
    //
    //     expect(players.length).toBe(1);
    //     expect(players[0].mlbPlayerId).toBe('123');
    // });
    //
    // test('find by status', async () => {
    //     await createPlayer(
    //         '123',
    //         34,
    //         'Mike',
    //         'Trout',
    //         true,
    //         [Position.OUTFIELD],
    //         { hr: 26 },
    //         { hr: 10 },
    //         { hr: 18 },
    //         Status.IL_10,
    //         5,
    //         'LAA',
    //         'AL'
    //     );
    //
    //     const players = await findPlayerByStatus(Status.IL_10);
    //
    //     expect(players.length).toBe(1);
    //     expect(players[0].mlbPlayerId).toBe('123');
    // });

    // test('update player', async () => {
    //     const player = await createPlayer(
    //         '123',
    //         34,
    //         'Mike',
    //         'Trout',
    //         true,
    //         [Position.OUTFIELD],
    //         { hr: 26 },
    //         { hr: 10 },
    //         { hr: 18 },
    //         Status.IL_10,
    //         5,
    //         'LAA',
    //         'AL'
    //     );
    //
    //     const updated = await updatePlayer(player.id, {
    //         age: 27,
    //         firstName: 'Updated'
    //     });
    //
    //     expect(updated).not.toBeNull();
    //     expect(updated?.age).toBe(27);
    //     expect(updated?.firstName).toBe('Updated');
    // });

    test('delete player', async () => {
        const player = await createPlayer(
            '123',
            34,
            'Mike',
            'Trout',
            true,
            [Position.OUTFIELD],
            { hr: 26 },
            { hr: 10 },
            { hr: 18 },
            Status.IL_10,
            5,
            'LAA',
            'AL'
        );

        const result = await deletePlayer(player.id);

        expect(result).toBe(true);

        const found = await findPlayerById(player.id);
        expect(found).toBeNull();
    });

});
