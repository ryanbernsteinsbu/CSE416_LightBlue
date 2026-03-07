// Used AI to help with syntax
import { DataTypes, Model, Association} from 'sequelize';
import sequelize from '../config/database';
import League from './league';

class User extends Model {
    // Fields
    public id!: number;
    public email!: string;
    public hashedPassword!: string;
    public displayName!: string;

    public readonly leagues?: League[];
    public static assocations: {
        leagues: Association<User, League>;
    };

    public static associate(models: any) {
        User.hasMany(models.League, { foreignKey: 'user_id', as: 'leagues' });
    }
}

User.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    hashedPassword: {
        type: DataTypes.STRING,
        allowNull: false
    },
    displayName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName:'users'
});

export default User;

//     @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//     private List<League> leagues = new ArrayList<>();

//     // Constructors
//     public User() {}

//     // Getters
//     public Long getId() { return id; }
//     public String getEmail() { return email; }
//     public String getHashedPassword() { return hashedPassword; }
//     public String getDisplayName() { return displayName; }
//     public List<League> getLeagues() { return leagues; }

//     // Setters
//     public void setId(Long id) { this.id = id; }
//     public void setEmail(String email) { this.email = email; }
//     public void setHashedPassword(String hashedPassword) { this.hashedPassword = hashedPassword; }
//     public void setDisplayName(String displayName) { this.displayName = displayName; }
//     public void setLeagues(List<League> leagues) { this.leagues = leagues; }
// }