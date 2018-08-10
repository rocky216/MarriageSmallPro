// pages/edituser/edituser.js
var utils = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headimg: '',
    userInfo: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserDetail()
  },
  handleSubmit(){
    const { userInfo, headimg} = this.data
    const options = {
      url: "/updateUser",
      method: "post",
      data: {
        username: userInfo.username,
        mobile: userInfo.mobile,
        headimg
      }
    }
    utils.fetch(options, ()=>{
      wx.switchTab({
        url: '/pages/user/user'
      })
    })
  },
  getMobile(event){
    this.data.userInfo.mobile = event.detail.value
    this.setData({ userInfo: this.data.userInfo })
  },
  getUsername(event){
    this.data.userInfo.username = event.detail.value
    this.setData({ userInfo: this.data.userInfo})
  },
  uploadHead() {
    var _this = this
    wx.chooseImage({
      success: (res) => {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: utils.host + '/uploadImg',
          filePath: tempFilePaths[0],
          name: 'avatar',
          formData: {},
          success: (res) => {
            console.log(JSON.parse(res.data)["path"], 666)
            _this.setData({ headimg: JSON.parse(res.data)["path"] })
          }
        })
      }
    })
  },
  getUserDetail() {
    const options = {
      url: "/getUserInfo",
      method: "post"
    }
    utils.fetch(options, (res) => {
      this.setData({ userInfo: res, headimg: res.headimg })
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