exports.TripCategory = {
    trips: (parent, args, {db}) => {
        const tripCatergoryId = parent.id
        return db.trips.filter((trip) => trip.tripCategoryId === tripCatergoryId)
    }

}