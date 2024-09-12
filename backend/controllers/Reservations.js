import Reservations from "../models/ReservationModel.js";

export const GetReservations = async(req, res) => {
    try {
        const bookingDate = req.query.booking_date;

        const queryOptions = {"attributes": ['reservation_id', 'booking_data', 'date_created', 'date_updated']};

        if (bookingDate) {
            queryOptions.where = {
                booking_data: {
                    booking_date: bookingDate
                }
            }
        }

        const reservations = await Reservations.findAll(queryOptions);
        res.json(reservations);

    } catch (error) {
        console.error(error);
    }
}

export const GetSingleReservationsById = async(req, res) => {
    try {
        const reservations = await Reservations.findOne(
            {
                attributes: ['reservation_id', 'booking_data', 'date_created', 'date_updated'],
                where: { reservation_id: req.params.reservation_id }
            }
        );

        res.json(reservations);
    } catch (error) {
        console.error(error);
    }
}

export const GetReservationOfUser = async(req, res) => {
    try {
        const reservations = await Reservations.findAll(
            {
                attributes: ['reservation_id', 'booking_data', 'date_created', 'date_updated'],
                where: { user_id: req.params.user_id }
            }
        );

        res.json(reservations);
    } catch (error) {
        console.error(error);
    }
}