import { ICard } from "atomic/atoms/Card/definitions";

export interface IInfoCard extends ICard {
  localStorageSetter: Function;
  prevLocalStorageState: any[];
  storyUrl: string;
  id: string;
  query: string;
  selectedDropdown: dropdownStates;
  createdAt: string;
}
