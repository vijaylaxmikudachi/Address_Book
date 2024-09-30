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

    // Add a contact to a specific address book
    addContactToBook(bookName, contact) {
        if (this.addressBooks[bookName]) {
            this.addressBooks[bookName].push(contact);
            console.log(`Contact added to '${bookName}' successfully!`);
        } else {
            console.error(`Address Book '${bookName}' does not exist.`);
        }
    }

    // Find a contact by first and last name in a specific address book
    findContactByName(bookName, firstName, lastName) {
        if (this.addressBooks[bookName]) {
            const contact = this.addressBooks[bookName].find(contact => contact.firstName === firstName && contact.lastName === lastName);
            if (contact) {
                return contact;
            } else {
                console.error(`Contact '${firstName} ${lastName}' not found in '${bookName}'.`);
                return null;
            }
        } else {
            console.error(`Address Book '${bookName}' does not exist.`);
            return null;
        }
    }

    // Edit an existing contact's details
    editContact(bookName, firstName, lastName, updatedDetails) {
        const contact = this.findContactByName(bookName, firstName, lastName);
        if (contact) {
            try {
                if (updatedDetails.firstName) contact.validateName(updatedDetails.firstName, "First Name");
                if (updatedDetails.lastName) contact.validateName(updatedDetails.lastName, "Last Name");
                if (updatedDetails.address) contact.validateAddress(updatedDetails.address, "Address");
                if (updatedDetails.city) contact.validateAddress(updatedDetails.city, "City");
                if (updatedDetails.state) contact.validateAddress(updatedDetails.state, "State");
                if (updatedDetails.zip) contact.validateZip(updatedDetails.zip);
                if (updatedDetails.phone) contact.validatePhone(updatedDetails.phone);
                if (updatedDetails.email) contact.validateEmail(updatedDetails.email);

                // Update the contact details if validation passes
                contact.firstName = updatedDetails.firstName || contact.firstName;
                contact.lastName = updatedDetails.lastName || contact.lastName;
                contact.address = updatedDetails.address || contact.address;
                contact.city = updatedDetails.city || contact.city;
                contact.state = updatedDetails.state || contact.state;
                contact.zip = updatedDetails.zip || contact.zip;
                contact.phone = updatedDetails.phone || contact.phone;
                contact.email = updatedDetails.email || contact.email;

                console.log(`Contact '${firstName} ${lastName}' updated successfully in '${bookName}'.`);
            } catch (error) {
                console.error(`Failed to update contact: ${error.message}`);
            }
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
//addressBookManager.listAddressBooks();

addressBookManager.displayContactsFromBook("Personal");

// Search for a contact and edit their details
addressBookManager.editContact("Personal", "Sweety", "Ana", {
    address: "789 Oak St",       // New address
    phone: "555-555-5555",       // New phone number
    email: "sweety.new@example.com" // New email
});

// Display contacts after editing
addressBookManager.displayContactsFromBook("Personal");

