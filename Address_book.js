class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.validateName(firstName, "First Name");
        this.validateName(lastName, "Last Name");
        this.validateAddress(address, "Address");
        this.validateAddress(city, "City");
        this.validateAddress(state, "State");
        this.validateZip(zip);
        this.validatePhone(phone);
        this.validateEmail(email);

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    // Validate names 
    validateName(name, fieldName) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        if (!namePattern.test(name)) {
            throw new Error(`${fieldName} should start with a capital letter and have at least 3 characters.`);
        }
    }

    // Validate address, city, and state
    validateAddress(field, fieldName) {
        if (field.length < 4) {
            throw new Error(`${fieldName} should have at least 4 characters.`);
        }
    }

    // Validate ZIP code 
    validateZip(zip) {
        const zipPattern = /^\d{5}$/;
        if (!zipPattern.test(zip)) {
            throw new Error("Zip code should be exactly 5 digits.");
        }
    }

    // Validate phone number 
    validatePhone(phone) {
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        if (!phonePattern.test(phone)) {
            throw new Error("Phone number should follow the format XXX-XXX-XXXX.");
        }
    }

    // Validate email
    validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            throw new Error("Invalid email format.");
        }
    }

    displayContact() {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Address: ${this.address}, ${this.city}, ${this.state}, ${this.zip}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Email: ${this.email}`);
    }
}
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // UC1: Add a new contact with error handling for validation
    addContact(contact) {
        try {
            this.contacts.push(contact);
            console.log("Contact added successfully!");
        } catch (error) {
            console.error(`Failed to add contact: ${error.message}`);
        }
    }

    displayContacts() {
        this.contacts.forEach(contact => contact.displayContact());
    }
}

// Create an AddressBook
let myAddressBook = new AddressBook();

// valid contact
try {
    let contact1 = new Contact("Vijaylaxmi", "RKA", "4th Block", "Banglore", "Karnataka", "12345", "123-456-7890", "vijaylaxmi@gamil.com");
    myAddressBook.addContact(contact1);
} catch (error) {
    console.error(`Error: ${error.message}`);
}

//  invalid contact
try {
    let contact2 = new Contact("oja", "Ssdj", "12 St", "NY", "St", "54321", "456-789-1234", "invalidEmail.com");
    myAddressBook.addContact(contact2);
} catch (error) {
    console.error(`Error: ${error.message}`);
}

// Display 
myAddressBook.displayContacts();
