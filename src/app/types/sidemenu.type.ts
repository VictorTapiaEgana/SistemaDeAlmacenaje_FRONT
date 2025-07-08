export interface SideMenuItem {
    name: string;
    path: string;
    icon: string;
    component?: string;
    children?: SideMenuItem[];
}