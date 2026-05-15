import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface PasswordResetTokenAttributes {
    id: number;
    token: string;
    user_id: number;
    expires_at: Date;
    used: boolean;
}

interface PasswordResetTokenCreationAttributes
    extends Optional<PasswordResetTokenAttributes, 'id' | 'used'> {}

class PasswordResetToken
    extends Model<PasswordResetTokenAttributes, PasswordResetTokenCreationAttributes>
    implements PasswordResetTokenAttributes
{
    public id!: number;
    public token!: string;
    public user_id!: number;
    public expires_at!: Date;
    public used!: boolean;
}

PasswordResetToken.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        token: {
            type: DataTypes.STRING(64),
            allowNull: false,
            unique: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        expires_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        used: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        tableName: 'password_reset_tokens',
        timestamps: true,       // adds createdAt / updatedAt automatically
        underscored: true,
    }
);

export default PasswordResetToken;