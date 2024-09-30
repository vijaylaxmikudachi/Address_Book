class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      // Validating
      const nameRegex = /^[A-Z]{3,}$/;
      const addressCityStateRegex = /^[A-Z]{4,}$/;
      const zipRegex = /^\d{5}$/;
      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!nameRegex.test(firstName)) {
        throw new Error("First name must start with a capital letter and have at least 3 characters.");
      }
  
      if (!nameRegex.test(lastName)) {
        throw new Error("Last name must start with a capital letter and have at least 3 characters.");
      }
  
      if (!addressCityStateRegex.test(address)) {
        throw new Error("Address must have at least 4 characters.");
      }
  
      if (!addressCityStateRegex.test(city)) {
        throw new Error("City must have at least 4 characters.");
      }
  
      if (!addressCityStateRegex.test(state)) {
        throw new Error("State must have at least 4 characters.");
      }
  
      if (!zipRegex.test(zip)) {
        throw new Error("ZIP code must be 5 digits.");
      }
  
      if (!phoneRegex.test(phoneNumber)) {
        throw new Error("Phone number must be in the format XXX-XXX-XXXX.");
      }
  
      if (!emailRegex.test(email)) {
        throw new Error("Invalid email address.");
      }
  
    
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
  }
  
  
  class AddressBook {
    constructor() {
      this.contacts = [];
    }
  
    addContact(contact) {
      this.contacts.push(contact);
    }
  
    removeContact(index) {
      this.contacts.splice(index, 1);
    }
  
    getContact(index) {
      return this.contacts[index];
    }
  
    getAllContacts() {
      return this.contacts;
    }
  }
  
  const addressBook = new AddressBook();
  
 
  try {
    const newContact = new Contact(
        "vijaylaxmi",
        "R K",
        "4th block",
        "Jaynagar",
        "Banglore",
        "12345",
        "9876543214",
        "vijaylaxmi@gmail.com"
    );
    addressBook.addContact(newContact);
    // ...
  } catch (error) {
    console.error(error.message);
  }