import { Sequelize } from "sequelize";
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Reservations = db.define('reservations', {
    reservation_id: {
        type: DataTypes.STRING
    },
    booking_data: {
        type: DataTypes.JSON,
        allowNull: false
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    date_updated: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});

(async () => {
    await db.sync();
})();

export default Reservations;