export default {
  // 注册的主题
  theme: {
    list: [
      {
        name: 'ev',
        title: '经典主题',
        img: require('@/assets/images/b1.png')
      },
      {
        name: 'future',
        title: '未来系主题',
        img: require('@/assets/images/b2.png')
      },
      {
        name: 'concise',
        title: '简洁主题',
        img: require('@/assets/images/b3.png')
      }
    ]
  },
  /**
   * 左侧导航栏数据
   * title: 显示的名字
   * icon: 显示的logo
   * name: 跳转的路由名称
   * children: 二级导航，参数同一级导航
   * 二级导航不支持 icon
   * 暂不支持三级导航
   */
  router: [
    {
      title: '首页',
      icon: 'el-icon-s-home',
      name: 'home',
      children: [
        {
          name: 'a',
          title: '表格示例'
        },
        {
          name: 'b',
          title: '表单示例'
        }
      ]
    },
    {
      title: '演示页面一',
      icon: 'el-icon-s-home',
      name: 'one',
      children: [
        {
          name: 'c',
          title: 'c页面'
        },
        {
          name: 'd',
          title: 'd页面'
        }
      ]
    },
    {
      title: '演示页面二',
      icon: 'el-icon-s-home',
      name: 'tow',
      children: [
        {
          name: 'e',
          title: 'e页面'
        },
        {
          name: 'f',
          title: 'f页面'
        }
      ]
    },
    {
      title: '演示页面三',
      icon: 'el-icon-s-home',
      name: 'g'
    }
  ]
}
