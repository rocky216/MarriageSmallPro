// pages/user/user.js
const app = getApp()
var utils = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
    headimg: '',
    integral: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  edituser(){
    wx.navigateTo({
      url: '/pages/edituser/edituser'//实际路径要写全
    })
  },
  
  getUserDetail(){
    const options = {
      url: "/getUserInfo",
      method: "post"
    }
    utils.fetch(options, (res)=>{
      this.setData({ userInfo: res, headimg: res.headimg})
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
    this.getUserDetail()
    app.getIntegral((res)=>{
      this.setData({ integral: res.integral})
    })
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