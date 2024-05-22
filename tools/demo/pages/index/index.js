const {screenHeight, statusBarHeight} = wx.getSystemInfoSync()
const NAVBAR_HEIGHT = 44
const popupHeight = screenHeight - statusBarHeight - NAVBAR_HEIGHT
const POPUP_TOP_TRANS_Y = statusBarHeight + NAVBAR_HEIGHT

Page({
  data: {
    screenHeight,
    popupHeight,
    POPUP_TOP_TRANS_Y,
    popupInitTransY: screenHeight - 100,
    popupReady: true,
  },
  onShow() {
    const floatPanel = this.selectComponent('#nestedScrollerFloatPanel')
    floatPanel.onShow()
  },
  onPopupStatusChange(event) {
    console.log('onPopupStatusChange is:', event)
  }
})
