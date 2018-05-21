export class User {
  email: string;
  password: string;
  name: string;
  phone: string;
  picture: string;
  address: Address;
  kind: String;
}

class Address {
  city: string;
  state: string;
}

enum kindsOfProfile {
  Student,
  Company
}
