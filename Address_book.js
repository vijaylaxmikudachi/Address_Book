class Contact {
    constructor(fName, lName, add, city, state, zip, ph, email) {
      this.fName = fName;
      this.lName = lName;
      this.add = add;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.ph = ph;
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
  
  // Example usage:
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
  
  