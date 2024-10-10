const sidebarDeviceItems: SideBarItems[] = [
    {
        label: 'All devices',
        path: '/devices',
    },
    {
        label: 'brand1',
        path: '/devices/brand1',
    },
    {
        label: 'brand2',
        path: '/devices/brand2',
    },
]

const sidebarGroupItems: SideBarItems[] = [
    {
        label: 'all groups',
        path: '/groups'
    }, {
        label: 'group A',
        path: '/groups/groupa'
    }, {
        label: 'group B',
        path: '/groups/groupB'
    }, {
        label: 'group C',
        path: '/groups/groupC'
    },
]
export const sideBarItems: SideBarType[] = [
    { label: "Home", path: '/home', isAccordion: false },
    { label: "Devices", path: "/devices", isAccordion: true, items: sidebarDeviceItems },
    { label: "Groups", path: "/groups", isAccordion: true, items: sidebarGroupItems },
    { label: "API rates", path: "/api-rates", isAccordion: false },
    { label: "Settings", path: "/settings", isAccordion: false }

]



export type SideBarType = {
    label: string,
    path: string,
    isAccordion: boolean,
    items?: SideBarItems[],
}

export type SideBarItems = {
    label: string,
    path: string,
}


