interface Admin {
  openingTime: {
    type: String;
  };
  closingTime: {
    type: String;
    // required: true,
  };
  capacity: {
    type: Number;
    //  required: true,
  };
  image: {
    type: String;
  };
  otherInfo: {
    type: String;
  };
}
