interface NavigationItem {
  text: string
  icon: string
  route: string
}

export const navigationItems: NavigationItem[] = [
  { text: '首頁', icon: 'mdi-home', route: '/' },
  { text: '關於', icon: 'mdi-information', route: '/about' },
  { text: '設定', icon: 'mdi-cog', route: '/settings' },
]
