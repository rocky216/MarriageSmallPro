// pages/login/login.js
var utils = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  getMobile(event){
    this.setData({ mobile: event.detail.value})
  },
  getPassword(event){
    this.setData({ password: event.detail.value })
  },
  handleSubmit(){
    
    const options = {
      url: "/login",
      method: "post",
      data: {
        mobile: this.data.mobile,
        password: this.data.password
      }
    }
    utils.fetch(options, (res)=>{
      
      wx.setStorageSync("stoken", res.stoken)
      wx.switchTab({url: "/pages/index/index"})
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})