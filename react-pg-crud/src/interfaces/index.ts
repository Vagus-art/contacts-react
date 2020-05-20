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

export interface IListItem {
  name: string;
  phone: number;
}

export interface IContact {
  name: string;
  phone: string;
  id: number
}

export interface IDataContext extends IListProps{
  search: string;
  offset: number;
  editFormActive: boolean;
  addFormActive: boolean;
}