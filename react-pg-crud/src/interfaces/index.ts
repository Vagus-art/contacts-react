export interface IListProps {
  isLoading: boolean | null;
  data: IContact[] | null;
  error: string | null;
}

export interface IModalMenuProps {
  active: boolean;
  closeFunc: () => void;
  children: any;
}

export interface IContact {
  name: string;
  phone: string;
  id: number
}

export interface IListItem extends IContact {}


export interface IContactForm{
  name:string,
  phone:string,
  id:number | null
}

export interface IDataContext extends IListProps{
  search: string;
  offset: number;
  contactFormActive: boolean;
  deleteFormActive: boolean;
  currentContactData: IContactForm;
  //use this to trigger a data update
  updateSwitch: boolean;
}