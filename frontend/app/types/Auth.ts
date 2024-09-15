interface Login {
  Name: {
    type: String;
    required: true;
  };
  Email: {
    type: String;
    required: true;
  };
}

interface Register {
  Name: {
    type: String;
    require: true;
  };
  Email: {
    type: String;
    require: true;
  };
  PhoneNo: {
    type: Number;
    require: true;
  };
  DOB: {
    type: Number;
    require: true;
  };
  Password: {
    type: String;
    require: true;
  };
}
