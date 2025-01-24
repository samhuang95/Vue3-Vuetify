interface NavigationItem {
  text: string
  icon: string
  route: string
}

export const navigationItems: NavigationItem[] = [
  { text: '關於', icon: 'mdi-information', route: '/' },
  { text: '設定', icon: 'mdi-cog', route: '/settings' },
]
