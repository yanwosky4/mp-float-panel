/**
 * @file 浮动面板
 */

Component({
  options: {
    pureDataPattern: /^$/, // 指定所有 $ 开头的数据字段为纯数据字段
  },
  behaviors: ['wx://component-export'],
  export() {
    return {
      onHide: () => this.onHide(),
      onShow: () => this.onShow(),
    }
  },
  properties: {
    screenHeight: Number,
    popupHeight: Number, // 简化的定义方式
    POPUP_TOP_TRANS_Y: Number,
    popupInitTransY: Number,
    isReady: {
      type: Boolean,
      observer(newVal) {
        if (newVal === true) { // ready
          // this.onShow()
          const {popupInitTransY} = this.properties
          this.data.$popupTransY = popupInitTransY
        }
      }
    },
  },
  data: {
    $moveElmSelector: '.popupContainerWithPopup', // 纯数据字段
    $popupTransY: 0,
    left: '-100vw',
  }, // 私有数据，可用于模版渲染

  methods: {
    onHide() {
      this.setData({left: '-100vw'})
    },
    onShow() {
      this.setData({left: '0'})
    },
    onChangeTransY({transY}) {
      this.data.$popupTransY = transY
      const POPUP_TOP_TRANS_Y = this.properties.POPUP_TOP_TRANS_Y
      // 1: Full // 弹窗最大化
      // 2: Min  // 弹窗最小化
      const popupStatus = (transY === POPUP_TOP_TRANS_Y) ? 1 : 2
      this.triggerEvent('change-status', popupStatus)
    },
  }

})
