interface Ticket {
  museumName: {
    type: String;
    required: true;
  };
  time: {
    type: String;
    required: true;
  };
  paymentId: {
    type: String;
    required: true;
  };
  date: {
    type: Date;
    // required:true
  };
  day: {
    type: String;
    // required:true
  };
  qrcode: {
    type: String;
    //require:true
  };
}
