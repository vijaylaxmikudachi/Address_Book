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
class AddressBookManager {
    constructor() {
        this.addressBooks = {};  // Object to hold multiple address books
    }

    // Create a new address book
    createAddressBook(bookName) {
        if (this.addressBooks[bookName]) {
            console.log(`Address Book '${bookName}' already exists.`);
        } else {
            this.addressBooks[bookName] = [];
            console.log(`Address Book '${bookName}' created successfully!`);
        }
    }

    // Check if a person already exists in the address book by first and last name
    isDuplicateContact(bookName, firstName, lastName) {
        if (this.addressBooks[bookName]) {
            const duplicate = this.addressBooks[bookName].filter(contact => contact.firstName === firstName && contact.lastName === lastName);
            return duplicate.length > 0;
        }
        return false;
    }

    // Add a contact to a specific address book after checking for duplicates
    addContactToBook(bookName, contact) {
        if (this.addressBooks[bookName]) {
            if (!this.isDuplicateContact(bookName, contact.firstName, contact.lastName)) {
                this.addressBooks[bookName].push(contact);
                console.log(`Contact '${contact.firstName} ${contact.lastName}' added to '${bookName}' successfully!`);
            } else {
                console.log(`Duplicate entry: Contact '${contact.firstName} ${contact.lastName}' already exists in '${bookName}'.`);
            }
        } else {
            console.error(`Address Book '${bookName}' does not exist.`);
        }
    }

    // Search for contacts by city
    searchByCity(bookName, city) {
        if (this.addressBooks[bookName]) {
            const contactsInCity = this.addressBooks[bookName].filter(contact => contact.city.toLowerCase() === city.toLowerCase());
            console.log(`Contacts in city '${city}':`);
            contactsInCity.forEach(contact => contact.displayContact());
            return contactsInCity;
        } else {
            console.error(`Address Book '${bookName}' does not exist.`);
            return [];
        }
    }

    // Search for contacts by state
    searchByState(bookName, state) {
        if (this.addressBooks[bookName]) {
            const contactsInState = this.addressBooks[bookName].filter(contact => contact.state.toLowerCase() === state.toLowerCase());
            console.log(`Contacts in state '${state}':`);
            contactsInState.forEach(contact => contact.displayContact());
            return contactsInState;
        } else {
            console.error(`Address Book '${bookName}' does not exist.`);
            return [];
        }
    }

    // Display all contacts from a specific address book
    displayContactsFromBook(bookName) {
        if (this.addressBooks[bookName]) {
            console.log(`Displaying contacts from Address Book '${bookName}':`);
            this.addressBooks[bookName].forEach(contact => contact.displayContact());
        } else {
            console.error(`Address Book '${bookName}' does not exist.`);
        }
    }
}




// Create an instance of AddressBookManager
let addressBookManager = new AddressBookManager();

// Create a new address book
addressBookManager.createAddressBook("Personal");

// Add contacts to the 'Personal' address book
try {
    let contact1 = new Contact("John", "Doe", "123 Main St", "New York", "New York", "12345", "123-456-7890", "john.doe@example.com");
    addressBookManager.addContactToBook("Personal", contact1);

    let contact2 = new Contact("Jane", "Doe", "456 Elm St", "Los Angeles", "California", "67890", "098-765-4321", "jane.doe@example.com");
    addressBookManager.addContactToBook("Personal", contact2);

    let contact3 = new Contact("Alice", "Smith", "789 Pine St", "New York", "New York", "12345", "111-222-3333", "alice.smith@example.com");
    addressBookManager.addContactToBook("Personal", contact3);
} catch (error) {
    console.error(`Error: ${error.message}`);
}

// Search contacts by city
addressBookManager.searchByCity("Personal", "New York");

// Search contacts by state
addressBookManager.searchByState("Personal", "California");
