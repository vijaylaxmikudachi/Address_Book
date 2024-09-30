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

    // create a new address book
    createAddressBook(bookName) {
        if (this.addressBooks[bookName]) {
            console.log(`Address Book '${bookName}' already exists.`);
        } else {
            this.addressBooks[bookName] = [];
            console.log(`Address Book '${bookName}' created successfully!`);
        }
    }

    //  add a contact 
    addContactToBook(bookName, contact) {
        if (this.addressBooks[bookName]) {
            this.addressBooks[bookName].push(contact);
            console.log(`Contact added to '${bookName}' successfully!`);
        } else {
            console.error(`Address Book '${bookName}' does not exist.`);
        }
    }

    // display all 
    displayContactsFromBook(bookName) {
        if (this.addressBooks[bookName]) {
            console.log(`Displaying contacts from Address Book '${bookName}':`);
            this.addressBooks[bookName].forEach(contact => contact.displayContact());
        } else {
            console.error(`Address Book '${bookName}' does not exist.`);
        }
    }

    // list all available address books
    listAddressBooks() {
        const bookNames = Object.keys(this.addressBooks);
        if (bookNames.length === 0) {
            console.log("No address books available.");
        } else {
            console.log("Available Address Books:");
            bookNames.forEach(bookName => console.log(bookName));
        }
    }
}

let addressBookManager = new AddressBookManager();

addressBookManager.createAddressBook("Personal");
addressBookManager.createAddressBook("Professional");

// Add 
try {
    let contact1 = new Contact("Sweety", "Ana", "123 Main St", "CityName", "State", "12345", "123-456-7890", "sweety@example.com");
    addressBookManager.addContactToBook("Personal", contact1);
    
    let contact2 = new Contact("Reshma", "Patil", "456 Elm St", "CityName", "State", "67890", "098-765-4321", "reshma@example.com");
    addressBookManager.addContactToBook("Personal", contact2);
} catch (error) {
    console.error(`Error: ${error.message}`);
}

//Add
try {
    let contact3 = new Contact("Anna", "Bella", "789 Oak St", "BusinessCity", "BusinessState", "54321", "321-654-9870", "anna@work.com");
    addressBookManager.addContactToBook("Professional", contact3);
} catch (error) {
    console.error(`Error: ${error.message}`);
}


addressBookManager.displayContactsFromBook("Personal");


addressBookManager.displayContactsFromBook("Professional");

// List all available address books
addressBookManager.listAddressBooks();

