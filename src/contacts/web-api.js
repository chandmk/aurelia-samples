let latency = 0;
let id = 0;
function getId() {
  return ++id;
}
let contacts = [
  {
    id: getId(),
    firstName: 'John',
    lastName: 'Tolien',
    email: 'tolkien@inklings.com',
    phonenumber: '867-5309'
  },
  {
    id: getId(),
    firstName: 'Clive',
    lastName: 'Lewis',
    email: 'lewis@inklings.com',
    phonenumber: '867-5309'
  },
  {
    id: getId(),
    firstName: 'Owen',
    lastName: 'Barfield',
    email: 'barfield@inklings.com',
    phonenumber: '867-5309'
  },
  {
    id: getId(),
    firstName: 'Charles',
    lastName: 'Williams',
    email: 'williams@inklings.com',
    phonenumber: '867-5309'
  },
  {
    id: getId(),
    firstName: 'Roger',
    lastName: 'Green',
    email: 'green@inklings.com',
    phonenumber: '867-5309'
  },
]

export class WebAPI {
  getContactList() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = contacts.map(c => {
          return {
            id: c.id,
            firstName: c.firstName,
            lastName: c.lastName,
            email: c.email
          };
        });

        resolve(results);
        this.isRequesting = false;
      },
      latency);
    });
  }

  getContactDetails(id) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() =>{
        let found = contacts.filter(c => c.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  saveContact(contact) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(()=>{
        let instance = JSON.parse(JSON.stringify(contact));
        let found = contacts.filter(c => c.id == contact.id)[0];
        if(found) {
          let index = contacts.indexOf(found);
          contact[index] = instance;
        }else {
          instance.id = getId();
          contacts.push(contact);
        }
        resolve(instance);
        this.isRequesting = false;
      }, latency);
    });
  }


}
