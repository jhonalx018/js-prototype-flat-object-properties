const employeeInfo = {
    employeeName: "John Doe",
    employeeId: 27,
    salary: {
        '2018-19': "400000INR",
        '2019-20': "500000INR",
        '2020-21': "650000INR"
    },
    address: {
        locality: {
            address1: "1600 pebble road",
            address2: "Nearby XYZ Bank",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    }
}

// Not changing the original object
Object.prototype.flat = function(flattedObject = {}) {
    // We are working with the same reference for the -> argument #flattedObject 
    // at the beginning #flattedObject has a new object, nevertheless, in its further call we are sending that same object
    Object.entries(this).forEach(([key, value]) => {
        if (typeof value === 'object') {
            // call recursivly
            value.flat(flattedObject)
        } else {
            flattedObject[key] = value
        }
    })

    // returning new object with flatted properties
    return flattedObject
}

// new object with flatted properties
console.log(employeeInfo.flat())
// old one
console.log(employeeInfo)
