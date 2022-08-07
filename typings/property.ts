export interface OwnedProperty {
  id: number;
  name: string;
  rental: boolean;
  owned: boolean;
  pmaUniqueId: number;
  sharedUniqueIds: string;
  days_absent: number;
  last_logged: number;
  label: string;
}
