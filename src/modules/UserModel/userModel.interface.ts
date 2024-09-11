export type TUser = {
    name: string;            // The name of the user.
    email: string;           // The contact email address.
    password: string;        // The account password.
    phone: string;           // The contact phone number.
    address: string;         // The physical address.
    role: 'admin' | 'user';  // The role of the user, either 'admin' or 'user'.
  };
  