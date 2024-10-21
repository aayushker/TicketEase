interface Login {
  Email: string;
  Password: string;
}

interface Register {
  Name: string;
  Email: string;
  PhoneNo: number;
  DOB: string;
  Password: string;
}

export type { Login, Register };