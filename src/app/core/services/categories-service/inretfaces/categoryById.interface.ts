export interface CategoryById {
  id: string;
  name: string;
  parentId: string;
  childs: Child[];
}

export interface Child {
  id: string;
  parentId: string;
  name: string;
}
