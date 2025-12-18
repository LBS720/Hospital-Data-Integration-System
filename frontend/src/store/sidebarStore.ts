/** @format */

import { makeAutoObservable } from "mobx";
import { SidebarOption } from "../constants/SidebarOptions";

class SidebarStore {
  collapsed = false;
  selected: SidebarOption | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCollapsed(val: boolean) {
    this.collapsed = val;
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  setSelected(selected: SidebarOption) {
    this.selected = selected;
  }
}

const sidebarStore = new SidebarStore();
export default sidebarStore;
