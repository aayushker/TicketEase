interface Login {
  Email: string;
  Password: string;
}

interface Register {
  Name: string;
  Email: string;
  PhoneNo: number;
  DOB: number;
  Password: string;
}

export type { Login, Register };