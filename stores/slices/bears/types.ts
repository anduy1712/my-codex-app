export type TBearState = {
  firstName: string;
  lastName: string;
};

export type TBearAction = {
  updateFirstName: (firstName: TBearState["firstName"]) => void;
  updateLastName: (lastName: TBearState["lastName"]) => void;
};

export type TBearStore = TBearState & TBearAction;
