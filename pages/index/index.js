// pages/demo/index.js
// 移动动画
let animation = wx.createAnimation({});
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: [
      "1212", '21321', "1212", '21321', "1212", '21321', "1212", '21321', "1212", '21321'
    ],
    options2: [[
      "1212", '21321', "1212", '21321', "1212", '21321', "1212", '21321', "1212", '21321'
    ], [
      "1212", '21321', "1212", '21321', "1212", '21321', "1212", '21321', "1212", '21321'
    ], [
      "1212", '21321', "1212", '21321', "1212", '21321', "1212", '21321', "1212", '21321'
    ]],
    value: '',
    value2: '',
   
  },
  select(e) {
    console.log(e)
    this.setData({
      value: this.data.options[e.detail.value]
    })
  },
  select2(e) {
    console.log(e)
    let opt1 = this.data.options2[0][e.detail.value[0]]
    let opt2 = this.data.options2[1][e.detail.value[1]]
    let opt3 = this.data.options2[2][e.detail.value[2]]
    this.setData({
      value2: `${opt1},${opt2},${opt3}`
    })
  },
 
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  onShow() {
  },

})